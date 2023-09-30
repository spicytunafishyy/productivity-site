import React from "react";
import './pages/Everything.css';

export default function Popup(){
    return(
        <div class="popup" id="addPop">
        <h1>Add An Event</h1>
        <div class="wrapper">
        <h2 class="popupTxt">Sunday</h2>
        <div class="quantity-counter">
        <button id="counter-decrement" class="decrement">-</button>
        <input id="counter-value" class="value" type="number" value="0"></input>
        <button id="counter-increment" class="increment">+</button>
        </div>
       
        <h2 class="popupTxt">Monday</h2>
        <div class="quantity-counter">
        <button id="counter-decrement" class="decrement">-</button>
        <input id="counter-value" class="value" type="number" value="0"></input>
        <button id="counter-increment" class="increment">+</button>
        </div>
       
        <h2 class="popupTxt">Tuesday</h2>
        <div class="quantity-counter">
        <button id="counter-decrement" class="decrement">-</button>
        <input id="counter-value" class="value" type="number" value="0"></input>
        <button id="counter-increment" class="increment">+</button>
        </div>
        
        <h2 class="popupTxt">Wednesday</h2>
        <div class="quantity-counter">
        <button id="counter-decrement" class="decrement">-</button>
        <input id="counter-value" class="value" type="number" value="0"></input>
        <button id="counter-increment" class="increment">+</button>
        </div>
       
        <h2 class="popupTxt">Thursday</h2>
        <div class="quantity-counter">
        <button id="counter-decrement" class="decrement">-</button>
        <input id="counter-value" class="value" type="number" value="0"></input>
        <button id="counter-increment" class="increment">+</button>
        </div>
       
        <h2 class="popupTxt">Friday</h2>
        <div class="quantity-counter">
        <button id="counter-decrement" class="decrement">-</button>
        <input id="counter-value" class="value" type="number" value="0"></input>
        <button id="counter-increment" class="increment">+</button>
        </div>
       
        <h2 class="popupTxt">Saturday</h2>
        <div class="quantity-counter">
        <button id="counter-decrement" class="decrement">-</button>
        <input id="counter-value" class="value" type="number" value="0"></input>
        <button id="counter-increment" class="increment">+</button>
        </div>
        </div>
        </div>  
    );
}