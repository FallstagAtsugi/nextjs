import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/post";

export async function getStaticPaths() {
  //ブログ投稿データのファイル名(id)を取得。
  const paths = getAllPostIds();

  return {
    paths, //どのパスが事前にレンダリングされるのか決める。
    fallback: false, //あとで説明。(falseにすると、上のpathsに含まれてないあらゆるパスはアクセスすると404ページになる。)
  };
}

//SSG(id(ファイル名)に基づいて必要なデータを取得)
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id); //あとでasyncとawaitをつける。

  console.log(postData);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br></br>
      {postData.date}
      <br></br>
      {postData.contentHTML}
    </Layout>
  );
}
