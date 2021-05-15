# workout-tracker

🏋️‍♀️ Track your workouts with this handy workout tracker! 

[Deployed App](https://mysterious-earth-87062.herokuapp.com)

## Technologies Used

🏗 JavaScript - JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.

♻️ Node.js - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

🌎 MongoDB Atlas - MongoDB Atlas is The Easiest Way to Deploy, Operate, and Scale MongoDB in the Cloud in Just a Few Clicks. 

🐿 Mongoose - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

🔖 Morgan - Morgan is an HTTP request logger middleware for node.js.

📦 npm - npm is a package manager for the JavaScript programming language. npm, Inc. is a subsidiary of GitHub, that provides hosting for software development and version control with the usage of Git. npm is the default package manager for the JavaScript runtime environment Node.js.

⚡️ Express - Express is a fast, unopinionated, minimalist web framework for node.

☑️ Git - Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.

⛅️ GitHub - GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.

🛠 Heroku - Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.


## Code Snippet 

~~~
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate({ _id: req.params.id },
    { $push: { exercises: req.body } })
    .then((dbWorkout) => {
      res.send(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
~~~

## Author

🤓 [darrindevs](https://github.com/darrindevs)

