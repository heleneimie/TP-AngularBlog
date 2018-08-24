import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Event, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  title = 'Angular Blog';
  //
  // public isHome: boolean = false;
  //
  // constructor(private _location: Location, private router: Router) {
  //   this.router.events.subscribe( (event: Event) => {
  //       if (event instanceof NavigationEnd) {
  //         console.log(event.url);
  //         if (event.url === '/') {
  //           this.isHome = true;
  //         }
  //       }
  //     }, (error) => {
  //       return error;
  //     }
  //   );
  // }
  //
  // // retour à la page précédente
  // backClicked() {
  //   this._location.back();
  // }

}
