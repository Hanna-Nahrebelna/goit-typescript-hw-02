import css from "./ImageCard.module.css";
import { LinksPhoto } from "../App/App.types";

interface PhotoCardProps {
  link: LinksPhoto;
  title: string;
  onClick: (photoUrl: string) => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ link: { small }, title, onClick }) => {
  const click = () => {onClick(small)};

  return (
    <div>
      <img
        className={css.card}
        src={small}
        alt={title}
        onClick={click}
      />
    </div>
  );
};

export default PhotoCard;
