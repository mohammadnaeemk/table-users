import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { person } from '../adduser/person.interface';


@Component({
  selector: 'app-tablebox',
  imports: [CommonModule],
  templateUrl: './tablebox.component.html',
  styleUrl: './tablebox.component.css'
})
export class TableBox {
@Input() tablePersons : person[] =[]

}
