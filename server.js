const express = require("express");
const app = express();
const cors = require('cors');
port = 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Import routes
const usersRoute = require("./routes/users");
const listsRoute = require("./routes/lists");
const itemsRoute = require("./routes/items");

// Connect to DB
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connection to cloud database established!"))
  .catch((err) => console.log("[ERROR] DB Connection failed", err));

// Middleware
app.use(express.json({limit:"30mb", extended: true}));
app.use(express.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

//Route Middleware
app.use("/users", usersRoute);
app.use("/lists", listsRoute);
app.use("/items", itemsRoute);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// Error Handling
app.use(function errorHandler(err, req, res, next) {
  console.log(err);
  res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
});
