import robot from 'robotjs';
import {default as config} from './config.json';

console.log(`Starting in ${config.wait} ms...`)
setInterval(function () {
    const mouse = robot.getMousePos();
    console.log(`X : ${mouse.x} | Y : ${mouse.y}`);
    console.log(`Relogging in ${config.wait} ms`)
},config.wait)