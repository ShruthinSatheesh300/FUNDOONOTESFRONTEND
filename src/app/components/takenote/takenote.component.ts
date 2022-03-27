import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  panelOpenState = false;
  div1: boolean = true;
  div2: boolean = false;
  span1: boolean = false;
  Title: any;
  Description: any;


  constructor(private NoteService: NoteService ) { }
  ngOnInit(): void {
    
  }
  expansiondiv() {
    this.div1 = false;
    this.span1 = true;
    this.div2 = true;
  }
  closeexpansiondiv() {
    this.div1 = true;
    this.span1 = false;
  }
  
  onclose() {
    this.span1 = false;
    this.div1 = true;
    this.panelOpenState = false;
    this.div2 = false;

    let reqData = {
      'Title': this.Title, 
      'Description': this.Description
    }
    
    this.NoteService.takeNoteService(reqData).subscribe((res: any) => {
      console.log(res);
    })
  }
}
