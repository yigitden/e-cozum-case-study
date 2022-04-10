 import Details from "./Details";
import Tags from "./Tags";
import TitleCard from "./TitleCard";

const Content = ({ card }) => {
  return (
    <div className="content">
      <TitleCard card={card} />
      <Details card={card} />

      <Tags card={card} />
    </div>
  );
};

export default Content;
