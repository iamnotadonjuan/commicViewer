import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private homeService: HomeService) {
  }

  ngOnInit () {
    this.retrieveComics()
  }

  retrieveComics () {
    this.homeService.getCommics()
      .subscribe((data) => {
        console.log(data['data'].results)
      }, err => {
        console.log('err', err)
      })
  }

}
