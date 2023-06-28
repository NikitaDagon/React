import React , {Component} from 'react'
import { useState } from 'react';
import pic1 from './assets/1.jpg';
import pic2 from './assets/2.jpg';
import pic3 from './assets/3.jpg';
import pic4 from './assets/4.jpg';
import pic5 from './assets/5.jpg';
import './App.css';

function MinApp() {
  
  const [buttons, setButtons] = useState([
    {
        id: 1,
        clicked: true
    },
    {
        id: 2,
        clicked: false
    },
    {
        id: 3,
        clicked: false
    },
    {
        id: 4,
        clicked: false
    },
    {
        id: 5,
        clicked: false
    },
    
])

const handleClick = (id) => {
  const newButtons = buttons.map( buttonpic => {
      if (id === buttonpic.id) {
          return {
              id: buttonpic.id,
              clicked: true
          }
      }
      return {...buttonpic, clicked:false}
  })
  setButtons(newButtons)

}

  const buttonItems = buttons.map( buttonpic => (
    <div 
        key={buttonpic.id} 
        class={`buttonpic ${buttonpic.clicked ? '_active' : console.log("clicked")}`}
        onClick={() => handleClick(buttonpic.id)}
    >
    </div>
  ))

  return (
    <div className="MinApp">
      <div className = "pictures_container">
        <div className = "Buttons">
            <button className = "BR" data-filter = ".bedroom">Bedroom furniture</button>
            <button className = "LRF" data-filter = ".living">Living room furniture</button>
            <button className = "OF" data-filter = ".office">Office furniture</button>
            <button className = "DRF" data-filter = ".dining">Dining room furniture</button>
            <button className = "Chair_upperword" data-filter = ".category-chair">Chair</button>
            </div>
        </div>
        <div className = "in_gallery">
            <div className ="gallery_items">
            <a className = "gallery_item" href ="#">
                <img src = {pic1} alt ="images"></img>
            </a>
            <a className = "gallery_item" href ="#">
                <img src = {pic2} alt ="images"></img>
            </a>
            <a className = "gallery_item" href ="#">
                <img src = {pic3} alt ="images"></img>
            </a>
            <a className = "gallery_item" href ="#">
                <img src = {pic4} alt ="images"></img>
            </a>
            <a className = "gallery_item" href ="#">
                <img src = {pic5} alt ="images"></img>
            </a>
        </div>
        <div className='color-buttons'>
          {buttonItems}
        </div>
        </div>
        </div>
  );
}

export default MinApp;
