/**
 * Game list module.
 * @version 1
 */
import {MENU_PRESSED, MENU_RELEASED, PLAY_GAME} from "./event/event";
import {event} from "./event/event";
import {log} from "./log";
import store from "../store";
import {setGameIsReadyToPlayAC} from "../store/games/actions";

export const gameList = (() => {
    // state
    let games = [];
    // let gameIndex = 1;
    let selectedGame = null;
    let gamePickTimer = null;

    // UI
    const listBox = document.getElementById('menu-container');
    const menuItemChoice = document.getElementById('menu-item-choice');

    const MENU_TOP_POSITION = 102;
    let menuTop = MENU_TOP_POSITION;

    const setGames = (gameList) => {
        games = gameList;
    };

    const show = () => {
        pickGame();
    };

    const pickGame = (index) => {
        const { GameReducer: { activeGame } } = store.getState();
        selectedGame = activeGame || games[0];

        // check boundaries
        // cycle
        /*if (idx < 0) idx = games.length - 1;
        if (idx >= games.length) idx = 0;*/

        // transition menu box
        // listBox.style['transition'] = 'top 0.2s';

        // menuTop = MENU_TOP_POSITION - idx * 36;
        // listBox.style['top'] = `${menuTop}px`;

        // overflow marquee
       /* let pick = document.querySelectorAll('.menu-item .pick')[0];
        if (pick) {
            pick.classList.remove('pick');
        }*/
        // document.querySelectorAll(`.menu-item span`)[idx].classList.add('pick');

        event.pub(PLAY_GAME);
    };

  /*  const startGamePickerTimer = (upDirection) => {
        if (gamePickTimer !== null) return;
        const shift = upDirection ? -1 : 1;
        pickGame(gameIndex + shift);

        // velocity?
        // keep rolling the game list if the button is pressed
        gamePickTimer = setInterval(() => {
            pickGame(gameIndex + shift);
        }, 200);
    };*/

   /* const stopGamePickerTimer = () => {
        if (gamePickTimer === null) return;
        clearInterval(gamePickTimer);
        gamePickTimer = null;
    };*/

    const onMenuPressed = (newPosition) => {
        listBox.style['transition'] = '';
        listBox.style['top'] = `${menuTop - newPosition}px`;
    };

    const onMenuReleased = (position) => {
        menuTop -= position;
        const index = Math.round((menuTop - MENU_TOP_POSITION) / -36);
        pickGame(index);
    };

    event.sub(MENU_PRESSED, onMenuPressed);
    event.sub(MENU_RELEASED, onMenuReleased);

    return {
        // startGamePickerTimer: startGamePickerTimer,
        // stopGamePickerTimer: stopGamePickerTimer,
        pickGame: pickGame,
        show: show,
        set: setGames,
        getCurrentGame: () => selectedGame.name
    }
})(document, event, log);
