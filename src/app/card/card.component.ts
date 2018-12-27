import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss']
})

export class CardComponent {

  @Input() comic: Object
  @Output() handleParent = new EventEmitter<object>()
  
  _sendToParent (payload) {
    this.handleParent.emit(payload)
  }
}