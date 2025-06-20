# Cloud-Based Document Analytics Service

## Project Overview
This project is a cloud-based service designed for managing and analyzing large collections of documents (PDFs and Word files). It enables users to upload, search, sort, and classify documents efficiently using cloud storage and processing resources. The system highlights search results within documents and provides statistical insights such as document counts, sizes, and processing times.

## Key Features
- **Document Upload**: Supports PDF and Word file uploads via web interface or API.
- **Search Functionality**: Performs keyword-based searches with highlighted results.
- **Sorting**: Sorts documents by extracted titles.
- **Classification**: Automatically classifies documents based on predefined categories and keyword matching.
- **Statistics Dashboard**: Displays metadata like total documents, storage size, and processing times.

## Technologies Used
- **Backend**: Node.js with Express.js
- **Database**: Firebase Firestore (NoSQL)
- **Document Parsing**: 
  - `pdf-parse` for PDFs
  - `mammoth` for Word files
- **Frontend**: Vanilla JavaScript and HTML
- **Deployment**: 
  - Backend: Render (or Heroku/Google Cloud Run)
  - Frontend: Firebase Hosting or embedded in Express app

## System Architecture
The service follows a client-server model:
1. **Frontend**: Simple web interface for user interactions.
2. **Backend**: RESTful API handling file uploads, text extraction, and database operations.
3. **Cloud Services**: 
   - Firebase Firestore for data storage.
   - Cloud platform (Render/Heroku) for backend hosting.

## Database Design
Documents are stored in Firestore with the following fields:
- `title` (string)
- `content` (string)
- `category` (string)
- `size` (number)
- `uploadDate` (timestamp)

## How to Run the Project
1. **Live Demo**: Access the deployed project [here](https://cloud-project-2twj.onrender.com/).
2. **Source Code**: Clone the repository from [GitHub](https://github.com/Mohammed-Sbeata/Cloud_Project.git).

## Future Enhancements
- Implement machine learning for advanced document classification.
- Support additional file formats (e.g., Excel, PowerPoint).
- Improve UI/UX for better user experience.

## Contributors
- Malek Hossam Abo Al-Qumboz (120191034)
- Mohameed Majed Sheata (120210748)
- Yousef Gazi Harara (120211259)

**Course**: Cloud and Distributed Systems (SICT 4313)  
**Instructor**: Dr. Rebhi S. Baraka  
**University**: Islamic University of Gaza, Faculty of Information Technology  

## References
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [pdf-parse NPM Package](https://www.npmjs.com/package/pdf-parse)
- [Express.js](https://expressjs.com)
