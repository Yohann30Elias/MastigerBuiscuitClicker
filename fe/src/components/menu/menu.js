import {BrowserRouter} from "react-router-dom";
import React, { useState, useEffect} from "react";
import "./menu.css";

function Menu() {

    const [activePopup, setActivePopup] = useState(null);

    const createGame = () => {

    }

    const continueGame = () => {

    }

    const checkGame = () => {

    }


    return(
        <div className="menu-container">

            <div className="menu-welcome">
                <h1>BiscuitClicker</h1>
                <p>Willkommen zum einzig wahren Masstigen BiscuitClicker Spiel</p>
            </div>

            <div className="menu-buttons">

                <div className="menu-button-newgame">
                    <input type="button" value="New Game" onClick={() => {setActivePopup("newgame")}}/>
                </div>

                <div className="menu-button-continue">
                    <input type="button" value="Continue" onClick={() => {setActivePopup("continue")}}/>
                </div>

                <div className="menu-button-settings">
                    <input type="button" value="Settings" onClick={() => {setActivePopup("settings")}}/>
                </div>

                <div className="menu-button-leaderboard">
                    <input type="button" value="Leaderboard" onClick={() => {setActivePopup("leaderboard")}}/>
                </div>

            </div>

            <div className="menu-popups">

                { activePopup === "newgame" && (
                    <div className="menu-popup-newgame">
                        <h2>Wähle ein ein Freien Spielstand um ein Siel zu erstellen oder Klicke auf einen Bisherigen um das SPiel Fortzusetzen</h2>
                        <input type="button" value="game 1 placeholder"/>
                        <input type="button" value="game 2 placeholder"/>
                        <input type="button" value="game 3 placeholder"/>
                        <input type="button" value="zurück" onClick={() => {setActivePopup(null)}}/>
                    </div>
                )}

                { activePopup === "settings" && (
                    <div className="menu-popup-settings">
                        <h2>Settings</h2>
                        <p>test</p>
                        <input type="button" value="zurück" onClick={() => {setActivePopup(null)}}/>
                    </div>
                )}

                { activePopup === "leaderboard" && (
                    <div className="menu-popup-leaderboard">
                        <h2>Leaderboard</h2>
                        <p>du halt ned</p>
                        <input type="button" value="zurück" onClick={() => {setActivePopup(null)}}/>
                    </div>
                )}

            </div>

        </div>

);
}

export default Menu;