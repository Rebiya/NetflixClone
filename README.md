project:
  name: "Netflix Clone"
  description: >
    A Netflix-inspired web application built with React, Vite, and modern web development tools. 
    It showcases dynamic content, API integrations, and a responsive UI.
  live_demo: "https://rebiya.github.io/NetflixClone/"
  video_demo: "https://youtu.be/tY4ULnryZ8o?si=jZh5CHuRq-8H2-Zh"

features:
  - Responsive design using React-Bootstrap and Material-UI
  - Dynamic data fetching using Axios
  - Video playback with React-YouTube
  - User notifications via React-Toastify
  - Movie trailer search using Movie-Trailer
  - Styled using React-Icons and Material-UI Icons

technologies:
  frontend: "React (via Vite)"
  styling:
    - Material-UI
    - Bootstrap
    - React-Bootstrap
  api_requests: "Axios"
  video: "React-YouTube"
  notifications: "React-Toastify"
  icons:
    - React-Icons
    - Material-UI Icons

getting_started:
  prerequisites:
    - Node.js: "https://nodejs.org/"
    - npm: "Included with Node.js"
    - Git: "https://git-scm.com/"
  installation_steps:
    - "git clone https://github.com/<your-username>/NetflixClone.git"
    - "cd NetflixClone"
    - "npm install"
  run:
    dev_command: "npm run dev"
    access_url: "http://localhost:5173"

dependencies:
  - "@emotion/react": "^11.13.3"
  - "@emotion/styled": "^11.13.0"
  - "@mui/icons-material": "^6.1.7"
  - "@mui/material": "^6.1.7"
  - "axios": "^1.7.7"
  - "bootstrap": "^5.3.3"
  - "movie-trailer": "^3.2.2"
  - "react": "^18.3.1"
  - "react-bootstrap": "^2.10.5"
  - "react-dom": "^18.3.1"
  - "react-toastify": "^10.0.6"
  - "react-youtube": "^10.1.0"
  - "react-icons"

manual_installation:
  commands:
    - "npm install @mui/material @emotion/react @emotion/styled"
    - "npm install @mui/icons-material"
    - "npm install react-bootstrap bootstrap"
    - "npm install axios"
    - "npm install movie-trailer"
    - "npm install react-toastify"
    - "npm install react-youtube"
    - "npm install react-icons"

build_production:
  build_command: "npm run build"
  output_folder: "dist"

deployment:
  platform: "GitHub Pages"
  steps:
    - "npm install gh-pages --save-dev"
    - add_homepage_to_package_json: "https://<your-username>.github.io/NetflixClone"
    - add_scripts_to_package_json:
        predeploy: "npm run build"
        deploy: "gh-pages -d dist"
    - "npm run deploy"
    - access_url: "https://<your-username>.github.io/NetflixClone"

project_structure:
  - public/: "Static assets (images, etc.)"
  - src/:
      components/: "Reusable components"
      pages/: "Page-level components"
      App.js: "Main app file"
      index.js: "Entry point"
  - .gitignore: "Git ignored files"
  - package.json: "Dependencies and scripts"
  - vite.config.js: "Vite configuration"
  - README.md: "Project documentation"
  - dist/: "Production build (generated)"

troubleshooting:
  - issue: "Blank Page on Deployment"
    solution: >
      Ensure vite.config.js contains: 
      export default { base: '/NetflixClone/' }
  - issue: "404 Errors"
    solution: "Confirm gh-pages branch contains dist content."
  - issue: "Dependency Issues"
    solution:
      - "rm -rf node_modules"
      - "npm install"

notes:
  replace_placeholder: "Replace <your-username> with your actual GitHub username"
