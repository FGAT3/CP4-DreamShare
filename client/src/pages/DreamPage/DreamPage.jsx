import { useLoaderData } from "react-router-dom";
import CardDream from "../../components/CardDream/CardDream";
import "./DreamPage.scss";

function DreamPage() {
  const dreams = useLoaderData();

  return (
    <main>
      <h1>You too can post your dreams and share them with the community</h1>
      <ul className="dream-list">
        {dreams.map((dream) => (
          <li key={dream.id}>
            <CardDream dream={dream} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default DreamPage;
