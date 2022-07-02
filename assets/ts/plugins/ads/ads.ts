import {ALL_ADS} from "./adsList";

export interface Ad {
  imageUrl: string;
  title: string;
  body: string;
  url: string;
}

class Ads {
  private static isntance: Ads;
  private _ads: Ad[];

  private constructor(){
    this._initAds();
  }

  static getInstance() {
    return Ads.isntance || new Ads();
  }

  private _initAds() {
    this._ads = [...ALL_ADS];
  }

  public getAd() {
    if (this._ads.length === 0) {
      this._initAds();
    }
    return this._ads.pop();
  }
}

export default Ads;