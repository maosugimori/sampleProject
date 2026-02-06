"use client";

/**
 * PhotoUpload
 * PLUSMIRROR planning 用の写真アップロードUI。
 * 「写真を撮る」「写真をアップロード」の2アクションと、OK/NG例の説明カードを表示する。
 */

import React, { useCallback, useRef, useState } from "react";
import { Camera, Image as ImageIcon, X } from "lucide-react";

export interface PhotoUploadProps {
  /** ファイル選択時に親へ渡すコールバック（選択解除時は null） */
  onFileSelect?: (file: File | null) => void;
  /** input[type=file] の accept（デフォルト: image/*） */
  accept?: string;
  /** 複数選択可否 */
  multiple?: boolean;
  /** 無効化（ボタン・削除が効かなくする） */
  disabled?: boolean;
  /** ルート要素の追加クラス */
  className?: string;
  /** 「写真を撮る」押下時。カメラ起動などは親で実装する想定 */
  onCameraClick?: () => void;
}

const PhotoUpload = ({
  onFileSelect,
  accept = "image/*",
  multiple = false,
  disabled = false,
  className = "",
  onCameraClick,
}: PhotoUploadProps) => {
  /** 選択中画像の Object URL。プレビュー表示とメモリ解放に使用 */
  const [preview, setPreview] = useState<string | null>(null);
  /** 選択中ファイル名。プレビュー下の表示用 */
  const [fileName, setFileName] = useState<string | null>(null);
  /** 隠し input[type=file] への参照。「写真をアップロード」クリックでこれを叩くため */
  const fileInputRef = useRef<HTMLInputElement>(null);

  /**
   * ファイル受け取りの共通処理。
   * 画像以外は無視し、前のプレビューがあれば revoke してから新規で Object URL を生成・保持する。
   * 親への通知（onFileSelect）もここで行う。
   */
  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files?.length) {
        if (preview) URL.revokeObjectURL(preview);
        setPreview(null);
        setFileName(null);
        onFileSelect?.(null);
        return;
      }
      const file = files[0];
      if (!file.type.startsWith("image/")) return;
      if (preview) URL.revokeObjectURL(preview);
      const url = URL.createObjectURL(file);
      setPreview(url);
      setFileName(file.name);
      onFileSelect?.(file);
    },
    [onFileSelect, preview]
  );

  /**
   * input[type=file] の onChange。
   * 選ばれたファイルを handleFiles に渡し、同じファイルを再選択できるよう value をリセットする。
   */
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    [handleFiles]
  );

  /**
   * プレビュー削除・再選択用。
   * Object URL を revoke し、プレビュー・ファイル名をクリアして onFileSelect(null) で親に通知する。
   */
  const onRemove = useCallback(() => {
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
    setFileName(null);
    onFileSelect?.(null);
  }, [preview, onFileSelect]);

  /**
   * 「写真をアップロード」クリック時。
   * 隠し input を programmatic click してファイル選択ダイアログを開く。
   */
  const handleUploadClick = useCallback(() => {
    if (disabled) return;
    fileInputRef.current?.click();
  }, [disabled]);

  /**
   * 「写真を撮る」クリック時。
   * カメラ起動などは親の onCameraClick に委譲する。
   */
  const handleCameraClick = useCallback(() => {
    if (disabled) return;
    onCameraClick?.();
  }, [disabled, onCameraClick]);

  return (
    <div
      className={`flex flex-col items-center gap-8 bg-white px-5 pt-12 ${className}`}
      style={{ width: "390px", minHeight: "844px" }}
    >
      {/* タイトル: 何をアップロードすべきかユーザーに伝える */}
      <h2 className="text-center text-lg font-bold leading-[1.7] text-black" style={{ width: "350px" }}>
        全身が写った写真を
        <br />
        アップロードしてください
      </h2>

      {/* プレビュー: 選択済み画像をOK/NG例の上に表示し、削除・再選択可能にする */}
      {preview && (
        <div className="flex flex-col items-center gap-3" style={{ width: "350px" }}>
          <div className="relative overflow-hidden rounded-lg bg-gray-200" style={{ width: "100%", aspectRatio: "178/212" }}>
            <img
              src={preview}
              alt="プレビュー"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="truncate px-4 text-sm text-gray-600" style={{ maxWidth: "100%" }}>
            {fileName}
          </p>
          {/* 削除して再選択: onRemove で Object URL 解放と親へ null 通知 */}
          {!disabled && (
            <button
              type="button"
              onClick={onRemove}
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              削除して再選択
            </button>
          )}
        </div>
      )}

      {/* OK例/NG例カード: どんな写真が有効/無効かひと目で分かるようにする */}
      <div className="flex gap-2" style={{ width: "350px" }}>
        {/* OK例: 着用 or 平置きで商品全体が写っていることを示す */}
        <div
          className="flex flex-col items-center gap-2 rounded-[10px] px-4 pb-4 pt-3"
          style={{ backgroundColor: "#FFEFEF", flex: 1 }}
        >
          <div className="flex items-center justify-center gap-1">
            <div
              className="flex h-5 w-5 items-center justify-center rounded-full border-[3px]"
              style={{ borderColor: "rgba(206, 16, 50, 0.5)" }}
            />
            <span className="text-[13px] font-bold leading-none text-[#CE1032]">
              OK例
            </span>
          </div>
          <div className="flex w-full gap-1">
            <div
              className="h-[43.67px] flex-1 rounded-[3px] border border-[#CCCCCC]"
              style={{ backgroundColor: "#f0f0f0" }}
            />
            <div
              className="h-[43.67px] flex-1 rounded-[3px] border border-[#CCCCCC]"
              style={{ backgroundColor: "#e0e0e0" }}
            />
            <div
              className="h-[43.67px] flex-1 rounded-[3px] border border-[#CCCCCC]"
              style={{ backgroundColor: "#d0d0d0" }}
            />
          </div>
          <p className="text-center text-[11px] leading-[1.4] text-black">
            着用もしくは平置きで
            <br />
            商品全体が写っているもの
          </p>
        </div>

        {/* NG例: 半身・座り・複数・部分だけ写っている等がNGであることを示す */}
        <div
          className="flex flex-col items-center gap-2 rounded-[10px] px-4 pb-4 pt-3"
          style={{ backgroundColor: "#EEEEEE", flex: 1 }}
        >
          <div className="flex items-center justify-center gap-1">
            <div className="flex h-[18px] w-[18px] items-center justify-center">
              <X size={18} className="text-black/50" strokeWidth={2} />
            </div>
            <span className="text-[13px] font-bold leading-none text-black">
              NG例
            </span>
          </div>
          <div className="flex w-full">
            <div
              className="h-[43.67px] w-full rounded-[3px] border border-[#CCCCCC]"
              style={{ backgroundColor: "#c0c0c0" }}
            />
          </div>
          <p className="text-center text-[11px] leading-[1.4] text-black">
            半身や座り、複数商品、
            <br />
            商品全体が写っていないもの
          </p>
        </div>
      </div>

      {/* ボタンエリア: カメラ起動 or ファイル選択の入口 */}
      <div className="flex flex-col gap-[10px]">
        {/* 写真を撮る: onCameraClick でカメラ起動などを親に委譲 */}
        <button
          type="button"
          onClick={handleCameraClick}
          disabled={disabled}
          className="flex flex-row items-center justify-center gap-2 rounded-[5px] border-2 border-[#222222] bg-[#222222] text-white whitespace-nowrap disabled:opacity-60"
          style={{ width: "350px", height: "50px", padding: "13px 24px" }}
        >
          <Camera size={19} strokeWidth={1.3} className="shrink-0" />
          <span className="text-[15px] font-bold leading-[1.5]">写真を撮る</span>
        </button>

        {/* 写真をアップロード: 隠し input を叩いてファイル選択ダイアログを開く */}
        <button
          type="button"
          onClick={handleUploadClick}
          disabled={disabled}
          className="flex flex-row items-center justify-center gap-2 rounded-[5px] border-2 border-[#222222] bg-[#222222] text-white whitespace-nowrap disabled:opacity-60"
          style={{ width: "350px", height: "50px", padding: "13px 24px" }}
        >
          <ImageIcon size={19} strokeWidth={1.3} className="shrink-0" />
          <span className="text-[15px] font-bold leading-[1.5]">写真をアップロード</span>
        </button>
      </div>

      {/* 非表示のファイル入力: ボタンクリックで開くため UI には出さず、アクセシビリティ用に aria-label を付与 */}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={onChange}
        disabled={disabled}
        className="hidden"
        aria-label="写真をアップロード"
      />

      {/* フッター: PLUSMIRROR 提供であることを示す（powered by） */}
      <div className="relative mt-auto flex items-end gap-1" style={{ alignSelf: "flex-start", marginLeft: "10px", marginTop: "auto" }}>
        <span className="text-[10px] font-medium leading-none text-[#656565]">
          powered by
        </span>
        <div className="h-[14px] w-[120px] bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export default PhotoUpload;
