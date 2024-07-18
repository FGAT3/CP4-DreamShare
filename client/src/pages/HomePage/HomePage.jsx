import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import decodeToken from "../../services/decodeToken";
import NavigationChevron from "../../components/NavigationChevron/NavigationChevron";

import "./HomePage.scss";

function HomePage() {
  const { setAuth } = useContext(AuthContext);

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
      <NavigationChevron route="/#dreams" />
      <h2 id="dreams">Share your dreams with others</h2>
      <NavigationChevron isUp />
    </main>
  );
}

export default HomePage;
