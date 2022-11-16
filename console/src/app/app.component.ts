///<reference types="chrome"/>
import { Component, HostListener} from '@angular/core';
import { GetBody,PostBody, NoteSource } from './model';


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']})

export class AppComponent {
  
  current_url='';
  textAreaContent:string='';
  constructor(private noteSource:NoteSource){
    parent.postMessage("to parent","*")
 
  }
  @HostListener("window:message",["$event"])
  onMessage(event: any){
    console.log(event)
    this.current_url=event.origin;
  
  }
  getNote(){
    this.noteSource.getNote().subscribe((res)=>{
      console.log("GET Response")
      console.log(res)
    })
  }
  postNote(){
    let postBody= new PostBody(`${this.current_url}`,`${this.textAreaContent}`)   
    this.noteSource.postNote(postBody).subscribe((res)=>{
      console.log("POST Response")
      console.log(res)
    })

  }
   
}
