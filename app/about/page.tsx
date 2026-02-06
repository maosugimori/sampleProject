import { LinkComponent } from "../components/LinkComponent";
import PostForm from "../components/PostForm";

export default function About() {
  return (
      <div> 
          <h1>Aboutな ページ</h1>

          <div className="">
            <PostForm />
          </div>
          hogeコンポーネントのリンクはこちら→ <LinkComponent linkPath="/contact" linkName="contactページへ" />
      </div>
  )
}

