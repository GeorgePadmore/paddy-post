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
  currentPage: number = 1;
  pageSize: number = 10;
  totalRecords: number = 0;
  totalPages: number = 0;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
      this.totalRecords = data.length;
      this.updatePageSize('10'); // Set default page size on load
    });
  }


  /**
   * Sorts the posts array based on the given property.
   * @param prop string - Property name of the Post object to sort by
   */
  sortPosts(prop: string): void {
    this.filteredPosts = [...this.posts.sort((a, b) => (a[prop] > b[prop]) ? 1 : (b[prop] > a[prop] ? -1 : 0))];
  }


  /**
   * Filters posts based on the given search term and resets pagination to the first page.
   * @param term string - The search term to filter posts
   */
  filterPosts(term: string): void {
    if (!term) {
      this.setPage(1);
    } else {
      this.filteredPosts = this.posts.filter(post =>
        post.title.toLowerCase().includes(term.toLowerCase()) ||
        post.body.toLowerCase().includes(term.toLowerCase()) ||
        post.id.toString().includes(term) ||
        post.userId.toString().includes(term)
      );
      this.currentPage = 1;
    }
  }


  /**
   * Paginates the posts based on the current pageSize and pageNumber.
   * @param posts Post[] - Array of posts to paginate
   * @param pageSize number - The number of posts per page
   * @param pageNumber number - The current page number
   * @returns Post[] - The subset of posts for the current page
   */
  paginatePosts(posts: Post[], pageSize: number, pageNumber: number): Post[] {
    const startIndex = (pageNumber - 1) * pageSize;
    return posts.slice(startIndex, startIndex + pageSize);
  }


  /**
   * Sets the current page number and refreshes the posts display.
   * @param page number - The new page number
   */
  setPage(page: number): void {
    this.currentPage = page;
    this.refreshPosts();
  }


  /**
   * Updates the pageSize and resets pagination.
   * @param size string - The new page size or 'all' to show all records
   */
  updatePageSize(size: string): void {
    this.pageSize = size === 'all' ? this.totalRecords : Number(size);
    this.currentPage = 1;
    this.refreshPosts();
  }
  

  /**
   * Refreshes the display of posts to reflect any changes in pagination or filtering.
   */
  refreshPosts(): void {
    this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
    this.filteredPosts = this.paginatePosts(this.posts, this.pageSize, this.currentPage);
  }
}