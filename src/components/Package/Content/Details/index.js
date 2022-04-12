import { Badge } from "antd";

const Details = ({ card }) => {
  return (
    
      <div className="details">
        {card &&
          card.details.map((detail,index) => <Badge color="blue" text={detail} key={index} />)}
      </div>
     
  );
};

export default Details;
