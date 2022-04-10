import { Button } from "antd";
import { Typography } from "antd";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../../store";

const PackageFooter = () => {
  const { Title } = Typography;
  let navigate = useNavigate();
  const packagesInBasket = useAppSelector((state) => state.basket.data);

  const totalAmount = () => {
    let count = 0;
    packagesInBasket.forEach((item) => {
      count += item.amount;
    });
    return count;
  };

  const clickToPayment = () => {
    {
      totalAmount() == 0
        ? alert("Lütfen bir paket seçiniz")
        : navigate("/payment");
    }
  };

  return (
    <div className="footer">
      <Title level={5}> Seçilen Paket Tutarı: {totalAmount()} ₺</Title>

      <Button type="primary" onClick={() => clickToPayment()}>
        Devam Et
      </Button>
    </div>
  );
};

export default PackageFooter;
