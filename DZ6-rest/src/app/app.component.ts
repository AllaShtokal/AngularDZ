import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { PostModel } from './models/post.model';
import { ActivityHttpService } from './services/activity-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  addForm!: FormGroup;
  postsFromApi: PostModel[] = [];
  tmpPost = new PostModel();

  constructor(private activityHttpService: ActivityHttpService) {
  }

  ngOnInit(): void {
    this.activityHttpService.getItems()
      .pipe(take(1))
      .subscribe(items => this.setTableItems(items))

    this.addForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      userId: new FormControl(),
      title: new FormControl(),
      body: new FormControl()
    })
  }
  revert() {
    this.addForm.reset();
  }

  setTableItems(items: PostModel[]) {
    this.postsFromApi = items;
  }

  removeBtnAction(toRemove: PostModel) {
    this.activityHttpService.deletePost(toRemove);
    const postsIndex = this.postsFromApi.indexOf(toRemove);
    this.postsFromApi.splice(postsIndex, 1);
  }

  editBtnAction(toUpdate: PostModel) {
    this.postsFromApi.forEach(el => {
      if (el.id === toUpdate.id) { el.isEditModeOn = true; }
    }
    );
  }

  updateBtnAction(toUpdate: PostModel) {
    this.activityHttpService.updatePost(toUpdate)
      .subscribe((data: PostModel) => {
        this.postsFromApi[toUpdate.id - 1] = data;
      });
  }
  submitForm() {
    this.tmpPost.userId = this.addForm.value.userId;
    this.tmpPost.title = this.addForm.value.title;
    this.tmpPost.body = this.addForm.value.body;
    this.tmpPost.isEditModeOn = false;

    this.activityHttpService.addPost(this.tmpPost)
      .subscribe((data: PostModel) => {
        this.postsFromApi.push(data);
      })
    alert('success')
    this.addForm.reset();
  }



}


