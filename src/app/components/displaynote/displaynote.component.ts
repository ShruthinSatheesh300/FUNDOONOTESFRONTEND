import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';


@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  @Input() notesArray: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.notesArray);
    
  }
  openDialog(note:any) {
    const dialogRef = this.dialog.open(UpdateComponent,{
      width:"600px",
      height:"auto",
      data:note
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log('The dialog was closed');
     
    });

}
}
