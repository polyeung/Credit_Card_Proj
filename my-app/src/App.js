import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import copy from "copy-to-clipboard"

const CARD_DETAILS = {
  name: "Leon Li",
  number: "4024007107304395",
  mask:"•••• •••• •••• 4395",
  non_mask:"4024 0071 0730 4395",
  exp: new Date("January 1, 2025"),
  cvv: "109",
  cvv_mask: "•••"
}
const MASKED_CHAR = "•"
const exp_mask = "••/••"
const mask_version = CARD_DETAILS.number
var mon = CARD_DETAILS.exp


const App = (props) => {
  const[Locked, setLocked] = useState(false);
  const [pass, setPass] = useState(CARD_DETAILS.non_mask)
  const [cvv, setCVV] = useState(CARD_DETAILS.cvv)
  //get the format version of date
  const format_ver = parse_date()
  const [exp, setEXP] = useState(format_ver)
  const [isHovered, setHover] = useState(false)
  const [isHovered_num, setHoverNum] = useState(false)
  const [isHovered_exp, setHoverExp] = useState(false)
  

  function copyToClipboard(){
    
   
      // copy pass
      //alert("card number copied!")
      copy(CARD_DETAILS.number);
      setPass("copied!")
      
      console.log("copy set")
      //sleep 2 seconds, and set back to original value
      setTimeout(() => {
        console.log("set back")
        setPass(CARD_DETAILS.non_mask)
      }, 1000);
      
      console.log("cp function over")
 }

 function parse_date(){
  console.log("in parse_date function");
  const options = { month: '2-digit', year: '2-digit' };
  var format_ver = new Intl.DateTimeFormat('en-US', options).format(CARD_DETAILS.exp)
  console.log(format_ver);
  return format_ver;
 }

 //copy function and effect for CVV
 function copyToClipboard2(){
  // copy pass
  //alert("card number copied!")
  copy(CARD_DETAILS.cvv);
  setCVV("copied!")
  
  console.log("copy set")
  //sleep 2 seconds, and set back to original value
  setTimeout(() => {
    console.log("set back")
    setCVV(CARD_DETAILS.cvv)
  }, 1000);
  
  console.log("cp function over")

}

//copy exp to clipboard and set it co copied
function copyToClipboard3(){
  //copy format exp
  copy(format_ver);
  setEXP("copied!")
  
  console.log("copy exp")
  //sleep 2 seconds, and set back to original value
  setTimeout(() => {
    console.log("set back")
    setEXP(format_ver)
  }, 1000);
  
  console.log("cp function over")

}


  const set_lock = () => {
    setLocked(Locked => !Locked)
  }



  
  
  
  return (
    
    <div className="container">
      <div className="card">
        <div className="details">
          <img
            className="hrt-logo" 
            src="http://bit.ly/3AbqruK"
          />
          <div className="name-number">
            <div className="title" >
            {CARD_DETAILS.name}
            </div>
            
            {Locked &&
            <div className="number" 
            //style={{ pointerEvents: isHovered ? 'none' : 'auto' }}
            onMouseEnter={() => setHoverNum(true)}
            onMouseLeave={() => setHoverNum(false)}
            onClick={copyToClipboard}
            
            >{isHovered_num? pass : CARD_DETAILS.mask}</div>
             
             }
          </div>
          <div className="expiration">
            <div className="title">
              Expires
            </div>
            {Locked && <div className="number"
            onClick={copyToClipboard3}
            onMouseEnter={() => setHoverExp(true)}
            onMouseLeave={() => setHoverExp(false)}
            >

            {isHovered_exp? exp : exp_mask}</div>}
          </div>
          <div className="cvv">
            <div className="title">
              CVV
            </div>
            {Locked && <div className="number"
            onClick={copyToClipboard2}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            >
            {isHovered? cvv : CARD_DETAILS.cvv_mask}</div>}
          </div>
          <img
            className="visa-logo" 
            src="http://bit.ly/3GcIqVf"
          />
        </div>
      </div>
      <button className="lock-button" onClick={() => set_lock()}>Lock</button>
    </div>
  )
}

export default App;
