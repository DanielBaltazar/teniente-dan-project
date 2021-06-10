import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teniente-dan-project';

  list: Array<{ id: number; name: string; lastName: string; years: number; calification: number; }> = [
    { id: 1, name: 'Daniel', lastName: 'Baltazar aaaaaaaaaaaaaaaaaa', years: 26, calification: 8 },
    { id: 2, name: 'Brenda', lastName: 'García', years: 22, calification: 10 },
    { id: 3, name: 'Claudia', lastName: 'Becerril', years: 23, calification: 6 },
    { id: 4, name: 'Diana', lastName: 'Rodríguez', years: 25, calification: 9 }
  ];

  columns: Array<{ tittle: string; field: string; }> = [
    { tittle: 'Nombre', field: 'name' },
    { tittle: 'Apellidos', field: 'lastName' },
    { tittle: 'Años', field: 'years' },
    { tittle: 'Calificacion', field: 'calification' },
  ];

  deleteItem(): void {
    this.list = this.list.filter(item => item.id !== 2);
  }

}
