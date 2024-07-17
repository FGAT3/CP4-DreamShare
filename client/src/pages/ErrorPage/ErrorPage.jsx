import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <main>
      <h1>Error 404</h1>
      <Link to="/">Go back home</Link>
    </main>
  );
}

export default ErrorPage;
