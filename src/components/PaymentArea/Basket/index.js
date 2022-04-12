import { Typography } from "antd";
import { Button } from "antd";
import { useAppSelector } from "../../../store";

import { useNavigate } from "react-router";
const Basket = () => {
  let navigate = useNavigate();
  const { Text } = Typography;
  const packagesInBasket = useAppSelector((state) => state.basket.data);

  const totalAmount = () => {
    let count = 0;
    packagesInBasket.forEach((item) => {
      count += item.amount;
    });
    return count;
  };

  const addPayment = () => {
    navigate("/result");
  };
  const packageIds = packagesInBasket.map((item)=> String(item.id))
  console.log(packageIds)

  return (
    <div className="basket">
      {packagesInBasket &&
        packagesInBasket.map((packages,index) => (
          <div className="packageInTheBasket" key={index} >
            <Text>{packages.name}</Text>
            <Text strong>{packages.amount} ₺</Text>
          </div>
        ))}

      <Button type="primary" shape="round" block onClick={() => addPayment()}>
        Ödeme Yap ( {totalAmount()} ₺ )
      </Button>
    </div>
  );
};

export default Basket;
