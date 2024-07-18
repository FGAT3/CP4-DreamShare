// import { useLoaderData } from "react-router-dom";
import CardArticle from "../../components/CardArticle/CardArticle";

function ArticlePage() {
  // const articles = useLoaderData();

  // console.log(articles);

  return (
    <main>
      <h1>Discover the articles written by our editorial team</h1>
      <CardArticle />
    </main>
  );
}

export default ArticlePage;
