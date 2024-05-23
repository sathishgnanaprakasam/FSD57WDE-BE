Backend Application:

1. Create an empty folder and open it in your code editor (VS Code).
2. Open the terminal in the VS Code.
3. Run the following command to create a package.json file:

```
npm init -y
```

4. Install the express package:

```
npm install express
```

Install the nodemon package:

```
npm install nodemon --save-dev
```

5. Create a new file named index.js and add the following code:

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

6.Update the scripts in the package.json file:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

7. Run the following command to start the server:

```
npm run dev
```

8. Open your browser and go to http://localhost:3000 to see the "Hello World" message.

9. Enable git in your project:

```
git init
```

10. Create a .gitignore file and add the following code:

```
node_modules
package-lock.json
```

11. Create a readme.md file and add the project setup instructions.

12. Create a new repository on GitHub and copy the repository URL.

13. Add the remote repository URL to your local repository:

```
git remote add origin <repository-url>
```

14. Add the changes to the staging area:

```
git add .
```

15. Commit the changes:

```
git commit -m "Initial commit"
```

16. Push the changes to the remote repository:

```
git push -u origin master
```

/register endpoint
Frontend > user provides details [username, password, email] > clicks register button
Backend > receives the details [username, password, email] > saves the details in the database

/login endpoint
Frontend > user provides details [username, password] > clicks login button
Backend > receives the details [username, password] > checks if the details are correct > sends a response [success or failure] > if success, set a httpOnly cookie with the token in the response > the cookie will then be set in the browser

If the user has already logged in or whenever logs in fresh, the browser will have the cookie with the token.
The token has details like the user id, user name, and the expiry date.

for futher requests,

Frontend > User is in the dashboard page > clicks on the profile page > We need the data of the user > make an api call to the backend with the token in the cookie
Backend > receives the request with the token > verifies the token > check if the token is valid and not expired > if valid, check who has sent the request > extract the user id from the token > using the token, it will get the user details from the database > sends the user details as a response

bcrypt - to hash the password (encrypt the password to store it securely in the database)
jsonwebtoken - to generate the token(when the user logs in, a token will be generated and sent to the user) (so that the user can send the token in the header for further requests)
morgan - to log the requests in the console
mongoose - to interact with the MongoDB database
dotenv - to store the environment variables
cors - to enable cross-origin resource sharing
cookie-parser - to parse the cookies in the request
express - to create the server and manage the routes(because the nodejs server is low-level, and it will be difficult to manage the routes)
nodemon - to restart the server automatically when there are changes in the code

## Job Portal Application

## Features

### Public Routes - No Authentication Required

- [x] User Registration
- [x] User Login
- [ ] View all Jobs

### Private Routes - Authentication Required

User Dashboard

- [x] User Logout
- [x] User Profile
- [x] Update User Profile
- [x] Delete User Profile
- [ ] Apply for a Job
- [ ] View Applied Jobs

Admin Dashboard

- [ ] View all Users
- [ ] Add a Company
- [ ] View all Companies
- [ ] Update a Company
- [ ] Delete a Company
- [ ] Add a Job
- [ ] View all Jobs
- [ ] Update a Job
- [ ] Delete a Job
- [ ] View all Applications

checkAuth >

- receive the request
- extract the token from the request header cookie
  - check if the token is present
    - if not present, send a response with a message "Unauthorized"
    - if the token is present, verify the token
      - decode the token using jwt.verify
        - decoded token will now have the object with id, username, name
        - attach the user id to the request object
        - call the next middleware

getUser>

- receive the request
- extract the user id from the request object
- find the user in the database using the user id
- if the user is not found, send a response with a message "User not found"
- if the user is found, attach the user object to the response object
- send the response
