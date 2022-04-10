import { Divider, Space, Tag } from "antd";

const Tags = ({ card }) => {
  return (
    <div className="tags">
      {card && card.tags.map((tag) => <Tag color="blue" key={tag.id}>{tag}</Tag>)}
    </div>
  );
};

export default Tags;
