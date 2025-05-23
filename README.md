
---

# 🎬 **Netflix Clone**

A **Netflix-inspired** web application built using **React**, **Vite**, and modern development tools. It features dynamic content loading, external API integration, and a fully responsive design.

---

## 🌐 Live Demo

[🔗 Visit the App](https://rebiya.github.io/NetflixClone/)

## 🎥 Video Demo

[▶️ Watch on YouTube](https://youtu.be/tY4ULnryZ8o?si=jZh5CHuRq-8H2-Zh)

---

## ✨ Features

* 📱 **Responsive Design** — Powered by React-Bootstrap & Material-UI
* 🔄 **Dynamic Data Fetching** — Axios handles all API requests
* ▶️ **Video Playback** — Uses React-YouTube for trailers
* 🔔 **User Notifications** — Integrated via React-Toastify
* 🎞️ **Movie Trailer Search** — Utilizes `movie-trailer` package
* 🎨 **Modern Styling** — Built with React-Icons & MUI Icons

---

## ⚙️ Technologies Used

| Layer        | Tools                                             |
| ------------ | ------------------------------------------------- |
| **Frontend** | ⚛️ React (with Vite)                              |
| **Styling**  | 🎨 Material-UI, 🅱️ Bootstrap, 📦 React-Bootstrap |
| **API**      | 🔗 Axios                                          |
| **Video**    | 📹 React-YouTube                                  |
| **Toasts**   | 🔔 React-Toastify                                 |
| **Icons**    | ✨ React-Icons, 🖼️ Material-UI Icons              |

---

## 🚀 Getting Started

### 📋 Prerequisites

* [🟢 Node.js](https://nodejs.org/)
* 📦 npm (comes with Node.js)
* [🔧 Git](https://git-scm.com/)

### 📦 Installation

```bash
git clone https://github.com/<your-username>/NetflixClone.git
cd NetflixClone
npm install
```

### 🧪 Running the Dev Server

```bash
npm run dev
```

Then open your browser and visit:
**🌍 [http://localhost:5173](http://localhost:5173)**

---

## 📁 Project Structure

```
NetflixClone/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components
│   ├── App.js            # Main App Component
│   └── index.js          # Entry Point
├── package.json          # Project Metadata & Scripts
├── vite.config.js        # Vite Configuration
├── .gitignore            # Ignored Files
├── dist/                 # Production Build Output
└── README.md             # Project Documentation
```

---

## 📚 Dependencies

```json
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
"react-youtube": "^10.1.0",
"react-icons": "^..."
```

---

## 🛠️ Manual Installation (If Needed)

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

## 🏗️ Production Build

```bash
npm run build
```

This generates a `dist/` folder with production-optimized assets.

---

## 🚢 Deployment (GitHub Pages)

1. Install the deployment tool:

   ```bash
   npm install gh-pages --save-dev
   ```

2. Add this to `package.json`:

   ```json
   "homepage": "https://<your-username>.github.io/NetflixClone",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:

   ```bash
   npm run deploy
   ```

4. Visit:
   **🌐 https\://<your-username>.github.io/NetflixClone**

---

## 🧯 Troubleshooting

| Problem                | Solution                                         |
| ---------------------- | ------------------------------------------------ |
| ❌ Blank Page on Deploy | Add `base: '/NetflixClone/'` in `vite.config.js` |
| ❌ 404 Errors           | Make sure `gh-pages` branch contains built files |
| ⚠️ Dependency Issues   | Try: `rm -rf node_modules && npm install`        |

---

## ⚠️ Notes

* 🔁 Replace all instances of `<your-username>` with your actual **GitHub username** before deploying.
* 📂 Ensure your `dist/` folder is clean before each deployment to avoid stale files.

---


