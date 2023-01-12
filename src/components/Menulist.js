import React from "react";
import "../App.css"

function Menulist() {
    const theme = () => {
        document.getElementById("span1").classList.toggle("light-theme");
        document.getElementById("span2").classList.toggle("light-theme");
        document.getElementById("span3").classList.toggle("light-theme");
        document.getElementById("insta").classList.toggle("light-theme");
        document.getElementById("dis").classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme");
    }

    const link = () => {
        document.getElementById("link1").classList.toggle("links");
        document.getElementById("link2").classList.toggle("links");
        
    }
    return (
        <div className="menulist" >
            <div className="menu-close menu-page" id="menu">
                <div className="menubtn">
                    <button >
                        <span onClick={link}>
                            Follow Me
                        </span>
                    </button>

                    <label class="switch">
                        <input type="checkbox" onClick={theme}/>
                        <span class="slider"></span>
                    </label>
                </div>
                <div className="menulinks">
                    <h1 id="link1" className="txt"><a href="https://www.instagram.com/ligma.ray/" className="dark-theme" id="insta">INSTAGRAM</a></h1>
                    <h1 id="link2" className="txt"><a href="https://discord.gg/TWsRN7CuN4" className="dark-theme" id="dis">DISCORD</a></h1>
                </div>
            </div>
        </div>
    );
}

export default Menulist