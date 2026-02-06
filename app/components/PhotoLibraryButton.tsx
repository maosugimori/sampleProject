'use client';

import { CSSProperties, useRef } from 'react';

/**
 * 写真ライブラリから画像を選択するコンポーネント
 */
export const PhotoLibraryButton = () => {
  // 隠している input 要素にアクセスするための ref
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // ボタンがクリックされたら、隠している input をプログラム的にクリックする
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      alert(`ライブラリから選択: ${file.name}`);
      // ここにアップロード処理などを記述
    }
  };

  return (
    <>
      <button onClick={handleClick} style={buttonStyle}>
        🖼 写真ライブラリを開く
      </button>
      {/* 実際の入力フォームは非表示にする */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
    </>
  );
};

export const buttonStyle: CSSProperties = {
  padding: '12px 20px',
  backgroundColor: '#0070f3', 
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold'
};