import Image from "next/image";
import "../styles/main.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="page-top">
      <div className="link-contents">
        <a className="link-txt" href="https://syosyo.jp" target="_blank" rel="noopener noreferrer">
        <Image
                    className="syosyo-thumbnail fade-in"
                    src="/img/syosyo.jp.png"
                    alt="syosyo.jp site"
                    width={5140}
                    height={3132}
                    priority
                  />
        </a>
      </div>
      <div className="link-contents">
        <a className="link-txt" href="https://scalloped-chartreuse-5bd.notion.site/219c75973b4880e68b22d787fa2b7ca3?source=copy_link" target="_blank" rel="noopener noreferrer">
        <Image
                    className="syosyo-thumbnail fade-in"
                    src="/img/syosyo-notion.png"
                    alt="syosyo-notion site"
                    width={5140}
                    height={3132}
                    priority
                  />
        </a>
        
      </div>
      <div className="link-contents">
        <a className="link-txt" href="https://syosyo.info" target="_blank" rel="noopener noreferrer">
        <Image
                    className="syosyo-thumbnail fade-in"
                    src="/img/syosyo.info.png"
                    alt="syosyo.info site"
                    width={5140}
                    height={3132}
                    priority
                  />
        </a>
      </div>
      <div className="link-contents">
        <a className="link-txt" href="https://note.com/syosyo_" target="_blank" rel="noopener noreferrer">
        <Image
                    className="syosyo-thumbnail fade-in"
                    src="/img/syosyo-note.png"
                    alt="syosyo-note site"
                    width={5140}
                    height={3132}
                    priority
                  />
        </a>
      </div>
      <div className="link-contents">
        <a className="link-txt" href="https://www.instagram.com/syosyo.office/" target="_blank" rel="noopener noreferrer">
        <Image
                    className="syosyo-thumbnail fade-in"
                    src="/img/syosyo-instagram.png"
                    alt="syosyo-instagram site"
                    width={5140}
                    height={3132}
                    priority
                  />
        </a>
      </div>
      <footer>
        <a className="link-txt" href="mailto:syosyo.office@gmail.com">syosyo.office@gmail.com</a>
      </footer>
    </main>
   
  );
}
