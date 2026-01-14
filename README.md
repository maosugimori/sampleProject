# My Next.js Learning Project 🚀

このプロジェクトは、Next.js (App Router) の基礎から実践的な UI 実装までを学習するためのリポジトリです。
1つずつコンポーネントを自作し、拡張していくプロセスを記録しています。

## 🛠 実装済みの機能
- **ドロワーメニュー (Navigation)**: 
  - `useState` を利用した開閉ギミックの実装。
  - `aside` タグを利用したセマンティックな HTML 構造。
  - Z-index を駆使したオーバーレイ（背景幕）の実装。
- **共通リンクコンポーネント (LinkComponent)**:
  - `next/link` をラップした自作コンポーネント。
  - `onClick` プロップスを拡張し、ページ遷移と同時にドロワーを閉じる連動機能を実装。

## 📖 学習したトピック

### 1. Server vs Client Components
- `layout.tsx` (Server) と `Navigation.tsx` (Client) の役割分担。
- `'use client';` ディレクティブの使用タイミングと、`metadata` との共存不可問題の解決。

### 2. CSS Modules によるスタイリング
- `.module.css` を用いたスコープ付きスタイルの適用。
- Flexbox を使ったレイアウト構築と、`fixed` ポジションによる UI 要素の固定。

### 3. コンポーネントの再利用性
- 自分で作った `LinkComponent` をドロワーメニュー内に組み込む「コンポーネントの合成」を実践。

### 4. Git 管理のベストプラクティス
- `.next` や `node_modules` など、自動生成される成果物を `.gitignore` で除外する重要性。

## 🚀 実行方法

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev