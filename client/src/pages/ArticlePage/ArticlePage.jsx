// import { useLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import CardArticle from "../../components/CardArticle/CardArticle";
import "./ArticlePage.scss";

function ArticlePage() {
  const articles = useLoaderData();

  return (
    <main>
      <h1>Discover the articles written by our editorial team</h1>
      <ul className="article-list">
        {articles.map((article) => (
          <li key={article.id}>
            <CardArticle article={article} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ArticlePage;
