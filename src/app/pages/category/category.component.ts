import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/model/comments';
import { Posts } from 'src/app/model/posts';
import { CommentsService } from 'src/app/service/comments/comments.service';
import { PostsService } from 'src/app/service/posts/posts.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
comments!: Comments[];
posts!: Posts[];

  constructor(private postService: PostsService, private commentService: CommentsService) { }

  ngOnInit(): void {
    this.getcomment();
    this.getpost();
    this.listFilter='1';
  }


  getcomment(){
    this.commentService.getInfo().subscribe(
      response=> {
        this.comments=response;
    }

   );


  }

  getpost(){
    this.postService.getInfo().subscribe(
      response=> {
        this.posts=response;
    }

   );
  }


filteredPosts: Posts[]=[];
    private _listFilter: string= '1';

    get listFilter(): string{

    return this._listFilter;
  }
  set listFilter(value: string ){

    this._listFilter=value;
    this.filteredPosts=this.performFilter(value);
    console.log('In setter :' + value);

  }

performFilter(filterBy: string): Posts[]{

  return this.filteredPosts.filter((product:Posts)=>

  product.userId.includes(filterBy));
  }
}
