import {Injectable, Inject, InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {NoteResponse} from '../model/noteResponse.model';
import {GetBody} from '../model/getBody.model';
import {PostBody} from '../model/postBody.model';

export const GET_URL = new InjectionToken("get_url");
export const POST_URL = new InjectionToken("post_url");


@Injectable()
export class NoteSource {
    constructor(private http : HttpClient, @Inject(GET_URL) private getUrl : string, @Inject(POST_URL) private postUrl : string) {}

    getNote(): Observable < NoteResponse[] > {
        // return this.data;
        // return this.http.get<Restaurant[]>(this.url);
        return this.sendGet<NoteResponse[]>("GET", this.getUrl);
    }   
    private sendGet<T>(verb : string, url : string): Observable < T > {
        return this.http.request<T>(verb, url);
    }

    postNote(postBody:PostBody): Observable < PostBody > { // return this.http.post<Restaurant>(this.url,restaurant);
        return this.sendPost<PostBody>("POST", this.postUrl, postBody);
    }

    private sendPost<T>(verb : string, url : string, body? : PostBody): Observable < T > {
        return this.http.request<T>(verb, url, {body: body});
    }

}
