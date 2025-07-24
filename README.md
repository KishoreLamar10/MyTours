My Tours | Full-Stack Tour Booking Application
Welcome to My Tours, a complete web application for discovering and booking exciting tours. This project is built with a full-stack architecture, featuring a secure back-end API using Node.js, Express, and MongoDB, and a server-side rendered front-end using Pug templates.

The application includes robust user authentication, secure payment processing with Stripe, interactive maps with Mapbox, and automated email notifications, making it a comprehensive, real-world project.

[Click me](https://mytours-87mi.onrender.com/)

✨ Key Features
RESTful API: A complete back-end API for managing tours, users, bookings, and reviews.

User Authentication: Secure user signup, login with password hashing (bcryptjs), and password management (reset via email), all handled with JSON Web Tokens (JWT) stored in secure cookies.

Stripe Integration: Seamless and secure credit card payments for tour bookings, handled via Stripe Checkout and confirmed with Stripe Webhooks.

Mapbox Geolocation: Interactive maps on each tour page showing all tour locations.

Server-Side Rendering (SSR): The entire front-end is rendered on the server using Pug templates for fast performance and SEO benefits.

Automated Emails: Users receive automated welcome and password reset emails through a production-ready email service (SendGrid).

Advanced Error Handling: A centralized error handling system to manage operational and programmer errors gracefully.

Security Best Practices: Implements rate limiting, HTTP security headers (Helmet), data sanitization against XSS and NoSQL injection, and parameter pollution prevention.

Ready for Deployment: The project is fully configured and live on Render.
