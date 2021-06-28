import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoteEditComponent } from './notes-list/note-edit/note-edit.component';
import { NotesListComponent } from './notes-list/notes-list.component';

const routes: Routes = [
  {path:"", component: HomeComponent, pathMatch: "full"},
 {path : "list", component : NotesListComponent},
 {path:'item/:id', component: NoteEditComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
