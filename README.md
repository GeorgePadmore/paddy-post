# PaddyPost - Angular Sortable and Paginable Table

PaddyPost is an Angular application that displays posts fetched from the JSONPlaceholder API in a table that users can sort and paginate. The table allows users to adjust the number of records displayed per page and includes a search functionality to filter posts by any keyword present in the post fields.

## Features

- **Fetch and display posts**: Utilizes JSONPlaceholder API to fetch and display posts.
- **Sortable columns**: Users can sort posts by ID, Title, or Content by clicking on the respective column headers.
- **Search functionality**: Includes a search input to filter posts based on user input.
- **Adjustable pagination**: Allows users to choose how many records to display per page (options include 10, 20, 30, 40, 50, 100, or All).
- **Responsive design**: Ensures the table is responsive and functional across different device sizes.

## Project Setup

### Prerequisites

Make sure you have the following installed before you proceed:
- Node.js
- Angular CLI

### Installation

Follow these steps to get your development environment running:

1. Clone the repository:
   ```bash
   git clone https://github.com/GeorgePadmore/paddy-post.git
   ```

2. Change directory to the project folder:
   ```bash
   cd paddy-post
   ```

3. Install required packages:
   ```bash
   npm install
   ```
   
4. Running the Application. To run the application on your local machine:
   ```bash
   ng serve
   ```
   
### Usage

- Sorting: Click on the headers of the ID, Title, or Content columns to sort the data.
- Filtering: Type into the search box at the top of the table to filter posts.
- Pagination: Use the dropdown on the right side of the search box to select the number of records to show per page.


### Code Structure

- **app/posts-table**: Contains the PostsTableComponent that handles the table display, sorting, filtering, and pagination.
- **app/services/api.service.ts**: Manages fetching data from the JSONPlaceholder API.
- **app/models/post.model.ts**: Provides a model for the type definition of Post.


### Authur

- George Padmore Yeboah