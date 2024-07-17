import Button from "../Button/Button";
import "./CardDream.scss";

export default function CardDream() {
  return (
    <article className="card-dream">
      <p>John Uno posted 3 days ago</p>
      <h3>The Starlit Voyage 🌟</h3>
      <p>
        I found myself aboard a wooden ship, sailing through the night sky. The
        stars were my compass, and each constellation whispered secrets about
        distant lands. As we glided past Orion, I felt a sense of wonder and
        adventure...
      </p>
      <Button text="See more" />
    </article>
  );
}
