## Invoice API using Node.js (Express framework)
This is simple node.js application used to create invoice for customers  for their goods and services and send email notification.


### Running the application locally
1. Install Node version 15 upward
2. Clone Repo
3. cd into backend directory ` cd backend `
4. Create .env file and update content with [sample.env](https://github.com/dev-luqman/Invoice-app-udacity-capstone/blob/main/backend/sample.env)
5. Install Packages ` npm install `
6. Run Command ` npm run dev ` 
7. Test api status ` localhost:8080/api/status `
8. Result with  status code 200 is fine:
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