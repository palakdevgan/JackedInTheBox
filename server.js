// express mysql2 sequelize nodemon dotenv bcrypt
// todo use momentjs to show user what workout they did today/ what workout they should do on a specific day

//importing
const express = require("express");

// const routes = require("./routes");
// const sequelize = require("./config/connection");

// instantuate app and get port
const app = express();
const PORT = process.env.PORT || 3001;

// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes for directing web flow
// app.use(routes);

// any other route
// app.use((req, res) => {
//   res.status(404).end();
// });

// force true means, if there area any changes, update and re-run database changes.
// sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => {
  console.log(`Backend Server Live on ${PORT}`);
});
// });
