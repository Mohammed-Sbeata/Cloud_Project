### Cloud-Based Document Analytics Service

This project is a cloud-based web application for uploading, parsing, searching, sorting, and classifying large collections of PDF and Word documents. It uses Firebase as the backend, Node.js/Express for the server, and HTML/CSS/JavaScript for the frontend.

### Features

- Upload PDF and DOCX documents
- Automatically extract and store document title and content in Firebase
- Search documents by keywords (with highlighted results)
- Sort documents by extracted title
- Classify documents based on categories (tree-like structure)
- View statistics (number of docs, total size, search time, etc.)

### Technologies

- Node.js + Express.js
- Firebase upload FrontEnd
- PDF-parse and mammoth for document parsing
- HTML, CSS, Vanilla JS

### How to Run

1. Clone the repo:
```bash
git clone https://github.com/your-user/your-repo.git
cd your-repo
```

## Install dependencies:
```
npm install

```
## Add your Firebase credentials file:

```
project-root/
└── serviceAccountKey.json

```

## Run the server:

```
node src/app.js

```

## Open http://localhost:3000 in your browser.

### Folder Structure

```
project-root/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   └── app.js
├── public/
│   ├── index.html
│   ├── categories.html
│   ├── stats.html
│   └── style.css
├── uploads/
├── serviceAccountKey.json
├── package.json
└── README.md

```

### Author
Developed by :
- [Mohammed Sbeata](https://github.com/Mohammed-Sbeata)
- [Malek Abo-Alqomoz](https://github.com/Malek-Alqomoz)
- [Yousef Harara](https://github.com/Yousef-Harara)

- Islamic University of Gaza — Cloud & Distributed Systems Project

