import React, {useState} from "react";
import './index.scss';

const Popup = () => {
 
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const handleClick = () => {
      setIsPopupOpen(!isPopupOpen);
    };
  
  
  return (
    <div>
      <span onClick={handleClick}>Click me to open/close Popup</span>
      {isPopupOpen && (
        <div className='popup'>
          <p>This is popup content</p>
          <button onClick={handleClick}>Close</button>
        </div>
      )}
    </div>
  )}
  
  export default Popup;