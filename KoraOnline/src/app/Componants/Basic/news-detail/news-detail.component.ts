import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  post: any;
  pid: number = 0;
  errorMessage: string = '';

  constructor(private _actvivateRouterServ: ActivatedRoute,
    private _postServ: PostService
    //  private loc:Location
  ) { }

  ngOnInit(): void {
    this.pid = this._actvivateRouterServ.snapshot.params['id'];
    console.log(this.pid);

    if (this.pid) {
      this._postServ.getPostByID(this.pid).subscribe(
        (result: any) => {
          console.log(result);
          this.post = result;
        },
        (error: string) => this.errorMessage = error
      )
    }
  }

  //  goBack(){
  //   this.loc.back();
  // }
}

