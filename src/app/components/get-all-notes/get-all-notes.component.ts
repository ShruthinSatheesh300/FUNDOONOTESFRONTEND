import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {


  constructor(private NoteService:NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {
    this.NoteService.getAllNotesservice().subscribe((res: any) => {
      console.log(res);

  })

}
}
