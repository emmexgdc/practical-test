# practical-test

## Task 1: MongoDB Connection Fix for Render Deployment
I Diagnosed and fixed a MongoDB connection issue in a Node.js backend deployed on Render. The solution included verifying the MongoDB Atlas connection string, configuring IP whitelisting, setting environment variables correctly in Render, implementing proper connection error handling, and restarting the service.

## Task 2: CI/CD Pipeline Configuration
I Created a GitHub Actions workflow file to automate testing and deployment of a Node.js backend to Render. The workflow runs tests using Node.js 18 and only deploys to Render if the tests pass and the push is to the main or master branch.

## Task 3: Redis Caching Implementation
I Implemented Redis caching for a Node.js API endpoint to improve performance by reducing database queries. The solution includes creating a Redis client, checking for cached data before querying the database, storing results in Redis with a 5-minute expiration time, and proper error handling.
