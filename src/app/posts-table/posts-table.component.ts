import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss']
})
export class PostsTableComponent implements OnInit {
  posts: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.posts = data;
      });
  }

  sortPosts(prop: string) {
    this.posts = this.posts.sort((a: { [x: string]: number; }, b: { [x: string]: number; }) => (a[prop] > b[prop]) ? 1 : (b[prop] > a[prop] ? -1 : 0));
  }
}