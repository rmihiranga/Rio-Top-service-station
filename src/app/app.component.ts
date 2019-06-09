import { Component } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PostService]
})

export class AppComponent {
  title = 'service-station';

  posts:Post[];
  id='5cae8ea86a2ef812e87929af';

  constructor(private _postservice: PostService) {
  }

  getItem() {
    this. _postservice.getposts()
      .subscribe((respost:Post[])=>{
        this.posts=respost
      });
  }

  addItem(post:Post){
    this. _postservice.addposts(post);
  }

  deleteItem(){
    this._postservice.deleteposts(this.id).subscribe(res=>{
      console.log("deleted");
    });
  }

  updateItem(id,pos){
    this._postservice.updateposts(this.id,pos);
    console.log("updated");
  }
}