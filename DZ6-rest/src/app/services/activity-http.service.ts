import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { PostModel } from "../models/post.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ActivityHttpService {
  private readonly url = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {
  }

  addPost(newPost: PostModel): Observable<PostModel> {
    return this.httpClient.post<PostModel>(this.url + '/posts', newPost);
  }

  getItems(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(this.url + '/posts').pipe(map((items: PostModel[]) => {
      items.forEach((item: any) => this.addExtraFields(item));
      return items;
    }));;
  }
  private addExtraFields(item: PostModel) {
    item.isEditModeOn = false;
  }

  updatePost(updatedPost: PostModel): Observable<PostModel> {
    return this.httpClient.put<PostModel>(this.url + '/posts/' + updatedPost.id, updatedPost);
  }

  deletePost(toDeletePost: PostModel): Observable<PostModel> {
    return this.httpClient.delete<PostModel>(this.url + '/posts/' + toDeletePost.id);
  }
}

