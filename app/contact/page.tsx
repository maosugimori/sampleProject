import { LinkComponent } from "../components/LinkComponent";
import PhotoUpload from "../components/Common/photoUpload";
import Ca4laSite from "../components/ca4laSite";

export default function Contact() {
  return (
      <div> 
          <h1>Contact ページ</h1>
          hogeコンポーネントのリンクはこちら→ <LinkComponent linkPath="/about" linkName="aboutページへ" />

          <Ca4laSite />
      </div>
  )

}