import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-general-section1',
  templateUrl: './general-section1.component.html',
  styleUrls: ['./general-section1.component.scss']
})
export class GeneralSection1Component implements OnInit {
  today: number = Date.now();
  posts: any;
  errorMessage: string = '';

  sport: string = 'رياضات أخرى';

  constructor(private _activatedRoute: ActivatedRoute
    , private _postServ: PostService) { }

  ngOnInit(): void {

    this.posts = this._postServ.getAllposts().subscribe(
      result => {
        this.posts = result;
        this.posts = this.posts.slice(0, 6);
        console.log(this.posts);

      },
      err => this.errorMessage = err
    )
  }
}

