import './App.css';
import {useState} from 'react'

export function replaceCamelWithSpacex(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
   const [buttonColor, setButtonColor]= useState('red')
 const [disabled, setDisabled]= useState(false)
   const newButtonColor = buttonColor ==='MediumVioletRed'? 'MidnightBlue':'MediumVioletRed'
  return (
   <div>
      <button
    style={{backgroundColor:disabled?'gray':buttonColor}}
    onClick={()=>setButtonColor(newButtonColor)}
    disabled={disabled}
    >Change to {replaceCamelWithSpacex(newButtonColor)}

    </button>
     <input type='checkbox' 
     id="diable-button-checkbox"
     default={disabled}
     aria-checked={disabled}
     onChange={(e)=>setDisabled(e.target.checked)}/>
     <label htlmlFor="disable-button-checkbox">Disable button</label>
   </div>
  
  );
}

export default App;
