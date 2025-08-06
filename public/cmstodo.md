# Tutorial: Building a Simple Todo API with Node.js, Express, and MongoDB

Welcome! This guide will walk you through creating a complete Todo list application backend using Node.js in a single file. We will use the Express framework to build our API and the Mongoose library to communicate with a MongoDB database.

By the end of this tutorial, you will have built an application with five API endpoints to manage your todos:
1.  **Get All Todos**
2.  **Get a Single Todo**
3.  **Create a Todo**
4.  **Edit a Todo**
5.  **Delete a Todo**

## Prerequisites

Before you start, make sure you have the following installed:
*   **Node.js**: You can download it from [nodejs.org](https://nodejs.org/). This will also install `npm` (Node Package Manager), which is used to manage project dependencies.
*   **MongoDB**: You need a running MongoDB database. You can install it locally or use a cloud service like MongoDB Atlas.
*   **A Code Editor**: A good editor like [Visual Studio Code](https://code.visualstudio.com/) is recommended.
*   **An API Testing Tool**: We will use `curl` in this guide, but you can also use a graphical tool like [Postman](https://www.postman.com/downloads/).

---

## Step 1: Setting Up Your Project

First, let's create a folder for our project and initialize it with `npm`.

1.  **Create a project directory** and navigate into it in your terminal:
    ```bash
    mkdir single-file-todo-app
    cd single-file-todo-app
    ```

2.  **Initialize a Node.js project**: This command creates a `package.json` file, which keeps track of our project's details and dependencies. The `-y` flag accepts all the default settings.
    ```bash
    npm init -y
    ```

3.  **Install dependencies**: We need two main packages: `express` to create our web server and `mongoose` to interact with our MongoDB database.
    ```bash
    npm install express mongoose
    ```
    This will create a `node_modules` folder where the downloaded packages are stored.

4.  **Create the application file**:
    ```bash
    touch app.js
    ```

Your project is now set up! Let's start writing the code.

---

## Step 2: Writing the Application Code

Open the `app.js` file in your code editor. We will build the application piece by piece.

### Part 1: Loading Dependencies

Just like `import` in Python, we use `require` in Node.js to import the packages we installed.

```javascript
const express = require('express');
const mongoose = require('mongoose');
```

### Part 2: Initial Application Setup

Now, let's configure our application.

```javascript
// Create an Express application
const app = express();

// Define the port the server will run on. 
// It will use port 3001, or another port if specified in the environment.
const port = process.env.PORT || 3001;

// Define the connection string for our MongoDB database.
// This connects to a local database named 'todo-cms-single-file'.
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo-cms-single-file';
```

### Part 3: Middleware

Middleware functions are tasks that run in the middle, between receiving a request and sending a response. We need one to help our app understand JSON.

```javascript
// This line adds the express.json() middleware.
// It parses incoming requests with JSON payloads, making the data available on `req.body`.
app.use(express.json());
```

### Part 4: Defining the Data Structure (Schema & Model)

We need to tell our application what a "Todo" item looks like. This is like defining a class or a data structure in other languages.

```javascript
// A Mongoose Schema defines the structure of the documents within a collection.
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // The title is mandatory
  },
  description: {
    type: String,
    required: true, // The description is mandatory
  },
  completed: {
    type: Boolean,
    default: false, // By default, a new todo is not completed
  },
});

// A Mongoose Model provides an interface to the database for creating, querying, etc.
// 'TodoSingleFile' will be the name of our model. Mongoose will automatically look for the
// plural, lowercased version of this name in the database (i.e., 'todosinglefiles').
const Todo = mongoose.model('TodoSingleFile', todoSchema);
```

### Part 5: Building the API Endpoints (The Routes)

This is where we define the five API endpoints for managing our todos.

#### 1. GET All Todos
This endpoint fetches all todo items from our database.

```javascript
app.get('/todos', async (req, res) => {
  try {
    // Todo.find() gets all documents from the Todo collection.
    const todos = await Todo.find();
    // res.json() sends the array of todos back to the client as JSON.
    res.json(todos);
  } catch (err) {
    // If an error occurs, send a 500 Internal Server Error status with the error message.
    res.status(500).json({ message: err.message });
  }
});
```

#### 2. CREATE a New Todo
This endpoint creates a new todo item.

```javascript
app.post('/todos', async (req, res) => {
  // Create a new Todo object based on the data sent in the request body.
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    // todo.save() saves the new document to the database.
    const newTodo = await todo.save();
    // Send a 201 Created status with the newly created todo item.
    res.status(201).json(newTodo);
  } catch (err) {
    // If validation fails or another error occurs, send a 400 Bad Request status.
    res.status(400).json({ message: err.message });
  }
});
```

#### 3. GET a Single Todo
This endpoint retrieves one specific todo by its unique ID.

```javascript
app.get('/todos/:id', async (req, res) => {
  try {
    // req.params.id gets the 'id' from the URL (e.g., /todos/12345).
    // Todo.findById() searches for a single document by its _id field.
    const todo = await Todo.findById(req.params.id);
    if (todo == null) {
      // If no todo is found, return a 404 Not Found error.
      return res.status(404).json({ message: 'Cannot find todo' });
    }
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
```

#### 4. UPDATE a Todo
This endpoint modifies an existing todo item.

```javascript
app.put('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo == null) {
      return res.status(404).json({ message: 'Cannot find todo' });
    }

    // Update the todo's fields only if new values were provided in the request.
    if (req.body.title != null) {
      todo.title = req.body.title;
    }
    if (req.body.description != null) {
      todo.description = req.body.description;
    }
    if (req.body.completed != null) {
      todo.completed = req.body.completed;
    }

    // Save the updated todo item back to the database.
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
```

#### 5. DELETE a Todo
This endpoint removes a todo item from the database.

```javascript
app.delete('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo == null) {
      return res.status(404).json({ message: 'Cannot find todo' });
    }

    // todo.deleteOne() removes the document from the database.
    await todo.deleteOne();
    res.json({ message: 'Deleted todo' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
```

### Part 6: Database Connection and Starting the Server

Finally, we connect to MongoDB and start our Express server.

```javascript
// Connect to the MongoDB database using the URI we defined earlier.
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // This block runs if the connection is successful.
    console.log('Connected to Database');
    
    // We only start the server after the database connection is established.
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
      console.log(`You can test the API at http://localhost:${port}/todos`);
    });
  })
  .catch((error) => {
    // This block runs if the connection fails.
    console.error('Database connection error:', error);
  });
