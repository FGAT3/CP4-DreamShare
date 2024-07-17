import NavigationChevron from "../../components/NavigationChevron/NavigationChevron";

import "./HomePage.scss";

function HomePage() {
  return (
    <main>
      <h1 className="home-title">Where imagination meets reality</h1>
      <NavigationChevron route="/#articles" />
      <h2 id="articles">Learn more about dreams</h2>
      <NavigationChevron route="/#dreams" />
      <h2 id="dreams">Share your dreams with others</h2>
      <NavigationChevron isUp />
    </main>
  );
}

export default HomePage;
