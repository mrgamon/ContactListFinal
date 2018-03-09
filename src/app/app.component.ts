import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
  FirstName:string;
  LastName:string;
  Email:string;
  Address:string;
  Phone:number;
}
interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postsCol: AngularFirestoreCollection<Post>;
  posts: any;

  title:string;
  content:string;
  FirstName:string;
  LastName:string;
  Email:string;
  Address:string;
  Phone:number;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  

  
  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    //this.posts = this.postsCol.valueChanges();
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        })
      })
    
  }

  addPost() {
    this.afs.collection('posts').add({'title': this.title, 'content': this.content, 'FirstName': this.FirstName, 'LastName': this.LastName, 'Email': this.Email, 'Address': this.Address, 'Phone': this.Phone });
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();
  }

  deletePost(postId) {
    this.afs.doc('posts/'+postId).delete();
  }

}

