import React, { useEffect, useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space } from "antd";
import { addFormInformation } from "../../../features/FormSlice";
import { useAppDispatch, useAppSelector } from "../../../store";
import Cleave from "cleave.js/react"; 

const CreditCardInfo = () => {
  const dispatch = useAppDispatch();
  


    const [cardHolderName,setCardHolderName] = useState('')
    const [cardNumber,setCardNumber] = useState('')
    const [expireDate,setExpireDate] = useState('')
    const [cvv,setCvv] = useState('')
   
    const initialValues = {
      cardHolderName: cardHolderName,
      cardNumber: cardNumber,
      expireDate: expireDate,
      cvv: cvv,
    };
    
   
    useEffect(()=>{
      dispatch(addFormInformation(initialValues))
      
    },[initialValues]) 

  return (
    <>
      <div className="creditCardInfo">
        <div className="creditCardInfoTop">
          <Space direction="vertical" style={{ width: 320 }}>
            Kartın Üzerindeki İsim Soyisim
            <Input
              placeholder="Kartın Üzerindeki İsim Soyisim"
              onChange={(e) => setCardHolderName(e.target.value)}
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
              onChange={(e) => setCardNumber(e.target.rawValue)}
            />
          </Space>
          <Space direction="vertical">
            Son Kullanma Tarihi
            <Cleave
              placeholder="Son Kullanma Tarihi"
              name="expireDate"
              className="ant-input"
              options={{ date: true, datePattern: ["m", "y"] }}
              onChange={(e) => setExpireDate(e.target.value)}
            />
          </Space>

          <Space direction="vertical" style={{ width: 90 }}>
            CVV/CVC
            <Input.Password
              name="cvv"
              maxLength={4}
              onChange={(e) => setCvv(e.target.value)}
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
