import {Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  @Output() onKeypress = new EventEmitter <string> ()

  getValue(item: any) {
    this.onKeypress.emit(item)
    item.target.value = ''
  }
}

