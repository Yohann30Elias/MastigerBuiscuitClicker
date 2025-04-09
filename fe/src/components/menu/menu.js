import {BrowserRouter} from "react-router-dom";
import "./menu.css";

function Menu() {


    return(
        <div className="menu-container">

            <div className="menu-welcome">
                <h1>BiscuitClicker</h1>
                <p>Willkommen zum einzig wahren Masstigen BiscuitClicker Spiel</p>
            </div>

            <div className="menu-buttons">

                <div className="menu-button-newgame">
                    <input type="button" value="New Game"/>
                </div>

                <div className="menu-button-continue">
                    <input type="button" value="Continue"/>
                </div>

                <div className="menu-button-settings">
                    <input type="button" value="Settings"/>
                </div>

                <div className="menu-button-quit">
                    <input type="button" value="Quit"/>
                </div>

            </div>

        </div>

);
}

export default Menu;