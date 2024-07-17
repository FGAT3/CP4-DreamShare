import Button from "../Button/Button";
import "./CardArticle.scss";

export default function CardArticle() {
  return (
    <article className="card-article">
      <p>Jan 1, 2024</p>
      <img src="" alt="" />
      <h3>Lucid Dreaming: Unlocking the World of Conscious Dreams</h3>
      <p>
        What Are Lucid Dreams? Lucid dreams are a fascinating mental state where
        you become aware that you’re dreaming while fully asleep. Imagine
        stepping into a vivid...
      </p>
      <Button text="See more" />
    </article>
  );
}
