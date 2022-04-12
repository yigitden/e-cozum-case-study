import { Typography } from "antd";
import { Button } from "antd";
import { useAppSelector } from "../../../store";
import { useNavigate } from "react-router";
import Api from "../../../service/Api";

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

  const packageIds = packagesInBasket.map((item) => String(item.id))
  const paymentForm = useAppSelector((state) => state.form)
  
  const addPayment = () => {
    const allInformationsToPayment = {
      ...paymentForm.data[paymentForm.data.length - 1],
      totalAmount: totalAmount(),
      packageIds,
    }
    console.log(allInformationsToPayment)
    Api().post('payment', allInformationsToPayment)
      .then(() => navigate('/result'))
      .catch((err) => alert(err))

  };



  return (
    <div className="basket">
      {packagesInBasket &&
        packagesInBasket.map((packages, index) => (
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
