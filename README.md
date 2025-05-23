project:
  name: "Netflix Clone"
  description: >
    A Netflix-inspired web application built with React, Vite, and modern web development tools.
    It showcases dynamic content loading, API integrations, and a fully responsive UI.
  live_demo: "https://rebiya.github.io/NetflixClone/"
  video_demo: "https://youtu.be/tY4ULnryZ8o?si=jZh5CHuRq-8H2-Zh"

features:
  - "Responsive design implemented with React-Bootstrap and Material-UI"
  - "Dynamic data fetching using Axios"
  - "Video playback support via React-YouTube"
  - "User notifications powered by React-Toastify"
  - "Movie trailer search using the movie-trailer library"
  - "Clean, modern styling with React-Icons and Material-UI Icons"

technologies:
  frontend: "React (via Vite)"
  styling:
    - "Material-UI"
    - "Bootstrap"
    - "React-Bootstrap"
  api_requests: "Axios"
  video_playback: "React-YouTube"
  notifications: "React-Toastify"
  icons:
    - "React-Icons"
    - "Material-UI Icons"

getting_started:
  prerequisites:
    - name: "Node.js"
      url: "https://nodejs.org/"
    - name: "npm"
      note: "Included with Node.js"
    - name: "Git"
      url: "https://git-scm.com/"
  installation_steps:
    - "git clone https://github.com/<your-username>/NetflixClone.git"
    - "cd NetflixClone"
    - "npm install"
  run:
    dev_command: "npm run dev"
    access_url: "http://localhost:5173"

dependencies:
  - "@emotion/react: ^11.13.3"
  - "@emotion/styled: ^11.13.0"
  - "@mui/icons-material: ^6.1.7"
  - "@mui/material: ^6.1.7"
  - "axios: ^1.7.7"
  - "bootstrap: ^5.3.3"
  - "movie-trailer: ^3.2.2"
  - "react: ^18.3.1"
  - "react-bootstrap: ^2.10.5"
  - "react-dom: ^18.3.1"
  - "react-toastify: ^10.0.6"
  - "react-youtube: ^10.1.0"
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
  - "public/: Static assets (images, favicon)"
  - "src/:"
  - "  components/: Reusable React components"
  - "  pages/: Page-level components"
  - "  App.js: Main application component"
  - "  index.js: Entry point"
  - ".gitignore: Git ignore configuration"
  - "package.json: Project metadata & dependencies"
  - "vite.config.js: Vite configuration"
  - "README.md: Project documentation"
  - "dist/: Production build output"

troubleshooting:
  - issue: "Blank page on deployment"
    solution: "Ensure vite.config.js includes `export default { base: '/NetflixClone/' }`"
  - issue: "404 errors"
    solution: "Verify that the `gh-pages` branch contains the contents of the `dist` folder"
  - issue: "Dependency issues"
    solution:
      - "rm -rf node_modules"
      - "npm install"

