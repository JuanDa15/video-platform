import MediaPlayer from '../../MediaPlayer';
import Ads, { Ad } from './ads';

class AdsPlugin {

  private _player: MediaPlayer;
  private _media: HTMLMediaElement;
  private _ads: Ads;
  private _currentAd: Ad | null;
  private _adsContainer: HTMLDivElement;

  constructor() {
    this._ads = Ads.getInstance();
    this._adsContainer = document.createElement('div');
    this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
  }

  run(player: MediaPlayer){
    this._player = player;
    this._player.container.appendChild(this._adsContainer);
    this._media = this._player.media;
    this._media.addEventListener('timeupdate', this._handleTimeUpdate);
  }

  private _handleTimeUpdate() {
    const currentTime = Math.floor(this._media.currentTime);

    if (currentTime % 30 === 0) {
      this._renderAd();
    }
  }

  private _renderAd() {
    if (this._currentAd) {
      return;
    }
    const ad: Ad = this._ads.getAd()!;
    this._currentAd = ad;
    this._adsContainer.innerHTML = `
    <div class="ads">
      <a  class="ads__link" href="${this._currentAd.url}" target="_blank">
        <img class="ads__img" src="${this._currentAd.imageUrl}" />
        <div class="ads__info">
          <h5 class="ads__title">${this._currentAd.title}</h5>
          <p class="ads__body">${this._currentAd.body}</p>
        </div>
      </a>
    </div>
    `;
    setTimeout(()=> {
      this._currentAd = null;
      this._adsContainer.innerHTML = '';
    }, 10000)
  }
}

export default AdsPlugin;