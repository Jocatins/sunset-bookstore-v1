Bookstore App

This is a Bookstore application built with Angular. It allows users to manage libraries and books, including adding new book entries and assigning them to one or multiple libraries.

Table of Contents
Features
Installation
Usage
Project Structure
API Endpoints
Contributing
License
Features
Display a list of libraries
Add new book entries
Assign books to one or multiple libraries
Fetch and display data from JSON files
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/bookstore-app.git
cd bookstore-app
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
ng serve
Navigate to http://localhost:4200/ in your browser.

Usage
Display Libraries
The list of libraries can be viewed on the home page.
Add New Book
Navigate to the 'Add New Book' page.
Fill out the form with the book's title, author, and the libraries it should be assigned to.
Click the 'Add Book' button to save the book and assign it to the selected libraries.
Project Structure
java
Copy code
bookstore-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── library-list/
│   │   │   │   ├── library-list.component.ts
│   │   │   │   ├── library-list.component.html
│   │   │   │   ├── library-list.component.css
│   │   │   ├── book-entry/
│   │   │   │   ├── book-entry.component.ts
│   │   │   │   ├── book-entry.component.html
│   │   │   │   ├── book-entry.component.css
│   │   ├── services/
│   │   │   ├── library.service.ts
│   │   ├── app.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
├── assets/
│   ├── libraries.json
│   ├── books.json
├── angular.json
├── package.json
└── README.md
API Endpoints
Libraries JSON File
Path: assets/libraries.json

Example Structure:

json
Copy code
{
  "libraries": [
    { "id": 1, "name": "Central Library" },
    { "id": 2, "name": "Community Library" }
  ]
}
Books JSON File
Path: assets/books.json

Example Structure:

json
Copy code
{
  "books": [
    { "id": 1, "title": "Book One", "author": "Author One", "libraryIds": [1, 2] },
    { "id": 2, "title": "Book Two", "author": "Author Two", "libraryIds": [1] }
  ]
}
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

This README provides a clear and concise guide to setting up and using the bookstore app, along with details on its features, structure, and how to contribute.







