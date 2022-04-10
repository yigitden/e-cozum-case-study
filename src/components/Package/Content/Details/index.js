import { Badge } from "antd";

const Details = ({ card }) => {
  return (
    
      <div className="details">
        {card &&
          card.details.map((detail) => <Badge color="blue" text={detail} />)}
      </div>
     
  );
};

export default Details;
