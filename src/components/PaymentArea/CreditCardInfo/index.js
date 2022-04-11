import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space } from "antd";
import { addFormInformation } from "../../../features/FormSlice";
import { useAppDispatch } from "../../../store";
import Cleave from "cleave.js/react";

const CreditCardInfo = () => {
  const dispatch = useAppDispatch();
  const initialValues = {
    cardHolderName: "",
    cardNumber: "",
    expireDate: "",
    cvv: "",
  };
  const [cardForm, setCardForm] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardForm({ ...cardForm, [name]: value });
    dispatch(addFormInformation(cardForm));
  };

  const onCreditCardChange = (event) => {
    // formatted pretty value
    console.log(event.target.value);

    // raw value
    console.log(event.target.rawValue);
  };

  return (
    <>
      <div className="creditCardInfo">
        <div className="creditCardInfoTop">
          <Space direction="vertical" style={{ width: 320 }}>
            Kartın Üzerindeki İsim Soyisim
            <Input
              placeholder="Kartın Üzerindeki İsim Soyisim"
              onChange={handleChange}
              name="cardHolderName"
            />
          </Space>
        </div>
        <div className="creditCardInfoBottom">
          <Space direction="vertical" style={{ width: 320 }}>
            Kart Numarası
            <Cleave
              placeholder="Kart Numarası"
              name="cardNumber"
              className="ant-input"
              options={{ creditCard: true }}
              onChange={onCreditCardChange}
            />
          </Space>
          <Space direction="vertical">
            Son Kullanma Tarihi
            <Cleave
              placeholder="Son Kullanma Tarihi"
              name="expireDate"
              className="ant-input"
              options={{ date: true, datePattern: ["m", "y"] }}
              onChange={onCreditCardChange}
            />
          </Space>

          <Space direction="vertical" style={{ width: 90 }}>
            CVV/CVC
            <Input.Password
              name="cvv"
              maxLength={3}
              onChange={handleChange}
              placeholder="CVV/CVC"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Space>
        </div>
      </div>
    </>
  );
};

export default CreditCardInfo;
