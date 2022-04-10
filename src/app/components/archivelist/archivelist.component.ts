import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/note.service';

@Component({
  selector: 'app-archivelist',
  templateUrl: './archivelist.component.html',
  styleUrls: ['./archivelist.component.scss']
})
export class ArchivelistComponent implements OnInit {
  archiveList: any;
  

  constructor(public dialog: MatDialog, private noteService: NoteService) { }

  ngOnInit(): void {
    this.getArchiveList();
  }
  getArchiveList() {
    this.noteService.getAllNotesservice().subscribe((res: any) => {
      console.log(res.data);
       this.archiveList=res.data
       this.archiveList = res.data.filter((object: any) => {
        return object.isArchived === true;
      })
     
    })

    }
    receiveMessagefromdisplaycard($event: any) {
      console.log("insidegetallnotes", $event);
      this.getArchiveList();

  }
}


