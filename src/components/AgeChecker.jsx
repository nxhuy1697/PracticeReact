import React, { useState } from "react";

export default function AgeChecker() {
    
    const [age, setAge] = useState('') ;
    const [message, setMessage] = useState ('');
    const handleInputChange = (event) => {
        const inputAge = parseInt(event.target.value);
        setAge(inputAge);
        if(inputAge >= 18){
            setMessage('Bạn đã đủ tuổi')
        }
        else{
            setMessage('Bạn chưa đủ tuổi')
        }
    }



  return (
    <div style={{padding: 30}}>
      <h1>Kiểm tra độ tuổi</h1>
      <input type="number" placeholder="Vui lòng điền tuổi" value={age} onChange={handleInputChange}/>
      <p>{message}</p>
    </div>
  );
}
