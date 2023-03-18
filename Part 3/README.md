Exercises 3.1 - 2.5 from Fullstackopen.com

To start a backend development

Install the initial package for nodejs
` npm init `

Installing express module
` npm install express `

Modify the script in the package.json file
` 'start': 'node index.js' `


Using Nodemon for backend automatic restart
 - Install nodemon as dev dep
    ` npm install --save-dev nodemon `
    nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.
 - Modify the script in package.json file
    ` "nodemon index.js" `

 - Start the server in development mode with nodemon running
    ` npm run dev `


For easy testing of backend server using vscode, install the REST client extension
 - Create a request folder in the root directory
 - Run a snippet request `Get url`
 - Click the `Send Request` to see the response