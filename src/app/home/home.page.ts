import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  comics = []
  isLoading = false
  offset = 0
  constructor(private homeService: HomeService) {
  }

  ngOnInit () {
    this.retrieveComics()
  }

  retrieveComics () {
    this.isLoading = true
    this.homeService.getCommics()
      .subscribe((data) => {
        this.isLoading = false
        if (data['data'].results.length > 0) {
          this.comics = data['data'].results
        } else {
          console.log('Not comics found')
        }
      }, err => {
        this.isLoading = false
        console.log('err', err)
      })
  }

  doInfinite (event) {
    this.offset += 50
    this.homeService.getCommics(this.offset)
      .subscribe((data) => {
        if (data['data'].results.length > 0) {
          data['data'].results.map(c => this.comics.push(c))
          event.target.complete()
        } else {
          console.log('Not comics found')
        }
      }, err => {
        console.log('err', err)
      })
  }
}
