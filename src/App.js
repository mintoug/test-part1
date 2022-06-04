import './App.css';
import {useState} from 'react'
function App() {
  const [buttonColor, setButtonColor]= useState('red')
 const [disabled, setDisabled]= useState(false)
  const newButtonColor = buttonColor ==='red'? 'blue':'red'
  return (
   <div>
     <button style={{backgroundColor:disabled ? 'gray':buttonColor}}
     onClick={()=>setButtonColor(newButtonColor)}
     disabled={disabled}>change to {newButtonColor}</button>
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
