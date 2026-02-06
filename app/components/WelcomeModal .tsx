'use client'; // Next.jsでブラウザ専用機能（localStorage等）を使うために必須

import { useState, useEffect, CSSProperties } from 'react';

export default function WelcomeModal() {
  // モーダル自体の開閉状態
  const [isOpen, setIsOpen] = useState(false);
  // チェックボックスの「次回から表示しない」が選択されているかどうか
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    /**
     * 1. マウント時にブラウザの保存領域を確認
     */
    const isHidden = localStorage.getItem('hideWelcomeModal');

    // 【開発用デバッグコード】
    // 動作確認を何度も行いたい時は、以下のコメントを外すと保存したフラグを削除できる
    // localStorage.removeItem('hideWelcomeModal');

    /**
     * 2. 表示判定
     * 文字列の "true" が保存されていなければ（＝まだ一度もチェックして閉じていなければ）表示する
     */
    if (isHidden === "true") {
      setIsOpen(false); // 保存済みなら開かない
    } else {
      setIsOpen(true);  // 初回、またはチェックせずに閉じた場合は開く
    }
  }, []);

  /**
   * 閉じるボタンが押された時の処理
   */
  const handleClose = () => {
    // もし「次回から表示しない」にチェックが入っていたら、ブラウザに保存する
    if (dontShowAgain) {
      localStorage.setItem('hideWelcomeModal', 'true');
    }
    // モーダルを閉じる
    setIsOpen(false);
  };

  // isOpenがfalseの場合は何もレンダリングしない（早期リターン）
  if (!isOpen) return null;

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <h2>お知らせ</h2>
        <p>STAFF START風の最新アップデート情報です！</p>
        
        <label style={{ display: 'block', marginBottom: '10px', cursor: 'pointer' }}>
          <input 
            type="checkbox" 
            checked={dontShowAgain} 
            // チェックを入れるたびに state を更新
            onChange={(e) => setDontShowAgain(e.target.checked)} 
          />
          次回から表示しない
        </label>

        <button onClick={handleClose}>閉じる</button>
      </div>
    </div>
  );
}

/**
 * レイアウト用スタイル
 */
// 画面全体を覆う半透明の背景
const modalOverlayStyle: CSSProperties = { 
  position: 'fixed', 
  top: 0, 
  left: 0, 
  width: '100%', 
  height: '100%', 
  background: 'rgba(0,0,0,0.5)', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center',
  zIndex: 1000 // 他の要素より手前に出す
};

// モーダル本体の白い箱
const modalContentStyle: CSSProperties = { 
  background: '#fff', 
  padding: '20px', 
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)' // 少し影をつけて浮かせる
};