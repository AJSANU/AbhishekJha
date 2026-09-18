# Abhishek Jha — Portfolio

A personal portfolio for Abhishek Jha, Senior Software Developer at Oracle Cloud Infrastructure. The design pairs warm neutral colors, orange accents, generous typography, and custom SVG illustrations with career stories grounded in the included résumé.

Built with Next.js 13, React 18, and CSS. The new homepage uses lightweight SVG artwork for its orbital hero and project illustrations, alongside locally hosted fonts.

## Run locally

Use **Node.js 20** and npm from the repository root:

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). If your npm configuration points to an unavailable private registry, explicitly use the public registry for installation:

```bash
npm ci --registry=https://registry.npmjs.org
```

For a production build:

```bash
npm run build
npm start
```

Run the project's lint check with `npm run lint`.

## Experience

- Responsive navigation with section highlighting and a mobile menu.
- Industry work and personal project filters.
- Professional case studies in native dialogs, with keyboard dismissal and focus restoration.
- Expandable career entries for Oracle, Teradata, and Amazon.
- Skills, education, awards, and colleague recommendations.
- Recommendation controls and links to published technical writing.
- Email links and a copy-email action with status feedback.
- Scroll reveal effects, reduced-motion support, visible keyboard focus, and a skip-to-content link.

Contact uses `mailto:` links and the browser clipboard. The homepage does not require EmailJS credentials, an email API, or a contact backend. Clipboard access requires a secure context such as HTTPS or localhost; if copying fails, the address remains available to select or open in an email app.

Professional project images are conceptual illustrations. Career metrics and experience details are drawn from the résumé; public project links and recommendation excerpts come from the original portfolio.

## Edit the portfolio

| File                                     | Purpose                                                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `constants/portfolio.js`                 | Profile, contact links, experience, projects, case studies, capabilities, recommendations, and articles |
| `pages/index.js`                         | Homepage sections and interactions                                                                      |
| `pages/_app.js`                          | Page metadata, favicon references, global CSS, and Vercel Analytics                                     |
| `styles/globals.css`                     | Layout, colors, typography, responsive rules, and interaction styles                                    |
| `components/portfolio/OrbitalVisual.jsx` | Custom hero illustration                                                                                |
| `components/portfolio/ProjectVisual.jsx` | Concept illustrations for project cards and dialogs                                                     |
| `styles/OrbitalVisual.module.css`        | Hero illustration styling                                                                               |
| `styles/ProjectVisual.module.css`        | Project illustration styling                                                                            |
| `public/fonts/`                          | Locally hosted typefaces                                                                                |
| `public/document/Abhishek__Resume.pdf`   | Downloadable résumé                                                                                     |

Most content updates belong in `constants/portfolio.js`. Hero copy and a few editorial labels and figures are set directly in `pages/index.js`; update those when changing the associated career facts. Replace the PDF at the same path to keep the résumé links working, or change `profile.resume` if the filename changes.

The current homepage is implemented in `pages/index.js` and `components/portfolio/`. Older components and assets remain in the repository but are not used by the redesigned homepage.

Social metadata uses the existing production domain. Set `NEXT_PUBLIC_SITE_URL` to the final site origin if deploying under a different domain.

## Links

- [GitHub](https://github.com/AJSANU)
- [LinkedIn](https://www.linkedin.com/in/abhishek-jha-2135b1184/)
- [Technical writing](https://medium.com/@cu.16bcs5007)
- [Email Abhishek](mailto:cu.16bcs5007@gmail.com)
