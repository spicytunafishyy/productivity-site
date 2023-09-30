import React from 'react';
import './Everything.css';
import homeIMG from '../icons/fab/navbar/home.png'; 
import toDoIMG from '../icons/fab/navbar/to-do-list.png';
import profileIMG from '../icons/fab/navbar/check-mark.png';

function NavBar(){
    return (
        <div class="navBar">
            <div id="navItemsContainer">
                {/* <!--container holding options to fix float issues with login link--> */}

                <span class="navOption" id="navOption1">
                    <img width="50px" src={homeIMG}></img>
                    <h1 class="navOption" id="o1text">Home</h1>
                </span>

                <span class="navOption" id="navOption3" title="To-Do List">
                    <img width="50px" src={toDoIMG}></img>
                    <h1 class="navOption" id="o3text">My To-Do List</h1>
                </span>

                <span class="navOption" id="navOption2">
                    <img width="50px"
                        src={profileIMG}></img>
                    <h1 class="navOption" id="o2text">My Profile</h1>
                </span>
            </div>
        </div>
)
};

export default NavBar;