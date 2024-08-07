import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss']
})
export class PostsTableComponent implements OnInit {
  posts: Post[] = [];
  filteredPosts: Post[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
      this.filteredPosts = data;
    });
  }

  sortPosts(prop: string) {
    this.filteredPosts = [...this.filteredPosts.sort((a, b) => (a[prop] > b[prop]) ? 1 : (b[prop] > a[prop] ? -1 : 0))];
  }

  filterPosts(term: string): void {
    if (!term) {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter(post => 
        post.title.toLowerCase().includes(term.toLowerCase()) ||
        post.body.toLowerCase().includes(term.toLowerCase()) ||
        post.id.toString().includes(term) ||
        post.userId.toString().includes(term)
      );
    }
  }
}