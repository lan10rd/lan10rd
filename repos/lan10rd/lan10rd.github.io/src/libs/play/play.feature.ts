import { Component } from '@angular/core';
import star from './amazon/star.json'

@Component
({
  selector: 'play-feature',
  templateUrl: './play.feature.html',
  styleUrls: ['./play.feature.scss']
})
export class PlayFeature
{
  star = star
  principle = ''
  keys(obj) { return Object.keys(obj) }

  ngOnInit(){
    document.body.style.backgroundImage = "url('assets/photos/1308204.jpg')" // "url('assets/photos/back.jpg')"
  }
}
