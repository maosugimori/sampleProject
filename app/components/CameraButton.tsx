'use client';

import { useRef, CSSProperties } from 'react';
import { buttonStyle } from './PhotoLibraryButton';

/**
 * 直接カメラを起動して撮影するコンポーネント
 */
export const CameraButton = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      alert(`カメラで撮影完了: ${file.name}`);
    }
  };

  return (
    <>
      <button onClick={handleClick} style={cameraButtonStyle}>
        📸 カメラで撮影する
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        capture="environment" // 背面カメラを強制起動
        style={{ display: 'none' }}
      />
    </>
  );
};

const cameraButtonStyle: CSSProperties = {
  ...buttonStyle,
  backgroundColor: '#28a745' // カメラは色を変えて区別
};