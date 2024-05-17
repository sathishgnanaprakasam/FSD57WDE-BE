NodeJS:

- a JavaScript runtime built on Chrome's V8 JavaScript engine.
- Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
- Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
- a dynamically typed language.

Npm Packages:

- Built-in Modules
  - fs: File System
  - http: HTTP
  - url: URL
  - path: Path
- Third Party Modules
  - Express: Web Framework
  - Mongoose: MongoDB Object Modeling
  - MongoDB: MongoDB Driver
  - Socket.io: Real-time Engine
  - Axios: HTTP Client
  - Nodemon: Auto Restart
  - Nodemailer: Email
  - Multer: File Upload
  - Bcrypt: Password Hashing
  - JWT: JSON Web Token
  - Morgan: Logger
- Custom Modules
  - middleware: Middleware
  - config: Configuration
  - routes: Routes
  - models: Models
  - controllers: Controllers

collection: topics

data: 

[
  {
    "title": "NodeJS",
    "description": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    "content": "Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.",
  },
  {
    "title": "Npm Packages",
    "description": "Npm packages are built-in, third party, and custom modules.",
    "content": "Built-in modules include fs, http, url, and path. Third party modules include Express, Mongoose, MongoDB, Socket.io, Axios, Nodemon, Nodemailer, Multer, Bcrypt, JWT, and Morgan. Custom modules include middleware, config, routes, models, and controllers.",
  },
  {
    "title": "Express",
    "description": "Express is a web framework for Node.js.",
    "content": "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
  },
  {
    "title": "Mongoose",
    "description": "Mongoose is a MongoDB object modeling tool.",
    "content": "Mongoose provides a straight-forward, schema-based solution to model your application data.",
  }
]

collection: tasks

[
  {
    "name": "Install NodeJS",
    "description": "Install Node.js on your computer.",
    "status": "Complete",
    "due": "2021-01-01",
    "topicId": ObjectId("6647551dabf8dc9b4a6589e7")
  },
  {
    "name": "Create a NodeJS Project",
    "description": "Create a new Node.js project using npm.",
    "status": "In Progress",
    "due": "2021-01-15",
    "topicId": ObjectId("6647551dabf8dc9b4a6589e7")
  },
  {
    "name": "Install Express",
    "description": "Install the Express web framework in your Node.js project.",
    "status": "Pending",
    "due": "2021-01-30",
    "topicId": ObjectId("6647551dabf8dc9b4a6589e9")
  },
  {
    "name": "Create a Route",
    "description": "Create a new route in your Express application.",
    "status": "Pending",
    "due": "2021-02-15",
    "topicId": ObjectId("6647551dabf8dc9b4a6589e9")
  }
]