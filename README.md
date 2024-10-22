Introduction
Fahras is a book management system built with Vue.js, Tailwindcss.

Installation
To install and run the Fahras project locally, follow these steps:

Clone the repository:

```
git clone https://github.com/nourMauhoub/fahras-vue
```

Navigate into the project directory:
```
cd fahras
```

Install dependencies:

Ensure you have Node.js installed. Then run:
```
npm install
```

Run the development server:
```
npm run serve
```

Open your browser and visit:
http://localhost:8080 - http://localhost:8081

Project Structure
The project structure is organized as follows:

fahras/
├── public/
│   └── index.html
├── src/
│   ├── assets/            
│   ├── components/        
│   ├── views/             
│   ├── router/           
│   ├── store/
│   ├── App.vue            
│   └── main.js            
├── package.json
└── README.md

Features
Responsive Navigation: A mobile-friendly navigation menu that toggles on smaller screens.
Contact Information: Display of contact numbers and email for user inquiries.

Components
Main Components
App.vue that contains 

- Navbar.vue
Handles the navigation for the application.
Contains links to Books, About, and Contact sections.

-Footer.vue

Displays contact information and social media links.
Contains the newsletter signup form.
MainFahras.vue
Displays a list of books available in the system.

Routing
The application uses Vue Router for navigation. The routes are defined in the src/router/index.js file. Example routes include:
```
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
  ],
});
```

Styling
The application uses Tailwind CSS for styling. Custom styles can be added in the src/assets/main.css file. Ensure to include the Tailwind CSS CDN in your public/index.html if not using a build tool.

API
This application interacts with fahras the  API, describe the endpoints here. For example:

GET /api/books
Description: Retrieves a list of books.
Response:
```
[
  {
    "id": 1,
    "title": "Book Title",
    "author": "Author Name",
    "description": "Short description of the book."
  },
  ...
]
```

Contributing
Contributions are welcome! ⬤
