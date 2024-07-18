// import { useLoaderData } from "react-router-dom";
import CardDream from "../../components/CardDream/CardDream";

function DreamPage() {
  // const dreams = useLoaderData();

  // console.log(dreams);
  return (
    <main>
      <h1>You too can post your dreams and share them with the community</h1>
      <CardDream />
    </main>
  );
}

export default DreamPage;
