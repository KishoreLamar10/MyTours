Natours | Tour Booking Application
Welcome to Natours, a full-stack web application for discovering and booking exciting nature tours. This project is built with a complete back-end API using Node.js and Express, and a server-side rendered front-end using Pug templates. It features secure user authentication, payment processing with Stripe, and interactive maps with Mapbox.

✨ Key Features
RESTful API: A complete back-end API for managing tours, users, bookings, and reviews.

User Authentication: Secure signup, login, and password management using JSON Web Tokens (JWT) and secure cookies.

Stripe Integration: Seamless and secure credit card payments for tour bookings, handled through Stripe Checkout.

Mapbox Geolocation: Interactive maps displaying tour locations and starting points.

Server-Side Rendering (SSR): Front-end views are rendered on the server using Pug templates for fast initial page loads.

Advanced Error Handling: Centralized error handling for operational and programmer errors.

Security Best Practices: Implements security measures such as rate limiting, HTTP security headers (Helmet), data sanitization (against XSS and NoSQL injection), and parameter pollution prevention.

Ready for Deployment: Includes a Vercel configuration file for easy, serverless deployment.

🛠️ Technologies Used
Back-End: Node.js, Express.js, MongoDB, Mongoose

Front-End: Pug (Server-Side Templating), Vanilla JavaScript

Authentication: JSON Web Tokens (JWT), bcryptjs

Payments: Stripe

Mapping: Mapbox

Email: Nodemailer, Mailtrap

Bundling: Parcel
