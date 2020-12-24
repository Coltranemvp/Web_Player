import { radioPInit } from './radioP.js';
import { videoPInit } from './videoP.js';
import { musicPInit } from './musicP.js';
const playerbtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');


const deactivationPlayer = () => {
    temp.style.display = 'none';
    playerBlock.forEach(item=> item.classList.remove("active"));
    playerbtn.forEach(item=> item.classList.remove("active"));

    videoPInit.stop();
    radioPInit.stop();
    musicPInit.stop();
};

playerbtn.forEach((btn, i) =>  btn.addEventListener('click', ()=>{
        deactivationPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
}));

radioPInit();
musicPInit();
videoPInit();
