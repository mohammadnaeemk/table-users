import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { person } from "./person.interface";

@Component({
  selector: "app-adduser",
  imports: [],
  templateUrl: "./adduser.component.html",
  styleUrl: "./adduser.component.css",
})
export class Adduser implements OnInit {
  @Output() addUser = new EventEmitter<person[]>();
  persons: person[] = [];

  ngOnInit(): void {
    this.persons = [
      { name: "mohammad Naeem", lastName: "karimzadeh ", password: 2110111 },
      { name: "ali", lastName: "sheykhbahaie ", password: 22323 },
      { name: "mahdi", lastName: "karamai ", password: 5454343 },
      { name: "mohammad Reaza ", lastName: "Kamali ", password: 3434345 },
      { name: "moein", lastName: "noori ", password: 35435284 },
      { name: "fateme", lastName: "imani ", password: 34545643 },
    ];
    this.addUser.emit(this.persons);
  }

  newUser : person ={name :'', lastName : '' , password : 0}
  public userAdder (name:string ,lastName:string ,password:string ){
    const parsedPassword = Number(password);
   this.newUser ={name : name, lastName :lastName , password:parsedPassword }
   this.persons.push(this.newUser) 
   this.addUser.emit(this.persons);
  }
  public setDefult(e:Event) {
    e.preventDefault()
  }
}
