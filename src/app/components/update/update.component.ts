import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/note.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  Title: any
  Description: any
  noteId: any

  constructor(private NoteService: NoteService, public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,) {
      console.log(data);
      this.Title=data.Title
      this.Description=data.Description
      this.noteId=data._id
      
     }

  ngOnInit(): void {
  }
  onClose(){
    let reqData = {
      Title: this.Title,
     Description: this.Description,
    
    }
    console.log('updated', reqData);

    this.NoteService.updateNoteService(reqData,this.noteId).subscribe((res) => {
      console.log(res);
    })

  }

}
