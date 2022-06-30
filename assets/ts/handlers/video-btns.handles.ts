const playBtn: Element | null = document.querySelector("#play-btn");
const muteBtn: Element | null = document.querySelector("#mute-btn");


const reproductionActions = (action: string) => {
  if (action === 'play') {
    playBtn?.firstElementChild?.classList.remove('fa-play');
    playBtn?.firstElementChild?.classList.add('fa-pause');
  }
  if (action === 'pause') {
    playBtn?.firstElementChild?.classList.remove('fa-pause');
    playBtn?.firstElementChild?.classList.add('fa-play');
  }
}


const muteActions = (action) => {
  if (action === 'unmute') {
    muteBtn?.firstElementChild?.classList.remove('fa-volume-up');
    muteBtn?.firstElementChild?.classList.add('fa-volume-mute');
  }

  if (action === 'mute') {
    muteBtn?.firstElementChild?.classList.remove('fa-volume-mute');
    muteBtn?.firstElementChild?.classList.add('fa-volume-up');
  }
}

export { reproductionActions, muteActions };