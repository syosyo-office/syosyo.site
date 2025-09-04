import Image from "next/image";
import "../styles/main.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="page-top">
      <div className="link-contents fade-in">
        <a className="link-txt" href="https://syosyo.jp" target="_blank" rel="noopener noreferrer">しょしょのサイト(syosyo.jp)</a>
      </div>
      <div className="link-contents fade-in">
        <a className="link-txt" href="https://scalloped-chartreuse-5bd.notion.site/219c75973b4880e68b22d787fa2b7ca3?source=copy_link" target="_blank" rel="noopener noreferrer">しょしょの制作過程(notion)</a>
      </div>
      <div className="link-contents fade-in">
        <a className="link-txt" href="https://syosyo.info" target="_blank" rel="noopener noreferrer">しょしょのリンクページ(当サイト)</a>
      </div>
      <div className="link-contents fade-in">
        <a className="link-txt" href="https://note.com/syosyo_" target="_blank" rel="noopener noreferrer">しょしょのnote</a>
      </div>
      <div className="link-contents fade-in">
        <a className="link-txt" href="https://www.instagram.com/syosyo.office/" target="_blank" rel="noopener noreferrer">しょしょのインスタ</a>
      </div>
      <footer>
        <a className="link-txt" href="mailto:syosyo.office@gmail.com">syosyo.office@gmail.com</a>
      </footer>
    </main>
   
  );
}
