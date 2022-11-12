import axios from "axios";
import { JSDOM } from "jsdom";
import { getVideoId } from "./utils"

type NumeradeParams = {
  url?: string;
  cdnUrl?: string;
}

type NumeradeSearchParams = {
  problem: string;
  rate?: number;
}

export class Numerade {
  searchUrl: string;
  cdnUrl: string;

  constructor({
    url = 'https://numerade.com',
    cdnUrl = "https://cdn.numerade.com"
  }: NumeradeParams) {
    this.searchUrl = `${url}/questions/search`;
    this.cdnUrl = cdnUrl;
  }

  async search({
    problem,
    rate = 5
  }: NumeradeSearchParams) {
    const html = await axios.get(`${this.searchUrl}?q=${problem}`);
 
    const dom = new JSDOM(html.data);
    const doc = dom.window.document;
    let s = doc.getElementsByClassName('search-results-solutions')
    console.log(s);
    // console.log(`url: ${this.searchUrl}?q=${problem} rate:${rate}`)

  }

  async getVideo(url: string) {
    console.log(url);
    const html = await axios.get<string>(url);
    const data = html.data;

    const re = new RegExp('videoUrl = ("[^"]*")');
    let videoId = getVideoId(re, data);
    return `${this.cdnUrl}/ask_video/${videoId}.mp4`;
  
  }
}
