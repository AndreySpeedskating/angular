import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {ToDo} from "../app.component";

@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss']
})


export class CardComponent implements OnInit {
   @Input() todo!: ToDo
   @Output() onChange = new EventEmitter <any>()
   @Output() onClick = new EventEmitter <any>()

   change () {
     this.onChange.emit()
   }

   delete () {
     this.onClick.emit()
   }
   ngOnInit(){
   }
}
