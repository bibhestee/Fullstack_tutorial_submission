# Phonebook Web Application Backend with Express Js

## Installation guide
  ### Install and create server environment for nodejs backend
     npm init 
  ### Install express package
     npm install express 
  ### Install nodemon to automatically restart the server in dev mode
     npm install --save-dev nodemon

## Starting the Server
  ### To start the server, use:
     npm run dev   
  for development mode
  or
     npm start 

## Endpoints

  ### Home Endpoint
  GET '/api/persons' - Get all the contacts from the phonebook

  ### Info Endpoint
  GET /info' - Get information about the contacts and time of request

  ### Single Contact Endpoint
  GET '/api/persons/:id' - Get contact details

  ### Delete Contact Endpoint
  DELETE '/api/persons/:id' - Delete contact details

  ### Create Contact Endpoint
  POST '/api/persons' - Create contact details

  ### Update Contact Endpoint
  PUT '/api/persons/:id' - Update contact details


## Setting Environment variable on fly.io
To set the environment variable on fly servers, run this command:
```
fly secrets set MONGODB_URI='url'
fly secrets set PORT=3000
```

## Handling Errors
If the user is not found on the database either throught the findByID method or findByIDAndUpdate
the method returns null and this error should be properly managed.
Therefore, checking if response is null and setting a status code code of 404 not found will be more
understandable when the error is encountered.
  ### Some of the Error codes used in this application
  - 200 means Success : This code represents any successful request <=> response.
  - 204 means No content : This is used mostly with the DELETE Method.
  - 400 means Bad request: used when the request information is invalid i.e wrong ID or Endpoint
  - 404 means Not found : used when the requested information is not found on the database.
  - 500 means Internal server error : used when the model method raise an exception while connecting with DB.

## Coding Style Check
 ### Uing ESlint - Like pycodestyle(Python) and betty(C)
 To install 
 ```
 npm install eslint --save-dev
 ```
 Then initialize the default configuration
 ```
 npx eslint --init
 ```

[Phonebook](https://phonebook-nodejs.fly.dev/)

Code by - [Bibest](https://github.com/bibhestee)😎
