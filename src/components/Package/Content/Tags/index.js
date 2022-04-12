import { Tag } from "antd";

const Tags = ({ card }) => {
  return (
    <div className="tags">
      {card && card.tags.map((tag,index) => <Tag color="blue" key={index}>{tag}</Tag>)}
    </div>
  );
};

export default Tags;
