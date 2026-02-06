'use client';

import { useState, useEffect } from 'react';

export default function ApiDataPage() {
  // 1. ローディング状態を管理するフラグ（最初は true）
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // 2. APIリクエストを送る
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("通信失敗:", error);
      } finally {
        // 3. 成功しても失敗しても、通信が終わったらアニメーションを終了する
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // 4. フラグによって表示を切り替える
  return (
    <main>
      {isLoading ? (
        <div className="animation-screen">
          {/* ここにGSAPやFramer Motionのアニメーションを配置 */}
          <p>読み込み中...</p>
        </div>
      ) : (
        <div className="content-screen">
          <h1>データ取得完了！</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}