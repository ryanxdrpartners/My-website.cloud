# my-website.cloud

Static five-page site: `index.html`, `services.html`, `work.html`, `about.html` (Approach) and `contact.html`, sharing `styles.css` and `main.js`. No build step.

- `logo/` holds the standalone logo mark as SVG (static and animated).
- The contact form posts to Web3Forms. Set the access key (`WEB3KEY` in the build script, or the hidden `access_key` field in `contact.html`) to switch it on. Submissions go to the inbox set in the Web3Forms account, so no email address appears on the site.
