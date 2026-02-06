import AnimationTest from "../components/AnimationTest";
import { CameraButton } from "../components/CameraButton";
import { LinkComponent } from "../components/LinkComponent";
import { PhotoLibraryButton } from "../components/PhotoLibraryButton";
import WelcomeModal from "../components/WelcomeModal ";

export default function About() {
  return (
      <div> 
          <h1>Aboutな ページ</h1>

          <div className="">
            <WelcomeModal />
            <div style={{ display: 'flex', gap: '10px', padding: '20px' }}>
              <PhotoLibraryButton />
              <CameraButton />
            </div>
          </div>
          hogeコンポーネントのリンクはこちら→ <LinkComponent linkPath="/contact" linkName="contactページへ" />
      </div>
  )
}

