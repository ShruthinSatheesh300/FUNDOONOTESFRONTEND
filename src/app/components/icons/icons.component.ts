import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/note.service';
import { ActivatedRoute } from '@angular/router';
import { TrashlistComponent } from '../trashlist/trashlist.component';
import { ArchivelistComponent } from '../archivelist/archivelist.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
 
   noteId: any
  @Input() noteObject:any
  
  @Output() iconstodisplay = new EventEmitter<string>();

  constructor(private NoteService: NoteService,private activatedroute: ActivatedRoute) {
     
  
   }
   isDeleted: boolean = false
   isArchived: boolean = false
   colorarray = ['#fff', '#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa'];

  ngOnInit(): void {
    //  console.log(this.noteObject._id);
    
     this.noteId=[this.noteObject._id]
     let del = this.activatedroute.snapshot.component;

     if (del == TrashlistComponent) {
       this.isDeleted = true;
       console.log(this.isDeleted);
     }
     let arc = this.activatedroute.snapshot.component;
 
     if (arc == ArchivelistComponent) {
       this.isArchived = true;
       console.log(this.isArchived);
     }

  }
  onDelete() {
    let reqData = {
      //  noteId:[this.noteObject._id],
     
      isDeleted:true
      
    }
    console.log('deleted',reqData);

    this.NoteService.trashNoteService(reqData,this.noteId).subscribe((res:any) => {
      console.log(res);
      this.iconstodisplay.emit(res)
      
    })
  }
  onArchive(){
    let reqData = {
      // noteId:[this.noteObject._id],
      isArchived:true
    }
    console.log('Archived',reqData);

    this.NoteService.archiveNoteService(reqData,this.noteId).subscribe((res:any) =>{
      console.log(res);
      this.iconstodisplay.emit(res)
      
    })
    
  }
  onUnarchive() {
    let reqData = {
      // noteId:[this.noteObject._id],
      isArchived: false,
    }
    console.log('UnArchived',reqData);

    this. NoteService.archiveNoteService(reqData,this.noteId).subscribe((res: any) => {
      console.log(res); 
      this.iconstodisplay.emit(res)


    })
  }
  onRestore() {
    let reqData = {
      // noteId:[this.noteObject._id],
      isDeleted: false,
    }
    console.log('Restore',reqData);

    this. NoteService.trashNoteService(reqData,this.noteId).subscribe((res: any) => {
      console.log(res); 
      this.iconstodisplay.emit(res)


    })
  }

  onDeleteForever() {
    let reqData = {
      //  noteId:[this.noteObject._id],
      // isDeleted: false,
    }
    console.log('Note Deleted',reqData);

    this. NoteService.deleteForeverService(this.noteId).subscribe((res: any) => {
      console.log(res); 
      this.iconstodisplay.emit(res)


    })
  }
  setColor(color:any){
    this.noteObject.Color = color;
    let reqData = {
      Color:color

    }
    this. NoteService.updateNoteService(reqData,this.noteId).subscribe((res: any) => {
      console.log(res); 

  })
}
}
