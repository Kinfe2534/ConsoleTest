import { NgModule } from "@angular/core";
import { NoteSource, GET_URL,POST_URL } from "../service/noteSource.model";


@NgModule({
providers:[NoteSource,{ provide: GET_URL, useValue: `http:/localhost:3000/notes` },{ provide: POST_URL, useValue: `http://localhost:3000/notes` }],
})
   
 export class ModelModule {

}