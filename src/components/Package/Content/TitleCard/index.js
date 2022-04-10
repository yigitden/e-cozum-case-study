import {   Typography } from "antd";

const TitleCard = ({ card }) => {
  const { Text } = Typography;
  return (
    <div className="titleCard">
      <Text strong>{card.name}</Text>
      <Text strong>
        {card.amount} {card.currency}
      </Text>
    </div>
  );
};

export default TitleCard;
