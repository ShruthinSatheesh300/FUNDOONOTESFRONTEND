import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  panelOpenState = false;
  Title:any
  Description: any;
  
  

  constructor(private NoteService:NoteService) { }

  ngOnInit(): void {

  }
  onClose(){
    let reqData = {
     Title : this.Title,
     Description:this.Description
    }
    
    this.NoteService.takeNoteService(reqData).subscribe((res: any) => {
      console.log(res);
    })
  }

}
