import { PageEvent } from '@angular/material/paginator';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  today: number = Date.now();

  posts: any;
  pageSlice: any;

  totalRecords: number = 0;
  sport: string = 'رياضات أخرى';
  errorMessage: string = '';
  // page:Number =1

  //  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _postServ: PostService) {
    // this.posts =new Array<any>();
    // this.totalRecords='';
    // this.totalRecords=0;


  }

  ngOnInit(): void {
    this.posts = this._postServ.getAllposts().subscribe(
      result => {
        this.posts = result;
        console.log(this.posts);
        this.totalRecords = this.posts.length;
        this.pageSlice = this.posts.slice(0, 12);

      },
      err => this.errorMessage = err
    )


    // this.posts.paginator = this.paginator;
    // this.totalRecords = this.posts.length;
  }

  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.posts.length) {
      endIndex = this.posts.length;
    }

    this.pageSlice = this.posts.slice(startIndex, endIndex);
  }

}
