import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-carousel';

  images = [
    {
      imageSrc:
        'https://media.discordapp.net/attachments/1042096488634917017/1172153728804073532/2.png?ex=655f483a&is=654cd33a&hm=a9fd2edb3b024cdc44f521d9809b92767b1fb6d312eb0675e7a812f006589080&',
      imageAlt: 'grupgokkusagi',
    },
    {
      imageSrc:
        'https://media.discordapp.net/attachments/1042096488634917017/1172153729600983160/4.png?ex=655f483a&is=654cd33a&hm=ce2d32018d97f76923f11bf1d07e242eabbf3548240aa80ee35ec4aff78f912e&',
      imageAlt: 'grupgokkusagi',
    },
    {
      imageSrc:
        'https://media.discordapp.net/attachments/1042096488634917017/1172153729273839636/3.png?ex=655f483a&is=654cd33a&hm=7625672ab314863461a0d49dad1285044d5e392a65baa87639e0bbbb1d9b2ddb&',
      imageAlt: 'grupgokkusagi',
    },
  ]
}
