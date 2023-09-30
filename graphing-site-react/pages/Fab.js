import React, { useEffect } from "react";
import './Everything.css';
import Edit from '../icons/fab/fab/edit-icon.png';
import Minus from '../icons/fab/fab/minus-icon.png';
import Plus from '../icons/fab/fab/plus-icon.png';
import {Helmet} from "react-helmet";

export default function Fab(){
    useEffect(()=> {
        document.querySelector('.fab').addEventListener('click',
        function (e) {
        document.querySelector('.box').classList.toggle('box-active');
        }
        );
    });

    return (
        <div className="F">
            <div class="fab">
                <img class="options" title="Edit Events" src={Edit}></img>
            </div>
            <div class="box">
                <a class="item item1" title="Add Event" id="obj1">
                    <img class="options" src={Plus}></img>
                </a>
                <a href="" class="item item2" title="Remove Event" id="obj2">
                    <img class="options" src={Minus}></img>
                </a>
            </div>
        </div>
    );
}