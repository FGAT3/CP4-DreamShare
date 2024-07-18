import PropTypes from 'prop-types';
import Button from "../Button/Button";
import "./CardDream.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function CardDream({dream}) {
  return (
    <article className="card-dream">
      <img src={`${BASE_URL}/avatar/${dream.avatar_image}`} alt="" />
      <p>{dream.firstname} {dream.lastname} posted {dream.formatted_date}</p>
      <h3>{dream.title}</h3>
      <p>
        {dream.content}
      </p>
      <Button text="See more" />
    </article>
  );
}

CardDream.propTypes = {
  dream: PropTypes.shape({
    id: PropTypes.number.isRequired,
    formatted_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    avatar_image: PropTypes.string.isRequired,
  }).isRequired,
};