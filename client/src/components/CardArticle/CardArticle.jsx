import PropTypes from 'prop-types';
import Button from "../Button/Button";
import "./CardArticle.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function CardArticle({ article }) {
  return (
    <article className="card-article">
      <p>{article.formatted_date}</p>
      <img src={`${BASE_URL}/dream/${article.image}`} alt="" />
      <h3>{article.title}</h3>
      <p>{article.content}</p>
      <Button text="See more" />
    </article>
  );
}

CardArticle.propTypes = {
  article: PropTypes.shape({
    formatted_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
  }).isRequired,
};
