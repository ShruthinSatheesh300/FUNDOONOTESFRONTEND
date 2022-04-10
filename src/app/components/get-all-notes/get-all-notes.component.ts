import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {


  constructor(private NoteService: NoteService) { }
  noteList = []

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {
    this.NoteService.getAllNotesservice().subscribe((res: any) => {
      console.log(res);
      this.noteList = res.data;
      this.noteList.reverse();
      this.noteList = this.noteList.filter((object: any) => {
        return object.isArchived === false && object.isDeleted === false;

      })


    })

  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.getAllNotes()
  }
  receiveEvent($event: any) {
    this.getAllNotes();
  }
  updatedData(value: any) {

    this.getAllNotes();
  }
}
