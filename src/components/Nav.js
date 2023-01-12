import React from "react";
import "../App.css"

function Nav() {
    const menu = () => {
        document.getElementById("menu").classList.toggle("menu-close");
        document.getElementById("menu").classList.toggle("menu-open");
    }

    return (
        <div className="nav" id="nav">
            <div className="name">
                <h1>WebDevRay</h1>
            </div>
            
                <label for="burger" class="burger">
                    <input id="burger" type="checkbox" onClick={menu}/>
                    <span id="span1" className="dark-theme"></span>
                    <span id="span2" className="dark-theme"></span>
                    <span id="span3" className="dark-theme"></span>
                </label>
           
        </div>
    );
}

export default Nav