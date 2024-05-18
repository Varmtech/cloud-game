/**
 * App UI message module.
 *
 * @version 1
 */
import {gui} from "./gui";
import {utils} from "../utils";

export const message = (() => {
    const popupBox = document.getElementById('noti-box');

    // fifo queue
    let queue = [];
    const queueMaxSize = 5;



    const _storeMessage = (text) => {
        if (queue.length <= queueMaxSize) {
            queue.push(text);
        }
    }

    const _proceed = (text) => {
        _storeMessage(text);
    }

    const show = (text) => {
        _proceed(text)
    }

    return Object.freeze({
        show: show
    })
})(document, gui, utils);
