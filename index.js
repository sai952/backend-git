const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();

app.use(
  cookieSession({ name: "session", keys: ["saikat"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    //origin: "http://localhost:3000",
    origin:"https://frontswasank.herokuapp.com",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
var PORT = process.env.PORT || 4500;
app.use("/auth", authRoute);

// app.listen("5000", () => {
//   console.log("Server is running!");
// });
app.listen(PORT, () => console.log('EXPRESS Server Started at Port No: '+`${PORT}`));