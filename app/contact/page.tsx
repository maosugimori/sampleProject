import { LinkComponent } from "../components/LinkComponent";

export default function Contact() {
  return (
      <div> 
          <h1>Contact ページ</h1>
          hogeコンポーネントのリンクはこちら→ <LinkComponent linkPath="/about" linkName="aboutページへ" />
      </div>
  )

}