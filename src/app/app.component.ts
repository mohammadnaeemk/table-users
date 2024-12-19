import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Adduser } from './adduser/adduser.component';
import { TableBox } from './tablaebox/tablebox.component';
import { person } from './adduser/person.interface';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Adduser,TableBox],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example-project';
  persons :person[] =[]
  public showUsers(updatedPersons:person[]){
    this.persons = updatedPersons;
  }
}
