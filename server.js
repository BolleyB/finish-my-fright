const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const logger = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

require("dotenv").config();
require("./config/database");
require("./config/passport");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const storiesRouter = require("./routes/stories");
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

// Middleware to set currentPage constiable
app.use(function (req, res, next) {
  // Extract the path from the request URL
  const path = req.path;

  // Set currentPage based on the path
  let currentPage;
  if (path === "/") {
    currentPage = "home";
  } else if (path === "/stories/new") {
    currentPage = "create";
  } else if (path === "/stories") {
    currentPage = "stories";
  } else {
    currentPage = "other"; // Set to 'other' if path doesn't match any known routes
  }

  // Set currentPage in locals to make it available in templates
  res.locals.currentPage = currentPage;

  // Call the next middleware
  next();
});

// Route handlers
app.use("/", indexRouter);
app.use("/stories", storiesRouter);
app.use("/users", usersRouter);
app.use("/", require("./routes/chapters"));
app.use("/", require("./routes/comments"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
