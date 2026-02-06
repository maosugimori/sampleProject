"use client";

/**
 * Ca4laSite
 * PLUSMIRROR_design「似合う帽子がわかる フェイス診断」SP_01_TOP に基づくランディングページ。
 * ヒーロー・ABOUT・FLOW・CTA・監修・フッターで構成。
 */


const TYPE_LABELS = [
  "CLASSIC",
  "ROMANTIC",
  "CLASSIC",
  "CREATIVE",
  "LUXURY",
  "MODE",
  "STYLISH",
  "DRAMATIC",
] as const;

export default function Ca4laSite() {
  return (
    <div
      className="min-h-screen text-[#3E3A39]"
      style={{ backgroundColor: "#F1ECE4" }}
    >
      <main className="mx-auto w-full max-w-[375px]">
        {/* --- ヒーロー --- */}
        <section className="px-4 pb-12 pt-12">
          <p className="text-center text-base font-semibold leading-[1.7] tracking-[0.03em] text-[#3E3A39]">
            あなたに似合う帽子を徹底的に解説します
          </p>
          <h1 className="mt-6 text-center text-[28px] font-medium leading-[1.36] tracking-[0.02em] text-[#04928D]">
            似合う帽子がわかる
            <br />
            フェイス診断
          </h1>
          <p className="mt-4 text-center text-[13px] leading-none text-[#A79069]">
            by +PLUS MIRROR
          </p>
          <div
            className="mx-4 mt-6 h-px w-full"
            style={{ backgroundColor: "#A79069", opacity: 0.6 }}
          />
          {/* 所要時間 */}
          <div className="mx-4 mt-6 flex h-9 items-center justify-center gap-0">
            <span className="text-right text-[17px] font-medium leading-none tracking-[-0.02em] text-[#A79069]">
              所要時間
            </span>
            <span className="text-[35px] font-medium leading-none tracking-[-0.02em] text-[#A79069]">
              1
            </span>
            <span className="text-[17px] font-medium leading-none tracking-[-0.02em] text-[#A79069]">
              分
            </span>
          </div>
          {/* フェイスタイプ例（8枚） */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 px-2">
            {TYPE_LABELS.map((label) => (
              <div
                key={label}
                className="flex h-40 w-[118px] flex-col rounded-md rounded-b-sm"
                style={{ backgroundColor: "#FBF6EF" }}
              >
                <div
                  className="mt-3.5 h-[115px] w-[115px] shrink-0 self-center rounded-full"
                  style={{ backgroundColor: "#E8E2D8" }}
                />
                <div className="mt-2 flex flex-1 items-center justify-center gap-1">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "#A79069" }}
                  />
                  <span className="text-[9px] font-normal leading-none text-[#A79069]">
                    {label}
                  </span>
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "#A79069" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- ABOUT --- */}
        <section id="about" className="px-4 pb-16">
          <div
            className="overflow-hidden rounded-md border px-6 py-8"
            style={{ borderColor: "#A79069", backgroundColor: "#FFFFFF" }}
          >
            <p className="text-sm font-normal text-[#A79069]">ABOUT</p>
            <h2 className="mt-1 text-lg font-medium leading-snug text-[#04928D]">
              似合う帽子がわかる
              <br />
              フェイス診断とは
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#3E3A39]">
              なんとなく帽子を被ったものの
              <br />
              「しっくりこない」「なんだか違う気がする」、
              <br />
              逆に「この形は似合ってる気がする・・・？」と
              <br />
              感じたことはありませんか？
            </p>
            <p className="mt-6 text-sm font-medium leading-snug text-[#3E3A39]">
              帽子選びの{" "}
              <span className="text-[#04928D]">ポイントは大きく４つ</span>{" "}
              あります。
            </p>
            <div className="mt-6 space-y-4">
              {[
                "サイズが合っているか？",
                "顔の形（大人顔・子供顔）に対して\n高さが合っているか？",
                "顔のパーツ（直線・曲線）に対して\n形が合っているか？",
                "お顔の印象やファッションのテイスト的に\n合っているか？",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-md p-3"
                  style={{ backgroundColor: "#F8F6F2" }}
                >
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: "#A79069" }}
                  >
                    {i + 1}
                  </div>
                  <p className="whitespace-pre-line text-sm font-medium leading-snug text-[#3E3A39]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-medium leading-snug text-[#3E3A39]">
              このうち②～④は{" "}
              <span className="text-[#04928D]">フェイスタイプが大きく関係</span>{" "}
              しています。
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#3E3A39]">
              このコンテンツではスマートフォンのカメラを使って
              実際にフェイスタイプ診断を簡単に行えます！
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#3E3A39]">
              そして、あなたのタイプに合う帽子の
              <br />
              選び方のポイントや具体的に似合うアイテムの
              <br />
              ご紹介まで徹底的に解説していきます！
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#3E3A39]">
              お相手の写真があればギフト選びにも
              <br />
              参考にしていただけます。
            </p>
          </div>
        </section>

        {/* --- FLOW --- */}
        <section id="flow" className="px-4 pb-16">
          <p className="text-sm font-normal text-[#A79069]">FLOW</p>
          <h2 className="mt-1 text-lg font-medium leading-snug text-[#04928D]">
            診断の流れ
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#3E3A39]">
            簡単なステップで詳しい診断結果と解説が
            <br />
            表示されます！
            <br />
            診断時間はなんと30秒！
          </p>
          <div className="mt-6 space-y-6">
            {[
              { step: "01", label: "利用規約・プライバシーポリシーに同意", btn: "同意する" },
              { step: "02", label: "スマホで写真を撮影！（アップロードも可能）", btn: "撮影する" },
              { step: "03", label: "撮影した写真にガイドラインを\n合わせてアップロード！" },
              { step: "04", label: "診断結果と帽子選びの解説が出てきます！" },
            ].map(({ step, label, btn }) => (
              <div key={step} className="flex items-start gap-4">
                <div className="flex shrink-0 flex-col">
                  <span className="text-[10px] font-normal text-[#A79069]">STEP</span>
                  <span className="text-xl font-medium leading-none text-[#A79069]">
                    {step}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="whitespace-pre-line text-sm font-medium leading-snug text-[#3E3A39]">
                    {label}
                  </p>
                  {btn && (
                    <button
                      type="button"
                      className="mt-3 rounded-md px-4 py-2 text-sm font-bold text-white"
                      style={{ backgroundColor: "#04928D" }}
                    >
                      {btn}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA --- */}
        <section className="px-4 pb-16">
          <p className="text-sm font-normal text-[#3E3A39]">
            利用規約・プライバシーポリシー
          </p>
          <div className="mt-6 flex flex-col items-center gap-4">
            <button
              type="button"
              className="flex w-full max-w-[320px] items-center justify-center gap-2 rounded-md py-4 text-base font-bold text-white"
              style={{ backgroundColor: "#04928D" }}
            >
              同意してはじめる
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <p className="text-center text-xs leading-snug text-[#3E3A39]">
              +PLUS MIRRORはInnovation Studioが提供するサービスです
            </p>
          </div>
        </section>

        {/* --- 監修 --- */}
        <section className="px-4 pb-16">
          <div
            className="overflow-hidden rounded-md px-6 py-8"
            style={{ backgroundColor: "#FBF6EF" }}
          >
            <p
              className="inline-block rounded border px-2 py-1 text-xs font-medium"
              style={{ borderColor: "#A79069", color: "#A79069" }}
            >
              監修
            </p>
            <div className="mt-6 flex gap-4">
              <div
                className="h-20 w-20 shrink-0 rounded-full"
                style={{ backgroundColor: "#E8E2D8" }}
              />
              <div>
                <p className="text-sm font-medium text-[#3E3A39]">
                  +PLUS MIRROR プロデューサー
                </p>
                <p className="mt-1 text-base font-bold text-[#3E3A39]">
                  目黒 希望
                </p>
                <p className="mt-4 text-xs leading-relaxed text-[#3E3A39]">
                  アパレル企業にて販売員を経験後、複数のIT企業でWEBサイトやアプリの企画やディレクターを担当。
                  その後、アパレル企業にてECサイトやCRMといったオンライン領域のUIUXを中心に担当しつつ、リアル店舗も含めたOMOプロジェクトにも参画。
                  現在はオンライン上の体験と店舗での体験を融合させ、オフライン、オンライン両軸で顧客体験をアップデートする仕組み作りやサービス企画を行なっている。その一つとして様々な診断の資格を取得し「+PLUS MIRROR」を企画開発した。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- フッター --- */}
        <footer className="bg-[#222] px-6 py-10 text-white">
          <div className="mx-auto max-w-[375px]">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
              <a href="#" className="hover:underline">ご利用規約</a>
              <a href="#" className="hover:underline">メンバーズ規約</a>
              <a href="#" className="hover:underline">会社概要</a>
              <a href="#" className="hover:underline">特定商取引法に基づく表示</a>
              <a href="#" className="hover:underline">プライバシーポリシー</a>
            </div>
            <p className="mt-6 text-xs text-white/80">
              ©CA4LA INC. All Rights Reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
