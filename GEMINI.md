# HF_Website - Gemini CLI Context

## Project Overview
**HF_Website** is a multi-page, dark-themed corporate website for **Horizon Frontier (HFR)**, an engineering-led consulting and project assurance firm based in Lisbon, Portugal. The site is designed to be ISO 9001:2015 compliant in its digital presence, emphasizing technical rigor and structural integrity.

### Core Technologies
- **HTML5:** Multi-page structure (`index.html`, `about.html`, `services.html`, `projects.html`, `contact.html`).
- **CSS3:** Custom styling with CSS variables, responsive design, and animations (`assets/css/style.css`).
- **JavaScript (Vanilla):** Client-side logic for navigation, cookie consent, and scroll animations (`assets/js/main.js`).
- **External Dependencies:**
  - [Phosphor Icons](https://phosphoricons.com/) (Webfont).
  - [Google Fonts](https://fonts.google.com/specimen/Overpass) (Overpass).
- **Development Tools:**
  - `browsersync`: Mentioned in `package.json` for live-reloading during development.

## Building and Running
The project is a static website and does not require a complex build process.

### Development
1. **Install Dependencies (if needed):**
   ```bash
   npm install
   ```
2. **Run BrowserSync (Placeholder):**
   *TODO: Verify the exact BrowserSync script. Currently, `package.json` only lists the dependency without a script.*
   Typical usage:
   ```bash
   npx browser-sync start --server --files "*.html, assets/css/*.css, assets/js/*.js"
   ```

### Testing
- No automated tests are currently present. Verification is performed via manual browser inspection.

## Development Conventions
- **Clean Code:** Use semantic HTML and maintain the existing CSS variable architecture for consistent styling.
- **Responsiveness:** Ensure all new elements are tested against the mobile-first breakpoints defined in `style.css`.
- **Naming:** Follow the existing BEM-lite naming convention (e.g., `.service-card`, `.nav-menu`).
- **Assets:** Store stylesheets in `assets/css/` and scripts in `assets/js/`.

## Key Files
- `index.html`: Main landing page showcasing core disciplines.
- `assets/css/style.css`: Central style repository utilizing a dark-mode palette.
- `assets/js/main.js`: Handles mobile navigation, Google Analytics initialization, and scroll-reveal effects.
- `package.json`: Manages development dependencies.
