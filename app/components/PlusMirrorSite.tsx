"use client"
import  { useState } from 'react';
import { Play, Menu } from 'lucide-react';

const PlusMirrorSite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white">
      {/* Header - PC */}
      <header className="hidden md:block fixed top-0 w-full bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">PLUS MIRROR</div>
          <nav className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-emerald-400 transition">ABOUT</a>
            <a href="#menu" className="hover:text-emerald-400 transition">MENU</a>
            <a href="#point" className="hover:text-emerald-400 transition">POINT</a>
            <a href="#voice" className="hover:text-emerald-400 transition">USER VOICE</a>
            <a href="#topics" className="hover:text-emerald-400 transition">TOPICS</a>
            <a href="#award" className="hover:text-emerald-400 transition">AWARD</a>
            <a href="#media" className="hover:text-emerald-400 transition">MEDIA</a>
            <a href="#shop" className="hover:text-emerald-400 transition">SHOP LIST</a>
          </nav>
        </div>
      </header>

      {/* Header - Mobile */}
      <header className="md:hidden fixed top-0 w-full bg-gray-900/95 backdrop-blur z-50">
        <div className="px-4 py-4 flex justify-between items-center">
          <div className="text-lg font-bold">PLUS MIRROR</div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-emerald-500 p-2 rounded"
          >
            <Menu size={24} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800">
            <nav className="flex flex-col p-4 space-y-4">
              <a href="#about" className="hover:text-emerald-400">ABOUT</a>
              <a href="#menu" className="hover:text-emerald-400">MENU</a>
              <a href="#point" className="hover:text-emerald-400">POINT</a>
              <a href="#voice" className="hover:text-emerald-400">USER VOICE</a>
              <a href="#topics" className="hover:text-emerald-400">TOPICS</a>
              <a href="#award" className="hover:text-emerald-400">AWARD</a>
              <a href="#media" className="hover:text-emerald-400">MEDIA</a>
              <a href="#shop" className="hover:text-emerald-400">SHOP LIST</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen mt-16 md:mt-0">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>
        </div>
        
        {/* Hero Content - PC */}
        <div className="hidden md:flex relative h-full items-center max-w-7xl mx-auto px-8">
          <div className="max-w-2xl">
            <div className="text-sm text-gray-300 mb-4 tracking-wider">世界初のオリジナルインタラクティブミラー</div>
            <h1 className="text-7xl font-bold mb-8 leading-tight">
              +PLUS MIRROR
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              AIカメラによるアイテムレコメンドや<br />
              さまざまなAIタイプ診断から<br />
              あなたの本当の「似合う」が見つかります
            </p>
            <div className="flex gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold transition">
                詳しくみる
              </button>
              <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition flex items-center gap-2">
                <Play size={20} fill="white" />
                動画
              </button>
            </div>
          </div>
        </div>

        {/* Hero Content - Mobile */}
        <div className="md:hidden relative h-full flex items-center justify-center px-6">
          <div className="text-center">
            <div className="text-xs text-gray-300 mb-3">本当の「似合う」が見つかる体験型ミラー</div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              +PLUS MIRROR
            </h1>
            <p className="text-base mb-6 leading-relaxed">
              AIカメラによるアイテムレコメンドや<br />
              さまざまなAIタイプ診断から<br />
              あなたの本当の「似合う」が見つかります
            </p>
            <div className="flex flex-col gap-3 items-center">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-bold w-48">
                詳しくみる
              </button>
              <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 w-48 justify-center">
                <Play size={18} fill="white" />
                動画
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-gray-950 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">ABOUT</h2>
          <div className="w-20 h-1 bg-emerald-400 mb-12 md:mb-16"></div>
          
          {/* PC Layout */}
          <div className="hidden md:grid grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
                無料で、手軽に、<br />
                本当の似合うを見つけませんか？
              </h3>
              <p className="text-gray-400 leading-relaxed text-base mb-6">
                「本当の似合うが見つかる」をコンセプトに、<br />
                AIカメラレコメンドやフェイス・パーソナルカラー診断、ファッション診断など
              </p>
              
              <div className="mt-12 space-y-6">
                <div>
                  <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2">
                    <span className="text-xs">Concept</span>
                    <span className="text-xs text-gray-500">顧客から店主までの思い</span>
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    ECで便利に買い物ができるようになった今、店舗の<br />
                    付加価値とは何かを改めて考えました。
                  </p>
                </div>
                
                <div className="border-l-2 border-emerald-400 pl-4">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    その中で【オンラインの強みである検索性とオフライン<br />
                    の強みである偶然的消費を掛け合わせた新しいお買<br />
                    い物体験の提供】をしたいという思いからスタートしました。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden bg-gray-800 aspect-[3/4]">
                  <img 
                    src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=800&fit=crop" 
                    alt="Store 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden bg-gray-800 aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&h=400&fit=crop" 
                    alt="Store 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-12">
                <div className="rounded-lg overflow-hidden bg-gray-800 aspect-[3/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=1000&fit=crop" 
                    alt="Store 3" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <h3 className="text-2xl font-bold mb-6 leading-relaxed">
              楽しく。手軽に。<br />
              本当の似合うを見つけませんか？
            </h3>
            
            <p className="text-gray-400 leading-relaxed text-sm mb-8">
              「本当の似合うが見つかる」をコンセプトに、<br />
              AIカメラレコメンドやフェイス・パーソナルカラー診断、ファッション診断などと様々な機能を搭載している<br />
              世界初のオリジナルインタラクティブミラーです。
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="rounded-lg overflow-hidden bg-gray-800 aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=400&fit=crop" 
                  alt="Store" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-gray-800 aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop" 
                  alt="Mirror" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-emerald-400 font-bold mb-2 text-sm">
                  Concept <span className="text-gray-500 font-normal">顧客から店主までの思い</span>
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  ECで便利に買い物ができるようになった今、店舗の付加価値とは何かを改めて考えました。
                </p>
              </div>
              
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  その中で【オンラインの強みである検索性とオフラインの強みである偶然的消費を掛け合わせた新しいお買い物体験の提供】をしたいという思いからスタートしました。
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  「+PLUS MIRROR」では様々なAI診断により多角的に「似合う」を提案し、店舗のEC化を促進する取り組みです。オフラインから始めていくオンライン連携も可能です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlusMirrorSite;