## Udacity Capstone Project - Building an Invoicing App
This is an Udacity final (Capstone) Project.
In this application we will be creating an Invoicing App that will basically create an invoice for a user and send email notification after creation.

### Circleci Status Update 
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/dev-luqman/Invoice-app-udacity-capstone/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/dev-luqman/Invoice-app-udacity-capstone/tree/main)

### Application Scope
The main scope of the application is to apply my DevOps ` CICD ` skills to a backend application which involve the performing the following in the pipeline:

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

#### ~ please stay tune and follow more update. ~