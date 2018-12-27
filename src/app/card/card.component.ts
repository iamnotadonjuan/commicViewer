import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss']
})

export class CardComponent {

  @Input() comic: Object
  @Output() handleParent = new EventEmitter<object>()
  
  /**
   * 
   * @param payload - Object { isLike: Boolean, comicId: Number }
   * Emit the event from the child (cardComponent) to the parent (homePage)
   */
  _sendToParent (payload) {
    this.handleParent.emit(payload)
  }
}