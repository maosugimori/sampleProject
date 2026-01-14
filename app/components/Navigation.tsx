'use client';
import { useState } from 'react';
import layoutStyles from "../layout.module.css";
import { LinkComponent } from './LinkComponent';

export function Navigation({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  // メニューを閉じる処理を共通化
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={layoutStyles.container}>
      {/* ハンバーガーボタン */}
      <button 
        className={layoutStyles.menuButton} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '閉じる' : '≡ メニュー'}
      </button>

      {/* ドロワー本体 */}
      <aside className={`${layoutStyles.drawer} ${isOpen ? layoutStyles.open : ''}`}>
        <nav className={layoutStyles.sidebar}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <LinkComponent linkPath="/" linkName="ホーム" onClick={closeMenu} />
            </li>
            <li>
              <LinkComponent linkPath="/about" linkName="About" onClick={closeMenu} />
            </li>
            <li>
              <LinkComponent linkPath="/contact" linkName="お問い合わせ" onClick={closeMenu} />
            </li>
          </ul>
        </nav>
      </aside>

      {/* 背景の幕 */}
      {isOpen && (
        <div className={layoutStyles.overlay} onClick={closeMenu} />
      )}

      {/* メインコンテンツ部分 */}
      <div className={layoutStyles.mainContent}>
        {children}
      </div>
    </div>
  );
}