import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  comics = []
  isLoading = false
  offset = 0
  likesDislikesPerComic = []

  constructor(private homeService: HomeService, private alrt: AlertService) {}

  ngOnInit () {
    this.retrieveComics()
  }

  retrieveComics () {
    this.alrt.presentAlert('Error', undefined, 'Error trying to load comics', undefined)
    this.isLoading = true
    this.homeService.getCommics()
      .subscribe((data) => {
        this.isLoading = false
        if (data['data'].results.length > 0) {
          data['data'].results.forEach(element => {
            this.comics.push(Object.assign({}, element, { likes: 0, dislikes: 0, likeActive: false, dislikeActive: false }))
          })
        } else {
          this.alrt.presentAlert('Error', undefined, 'Comics not found', undefined)
        }
      }, err => {
        this.alrt.presentAlert('Error', undefined, 'Error trying load comics', undefined)
        this.isLoading = false
        console.log('err', err)
      })
  }

  doInfinite (event) {
    this.offset += 50
    this.homeService.getCommics(this.offset)
      .subscribe((data) => {
        if (data['data'].results.length > 0) {
          let newData = []
          data['data'].results.forEach(element => {
            newData.push(Object.assign({}, element, { likes: 0, dislikes: 0, likeActive: false, dislikeActive: false }))
          })
          newData.map(data => this.comics.push(data))
          event.target.complete()
        } else {
          this.alrt.presentAlert('Error', undefined, 'Comics not found', undefined)
        }
      }, err => {
        this.alrt.presentAlert('Error', undefined, 'Error trying load comics', undefined)
        console.log('err', err)
      })
  }

  likeDislike (data) {
    if (data.isLike) {
      let likesDislikesIndex = this.comics.findIndex(comic => comic.id === data.comicId)
      this.comics[likesDislikesIndex].likes++
      this.comics[likesDislikesIndex].likeActive = true
      this.comics[likesDislikesIndex].dislikeActive = false
      if (this.comics[likesDislikesIndex].dislikes > 0) this.comics[likesDislikesIndex].dislikes--
    } else {
      let likesDislikesIndex = this.comics.findIndex(comic => comic.id === data.comicId)
      this.comics[likesDislikesIndex].dislikes++
      this.comics[likesDislikesIndex].likeActive = false
      this.comics[likesDislikesIndex].dislikeActive = true
      if (this.comics[likesDislikesIndex].likes > 0) this.comics[likesDislikesIndex].likes--
    }
  }
}
