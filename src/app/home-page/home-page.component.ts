import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  link = "http://demo.tumblr.com/api/read/json?";
  model = {} as JsonModel;

  //  http://demo.tumblr.com/api/read/json?debug=1
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<JsonModel>("./assets/tumblr.json").subscribe(data => {
      this.model = data;
      console.log(data);
      console.log(this.model);
    });

  }

  goToTumblrLink() {
    window.open("https://www.tumblr.com/reblog/demo/459009076/uHt0TEhP");
  }

  getDate(date: string) {
    return new Date(date).getDate();
  }
  getMonth(date: string) {
    return new Date(date).getMonth();
  }


}

export interface JsonModel {
  posts: Posts[]
  poststart: number;
  poststotal: number;
  poststype: boolean;
  tumblelog: Tumblelog;
}

export interface Posts {
  bookmarklet: number,
  bodateokmark: Date,
  conversationText: string;
  date: string;
  dategmt: string,
  feeditem: string,
  format: string,
  fromfeedid: string,
  id: string,
  isSubmission: string,
  likeButton: string,
  linkDescription: string,
  linkText: string,
  mobile: string,
  noteCount: string,
  quoteSource: string,
  quoteText: string,
  photoCaption: string,
  photoUrl500: string
  photoUrl400: string
  photoUrl250: string
  reblogButton: string,
  reblogKey: string,
  regularBody: string,
  slug: string,
  tags: string[],
  type: string,
  tumblelog: string[],///////
}

export interface Tumblelog {
  cname: boolean,
  description: string,
  feeds: any[],
  name: string;
  timezone: string;
  title: string;
}

