const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
//const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "504338627339-fsgjjh8npppgkkq7sjs2gmnah239fch2.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "d1c74fc23036380fd683";
const GITHUB_CLIENT_SECRET = "c44622d187eebdfe6dbce7fb11c64214ac39e01c";

//FACEBOOK_APP_ID = "504338627339-25n87nartovcd0vtcbbptfbd8br75ocs.apps.googleusercontent.com";
//FACEBOOK_APP_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

//passport.use(
  //new FacebookStrategy(
    //{
      //clientID: FACEBOOK_APP_ID,
      //clientSecret: FACEBOOK_APP_SECRET,
      //callbackURL: "/auth/facebook/callback",
    //},
    //function (accessToken, refreshToken, profile, done) {
      //done(null, profile);
    //}
  //)
//);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
