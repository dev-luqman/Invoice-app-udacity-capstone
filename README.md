## Udacity Capstone Project - Building an Invoicing App
This is an Udacity final (Capstone) Project.
In this application we will be creating an Invoicing App that will basically create an invoice for a user and send email notification after creation.

### Circleci Status Update 
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/dev-luqman/Invoice-app-udacity-capstone/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/dev-luqman/Invoice-app-udacity-capstone/tree/main)

### Application Scope
The main scope of the application is to apply my DevOps ` CICD ` skills to a backend application which involve performing the following in the pipeline:

1. Build a pipeline job with circleci
2. Run/Build Linting, Testing and run Hadolint test to backend applictaion
3. Build Backed and deploy to docker repository
4. Authenticate and Deploy aws eks cluster with nodesGroup using eksctl ` Some few checks/validations along the way `
4. Deploy services and pod to kubernetes ~ ` few checks/validation for update pods update `
5. API Health and Deployment Validation

### Project Scopes
* Creating Backend - using node.js express ` cd backend `  folder
* Creating frontend - using react.js ` cd frontend `  folder
* Creating pipeline - using CircleCi ` cd .circle.ci ` folder
* Creating deploy - using AWS eks 
* Creating monitory - using prometheus server and grafana

You can check [image-capstone](https://github.com/dev-luqman/Invoice-app-udacity-capstone/tree/main/image-capstone-view) directory for review of my pipeline result

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

#### ~ please stay tune and follow more update. ~