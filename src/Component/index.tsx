import React, { useState, ChangeEvent } from 'react';
import "./style.css";

export const LandConverter: React.FC = () => {
  const [result, setResult] = useState({ num1: 0, num2: 0 });

  const calculateResult = (event: ChangeEvent<HTMLInputElement>) => {
    let inputValue = parseFloat(event.target.value);
    let acres = 0;
    let Guntas = 0;

    if (!isNaN(inputValue) && inputValue >= 0) {
      let acreResult = inputValue * 2.47105;
      if (acreResult > 1) {
        acres = parseInt(acreResult.toString());
        const dec = acreResult - acres;
        Guntas = dec * 40;
        
      }
    }

    setResult({
      num1: acres !== undefined && !isNaN(acres) ? acres : 0,
      num2: Guntas !== undefined && !isNaN(Guntas) ? Guntas : 0,
    });
  };

  return (
    <div className='calculator-dashboard'>
      <h1 className='heading'>Land Converter Hectare to Acre-Guntas</h1>
      <div className='inputField'>
        <input type="number" placeholder='enter land in Hectare' onChange={calculateResult} />
        <div className='results'>
          <p>Acre: {result.num1}</p>
          <p>Guntas: {result.num2}</p>
        </div>
      </div>
    </div>
  );
};
