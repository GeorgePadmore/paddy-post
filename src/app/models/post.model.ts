export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
    [key: string]: number | string; // Allow any property to be accessed via a string index
  }