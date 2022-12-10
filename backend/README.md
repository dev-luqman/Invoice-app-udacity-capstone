## Invoice API using Node.js (Express framework)
This is simple node.js application used to create invoice for customers  for their goods and services and send email notification.

### Running the application locally
1. Install Node version 15 upward
2. Clone Repo
3. Create database from mongo atlas and save url in .env file as specified in [sample.env](https://github.com/dev-luqman/Invoice-app-udacity-capstone/blob/main/backend/sample.env)
4. cd into backend directory ` cd backend `
5. Create .env file and update content with [sample.env](https://github.com/dev-luqman/Invoice-app-udacity-capstone/blob/main/backend/sample.env)
6. Install Packages ` npm install `
7. Run Command ` npm run dev ` 
8. Test api status ` localhost:8080 `
9. Result with  status code 200 is fine:
```
{
    msg: 'Updated: Connection successfully',
    msg_location: 'CircleCi Pipeline',
    status: 'ok',
    node_env: development,
    version: `v-local`,
    statusCode: 200,
  }

```