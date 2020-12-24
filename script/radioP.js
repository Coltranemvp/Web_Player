export const radioPInit = () => {
 const radio = document.querySelector('.radio');
 const radioNavigation = document.querySelector('.radio-navigation');
 const radioCover__img = document.querySelector('.radio-cover__img');
 const radioItem = document.querySelectorAll('.radio-item');
 const radioHeaderBig = document.querySelector('.radio-header__big');
 const radioStop = document.querySelector('.radio-stop');
 const radioVolume = document.querySelector('.radio-volume');
 const radioMute = document.querySelector('.radio-mute');
 

  const audio = new Audio();
  audio.type = 'audio/aac';
  const prevVolume = audio.volume;
  radioStop.disable = true;

const changeIconPlay = () => {
    if (audio.paused){
        radio.classList.remove('play');
        radioStop.classList.add('fa-play');
        radioStop.classList.remove('fa-stop');
    } else {
        radio.classList.add('play')
        radioStop.classList.add('fa-stop');
        radioStop.classList.remove('fa-play');
    }
}

  const selectItem = elem => {
    radioItem.forEach(item => item.classList.remove('select'));
    elem.classList.add('select');
  }
  radioNavigation.addEventListener('change', event  => {
    const target = event.target; 
    const parrent =target.closest('.radio-item');
    selectItem(parrent);

    const title = parrent.querySelector('.radio-name').textContent;
    radioHeaderBig.textContent = title;

    const img = parrent.querySelector('.radio-img').src;
    radioCover__img.src = img;


    radioStop.disable = false;
    audio.src = target.dataset.radioStantion;

    audio.play();
    changeIconPlay();
  });
  radioStop.addEventListener('click', () => {
      if (audio.paused){
          audio.play();
      } else {
          audio.pause();
      }
      changeIconPlay();
    });

radioVolume.addEventListener('input', ()=> {
    audio.volume = radioVolume.value / 100;
    audio.volume = false;
});
radioVolume.value =audio.volume * 50;

radioMute.addEventListener('click', () =>{
    
       audio.muted  = !audio.muted;
    
});
  radioPInit.stop = () => {
      audio.pause();
      changeIconPlay;
  };
};