```

---

## Step 3: Running and Testing Your Application

Your `app.js` file is now complete!

1.  **Make sure your MongoDB server is running.**

2.  **Run the application** from your terminal:
    ```bash
    node app.js
    ```
    You should see the following output:
    ```
    Connected to Database
    Server is running on port: 3001
    You can test the API at http://localhost:3001/todos
    ```

3.  **Test the API endpoints** using `curl` or Postman.

    *   **Create a Todo:**
        ```bash
        curl --location --request POST 'http://localhost:3001/todos' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "title": "Learn Node.js",
            "description": "Finish this tutorial and understand the basics."
        }'
        ```
        *(Copy the `_id` from the response for the next steps!)*

    *   **Get All Todos:**
        ```bash
        curl --location --request GET 'http://localhost:3001/todos'
        ```

    *   **Get a Single Todo (replace `<YOUR_TODO_ID>`):**
        ```bash
        curl --location --request GET 'http://localhost:3001/todos/<YOUR_TODO_ID>'
        ```

    *   **Update a Todo (replace `<YOUR_TODO_ID>`):**
        ```bash
        curl --location --request PUT 'http://localhost:3001/todos/<YOUR_TODO_ID>' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "completed": true
        }'
        ```

    *   **Delete a Todo (replace `<YOUR_TODO_ID>`):**
        ```bash
        curl --location --request DELETE 'http://localhost:3001/todos/<YOUR_TODO_ID>'
        ```

Congratulations! You have successfully built and tested a complete Todo API. You can now use this foundation to build more complex applications.

# Todays code (06/8/2025 - wed)

```javascript
const express = require('express');
const mongoose = require('mongoose');

// --- Configuration ---
const app = express();
const port = process.env.PORT || 3000; // Using a different port to avoid conflict if server.js is running
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo-cms-single-file';

// --- Middleware ---
// This line allows our app to understand JSON formatted request bodies
app.use(express.json());

// --- Mongoose Schema and Model ---
// This defines the structure of our 'Todo' documents in the MongoDB collection.
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// The model is a constructor that allows us to interact with the 'todos' collection.
const Todo = mongoose.model('TodoSingleFile', todoSchema);


// --- API Routes and Controllers ---

// 1. GET all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. GET a single todo by ID
app.get('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo == null) {
      return res.status(404).json({ message: 'Cannot find todo' });
    }
    res.json(todo);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// 3. CREATE a new todo
app.post('/todos', async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 4. UPDATE a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo == null) {
      return res.status(404).json({ message: 'Cannot find todo' });
    }

    if (req.body.title != null) {
      todo.title = req.body.title;
    }
    if (req.body.description != null) {
      todo.description = req.body.description;
    }
    if (req.body.completed != null) {
      todo.completed = req.body.completed;
    }

    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 5. DELETE a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo == null) {
      return res.status(404).json({ message: 'Cannot find todo' });
    }

    // In Mongoose v6, `remove()` is deprecated. Use `deleteOne()` instead.
    await todo.deleteOne();
    res.json({ message: 'Deleted todo' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// --- Database Connection ---
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to Database');
    // --- Start the Server ---
    // We only start the server after the database connection is successful
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
      console.log(`You can test the API at http://localhost:${port}/todos`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });



```