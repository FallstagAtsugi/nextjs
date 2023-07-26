import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>私は駆け出しエンジニアです。Next.jsを勉強しています。</p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="" />
            </Link>
            <Link href="/">
              <a>SSGとSSRの使い分けの場面はいつなのか？</a>
              <br></br>
              <small>February 23, 2020</small>
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  );
}
