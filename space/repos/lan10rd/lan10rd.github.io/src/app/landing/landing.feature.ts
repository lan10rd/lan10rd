import { Component, OnInit } from '@angular/core'

@Component
({
  selector: 'app-landing-feature',
  templateUrl: './landing.feature.html',
  styleUrls: ['./landing.feature.scss']
})
export class AppLandingFeature
{
  ngOnInit(){
    document.body.style.backgroundImage = "url('assets/photos/lion-black.jpg')"
  }
}
