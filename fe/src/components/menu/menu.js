import axios from "axios";
import React, { useState, useEffect} from "react";
import "./menu.css";

function Menu() {

    const [activePopup, setActivePopup] = useState(null);
    const [username, setUsername] = useState("")

    const createGame = () => {
        const data = axios.post("http://localhost:8080/api/users/createGame", {
            name: username
        }).then( res => {
            console.log("user created", res.data);
        }).catch( err => {
            console.log("Fehler beim erstellen", err);
        });
    };

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
                        <input type="button" value="game 1 placeholder" onClick={() => [setActivePopup("creategame")]}/>
                        <input type="button" value="game 2 placeholder" onClick={() => [setActivePopup("creategame")]}/>
                        <input type="button" value="game 3 placeholder" onClick={() => [setActivePopup("creategame")]}/>
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

                { activePopup === "creategame" && (
                    <div className="menu-popup-create-game">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <h2>Erstelle dein Profil</h2>
                            <input type="text" value="SpielerName" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <input type="button" value="Erstellen" onClick={createGame}/>
                        </form>

                    </div>
                )}

            </div>

        </div>

);
}

export default Menu;