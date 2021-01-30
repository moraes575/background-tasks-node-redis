# Background tasks with Node.js and Redis
A project of tasks running in background with Node.js and Redis developed during the Bootcamp of Node.js Developer of the platform [Digital Innovation One](https://digitalinnovation.one)

## How to  Run

1. Install project dependencies
```
npm install
```
2. Install and configure Redis or create and upload a Docker:
```
docker run --name redis -p 6379:6379 -d -t redis:alpine
```
3. Create the environment variables (.env file)

4. Run queue thread
```
npm run queue
```
5. Run main thread (Express)
```
npm start
```

## Technology Stacks
  - JavaScript
  - Express
  - Docker
  - Redis
