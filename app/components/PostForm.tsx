"use client";

import React, { useState } from 'react';


interface Post {
  title: string;
  content: string;
  status: string;
}

/**
 * 簡易CMS投稿フォームコンポーネント
 */
const PostForm = () => {
  // 1. 現在入力中のフォームの状態を管理
  const [formData, setFormData] = useState<Post>({
    title: '',
    content: '',
    status: 'draft'
  });

  // 2. 投稿された記事の一覧を保持する配列
  const [posts, setPosts] = useState<Post[]>([]);

  // 3. 入力欄の変化を検知してStateを更新する関数
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,    // 既存の入力をコピー
      [name]: value   // 変更された項目だけ上書き
    });
  };

  // 4. フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ページリロードを防止

    // タイトルが空の場合は投稿させない（簡単なバリデーション）
    if (!formData.title.trim()) {
      alert("タイトルを入力してください！");
      return;
    }

    // 新しい投稿をリストの先頭に追加し、入力欄をリセットする
    setPosts([formData, ...posts]);
    setFormData({ title: '', content: '', status: 'draft' });
    
    console.log("現在の全投稿リスト:", [formData, ...posts]);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '20px', marginBottom: '20px' }}>簡易CMS：記事作成</h1>
      
      {/* 投稿フォーム */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>タイトル</label>
          <input
            name="title"
            type="text"
            placeholder="記事のタイトル"
            value={formData.title}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>本文</label>
          <textarea
            name="content"
            placeholder="本文を入力してください"
            value={formData.content}
            onChange={handleChange}
            rows={5}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>公開設定</label>
          <select 
            name="status" 
            value={formData.status} 
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="draft">下書き</option>
            <option value="published">公開</option>
          </select>
        </div>

        <button 
          type="submit" 
          style={{ padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          記事を保存する
        </button>
      </form>

      <hr style={{ margin: '40px 0' }} />

      {/* 投稿一覧の表示 */}
      <div>
        <h2 style={{ fontSize: '18px' }}>投稿一覧 ({posts.length}件)</h2>
        {posts.length === 0 ? (
          <p style={{ color: '#888' }}>まだ投稿はありません。</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} style={{ border: '1px solid #eee', padding: '15px', marginBottom: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{post.title}</h3>
              <p style={{ whiteSpace: 'pre-wrap', color: '#666' }}>{post.content}</p>
              <span style={{ 
                fontSize: '12px', 
                padding: '2px 8px', 
                borderRadius: '10px', 
                backgroundColor: post.status === 'published' ? '#e6fffa' : '#edf2f7',
                color: post.status === 'published' ? '#2c7a7b' : '#4a5568'
              }}>
                {post.status === 'published' ? '公開済み' : '下書き'}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PostForm;