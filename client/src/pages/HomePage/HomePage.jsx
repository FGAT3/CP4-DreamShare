import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import decodeToken from "../../services/decodeToken";
import NavigationChevron from "../../components/NavigationChevron/NavigationChevron";

import "./HomePage.scss";
import CardArticle from "../../components/CardArticle/CardArticle";
import CardDream from "../../components/CardDream/CardDream";

function HomePage() {
  const { setAuth } = useContext(AuthContext);

  const [dreams, articles] = useLoaderData();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = decodeToken(token);
      setAuth(userData);
    }
  }, []);

  return (
    <main>
      <h1 className="home-title">Where imagination meets reality</h1>
      <NavigationChevron route="/#articles" />
      <h2 id="articles">Learn more about dreams</h2>
      <ul className="article-list ">
        {articles.map((article) => (
          <li key={article.id} className="article-home">
            <CardArticle article={article} />
          </li>
        ))}
      </ul>
      <NavigationChevron route="/#dreams" />
      <h2 id="dreams">Share your dreams with others</h2>
      <ul className="dream-list">
        {dreams.map((dream) => (
          <li key={dream.id}>
            <CardDream dream={dream} />
          </li>
        ))}
      </ul>
      <NavigationChevron isUp />
    </main>
  );
}

export default HomePage;
