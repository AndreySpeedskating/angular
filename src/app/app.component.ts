import {Component} from '@angular/core';


export interface ToDo {
  text: string,
  complete: boolean,
  id: number
}

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


   todo: ToDo[] = (localStorage.getItem('ToDo') === null)? []
     : JSON.parse(<string>localStorage.getItem('ToDo'))


  getValue(item: any): string {
     return item.target.value
   }

   addToDo(item: string) {
     this.todo.push({
       text: item,
       id: Date.now(),
       complete: false
     })
     localStorage.setItem('ToDo', JSON.stringify(this.todo))
   }

  completeStatus(id: number): void {
     this.todo = (localStorage.getItem('ToDo') === null)? []
       : JSON.parse(<string>localStorage.getItem('ToDo'))
     let arr = this.todo.map((i) => {
       if (i.id === id) {
         i.complete = !i.complete
       }
       return i
     })
    localStorage.setItem('ToDo', JSON.stringify(arr))
  }

  deleteToDo(id: number): void {
    this.todo = (localStorage.getItem('ToDo') === null)? []
      : JSON.parse(<string>localStorage.getItem('ToDo'))
    let arr = this.todo.filter(i => i.id !==  id)
    this.todo = arr
    localStorage.setItem('ToDo', JSON.stringify(arr))
  }

  showActive() {
    let arr = (localStorage.getItem('ToDo') === null)? []
      : JSON.parse(<string>localStorage.getItem('ToDo'))
    let active = arr.filter((i: any) => i.complete === false)
    this.todo = [...active]
  }

  showComplete() {
    let arr = (localStorage.getItem('ToDo') === null)? []
      : JSON.parse(<string>localStorage.getItem('ToDo'))
    let complete = arr.filter((i: any) => i.complete === true)
    this.todo = [...complete]
  }

  showAll() {
    let arr = (localStorage.getItem('ToDo') === null)? []
      : JSON.parse(<string>localStorage.getItem('ToDo'))
    this.todo = [...arr]
  }
}
