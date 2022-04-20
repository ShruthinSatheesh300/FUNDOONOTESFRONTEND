import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/Services/data.service';
import { UpdateComponent } from '../update/update.component';


@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  
 
  sentmsg: any;
  filteredString:string='';
  searchword:any;
  subscription: any;
  message: any

  constructor(public dialog: MatDialog,private dataservice: DataService) { }
  @Input() notesArray: any;
  @Output() noteUpdated = new EventEmitter<any>();
  @Output() displaytogetallnotes=new EventEmitter<string>();

  ngOnInit(): void {
    // console.log(this.notesArray);
    this.subscription = this.dataservice.searchNote.subscribe(message => {
      this.message = message;
      console.log(message.data[0]);
      this.searchword = message.data[0]
    });
    
  }
  openDialog(note:any) {
    const dialogRef = this.dialog.open(UpdateComponent,{
      
      data:note,
      "width":"600px",
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log('The dialog was closed');
      this.noteUpdated.emit(res);
     
    });

}
operation(value: any) {
  this.noteUpdated.emit(value);
}
recievefromiconstodisplaycard($event: any) {
  console.log("recievedindisplay", $event);
  this.sentmsg = $event
  this.displaytogetallnotes.emit(this.sentmsg)

}
}
