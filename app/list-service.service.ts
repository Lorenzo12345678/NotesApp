import { Injectable, OnInit } from '@angular/core';
import { title } from 'process';
import { Note } from './models/note';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService  {
  notes : Note[] = [

  ];
  //TODO creare l'array e i servizi di accesso e modifica 

  

  constructor() { }

  addNote(note : Note){
    this.notes.push(note);
    
  }

  getNotes(){
    return this.notes;
  }

  getNoteByTitle(title : string){
    return this.notes.map( (note) => note.title === title ? note : null);
  }

  getNoteById(id:number){
    return this.notes[id];
  }
  

}
