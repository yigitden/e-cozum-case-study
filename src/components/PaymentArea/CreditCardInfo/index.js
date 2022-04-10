import React, { useState } from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';  
import { addFormInformation } from '../../../features/FormSlice';
import { useAppDispatch } from '../../../store'; 
 


const CreditCardInfo = () => {
  const dispatch = useAppDispatch();
  const initialValues = { cardHolderName:'', cardNumber:'', expireDate:'', cvv:''}
  const [cardForm,setCardForm] = useState(initialValues)

  const handleChange = (e) => {
    const {name,value} = e.target;
    setCardForm({...cardForm, [name]:value})
    dispatch(addFormInformation(cardForm))
  }


  return (
 
    <div className='creditCardInfo'>
      <div className='creditCardInfoTop'>
      <Space direction="vertical" style={{width:320}}>
    Kartın Üzerindeki İsim Soyisim
    <Input placeholder="Kartın Üzerindeki İsim Soyisim" onChange={handleChange} name="cardHolderName"/>
    </Space>


      </div>
      <div className='creditCardInfoBottom'>
      
      <Space direction="vertical" style={{width:320}}>
    Kart Numarası
    <Input placeholder="Kart Numarası" name="cardNumber" onChange={handleChange} />
    </Space>
      <Space direction="vertical">
    Son Kullanma Tarihi
    <Input placeholder="Son Kullanma Tarihi" style={{width:120}} name="expireDate" onChange={handleChange} />
    </Space>

      <Space direction="vertical" style={{width:90}}>
    CVV/CVC
      <Input.Password
      name="cvv"
      onChange={handleChange} 
      placeholder="CVV/CVC"
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
    </Space>
      </div>

    </div>
     
  )
}

export default CreditCardInfo