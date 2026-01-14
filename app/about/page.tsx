import { LinkComponent } from "../components/LinkComponent";

export default function About() {
  return (
      <div> 
          <h1>Aboutな ページ</h1>
          hogeコンポーネントのリンクはこちら→ <LinkComponent linkPath="/contact" linkName="contactページへ" />
      </div>
  )
}

