import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouteConfigLoadEnd } from '@angular/router';
import { ListServiceService } from 'src/app/list-service.service';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  note:Note = new Note();
  id:number;

  constructor(private route:ActivatedRoute, private noteService: ListServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
     (params: Params) =>{ this.note = this.noteService.getNoteById(params.id)}
   )
  }

  


}
