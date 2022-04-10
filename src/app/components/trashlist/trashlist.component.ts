import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/note.service';

@Component({
  selector: 'app-trashlist',
  templateUrl: './trashlist.component.html',
  styleUrls: ['./trashlist.component.scss']
})
export class TrashlistComponent implements OnInit {
  trashList : any;

  constructor(public dialog: MatDialog, private noteService: NoteService) { }

  ngOnInit(): void {
    this.getTrashList();
  }
  getTrashList(){
    this.noteService.getAllNotesservice().subscribe((res: any) => {
      console.log(res.data);
       this.trashList=res.data
       this.trashList = res.data.filter((object: any) => {
        return object.isDeleted === true;
      })
     
    })

    }
    receiveMessagefromdisplaycard($event: any) {
      console.log("insidegetallnotes", $event);
      this.getTrashList();

  }
}


