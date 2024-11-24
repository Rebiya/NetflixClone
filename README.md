# **Netflix Clone**

This project is a Netflix-inspired web application built with **React**, **Vite**, and a variety of modern web development tools. The application showcases dynamic content, API integrations, and a responsive UI.

---

## **Features**
- Responsive design using **React-Bootstrap** and **Material-UI**.
- Fetches data dynamically from external APIs using **Axios**.
- Video playback functionality using **React-YouTube**.
- Smooth user notifications using **React-Toastify**.
- Movie trailer search functionality with **Movie-Trailer**.
- Styled with **React-Icons** and Material-UI icons.

---

## **Technologies Used**
- **Frontend**: React (via Vite)
- **Styling**: Material-UI, Bootstrap, React-Bootstrap
- **API Requests**: Axios
- **Video Integration**: React-YouTube
- **Notifications**: React-Toastify
- **Icons**: React-Icons, Material-UI Icons

---

## **Getting Started**

### **Prerequisites**
Ensure you have the following installed:
- **Node.js**: [Download](https://nodejs.org/)
- **npm**: Included with Node.js
- **Git**: [Download](https://git-scm.com/)

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/NetflixClone.git
   ```
2. Navigate into the project directory:
   ```bash
   cd NetflixClone
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### **Run the Application**
Start the development server:
```bash
npm run dev
```
Access the application at:
```
http://localhost:5173
```

---

## **Dependencies**
The following libraries and frameworks are used in this project:

```json
"dependencies": {
    "@emotion/react": "^11.13.3",
    "@emotion/styled": "^11.13.0",
    "@mui/icons-material": "^6.1.7",
    "@mui/material": "^6.1.7",
    "axios": "^1.7.7",
    "bootstrap": "^5.3.3",
    "movie-trailer": "^3.2.2",
    "react": "^18.3.1",
    "react-bootstrap": "^2.10.5",
    "react-dom": "^18.3.1",
    "react-toastify": "^10.0.6",
    "react-youtube": "^10.1.0"
}
```

To install the required dependencies manually, run:
```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install react-bootstrap bootstrap
npm install axios
npm install movie-trailer
npm install react-toastify
npm install react-youtube
npm install react-icons
```

---

## **Build for Production**
To create a production-ready build of the application:
```bash
npm run build
```
The optimized output will be in the `dist` folder.

---

## **Deployment on GitHub Pages**
1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Update your `package.json` file:
   - Add the `homepage` field:
     ```json
     "homepage": "https://<your-username>.github.io/NetflixClone"
     ```
     Replace `<your-username>` with your GitHub username.

   - Add the following scripts:
     ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
     ```
3. Deploy the application:
   ```bash
   npm run deploy
   ```

4. Access the live application:
   ```
   https://<your-username>.github.io/NetflixClone
   ```

---

## **Project Structure**
```
NetflixClone/
├── public/                 // Static assets (images, etc.)
├── src/
│   ├── components/         // Reusable components
│   ├── pages/              // Page-level components
│   ├── App.js              // Main app file
│   └── index.js            // Entry point
├── .gitignore              // Git ignored files
├── package.json            // Dependencies and scripts
├── vite.config.js          // Vite configuration
├── README.md               // Project documentation
└── dist/                   // Production build (generated)
```

---

## **Troubleshooting**
1. **Blank Page on Deployment**:
   - Ensure the `vite.config.js` file is configured correctly:
     ```javascript
     export default {
       base: '/NetflixClone/', // Replace with your repository name
     };
     ```
2. **404 Errors**:
   - Confirm that the `gh-pages` branch contains the content of the `dist` folder.
3. **Dependency Issues**:
   - Delete the `node_modules` folder and reinstall:
     ```bash
     rm -rf node_modules
     npm install
     ```
 Replace `<your-username>` with your GitHub username!
 Check out the deployed version of my Netflix clone here: https://rebiya.github.io/NetflixClone/
