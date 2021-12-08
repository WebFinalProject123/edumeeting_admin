var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const AdminService= require("../components/auth/adminService")

passport.use(new LocalStrategy(
  async function(username, password, done) {
    const admin = await adminService.findByUserName(username)
    console.log(admin)
    if (!admin)
        return done(null, false, {message: "Invalid username"})
    if (!adminService.validatePassword(admin,password)){
      return done(null, false, {message: "Incorrect password"})
    }
    return done(null, admin);
  }
));
passport.serializeUser(function(admin, done) {
  done(null, {username: admin['User._userName'], 
              firstName: admin['User._firstName'],
              lastName: admin['User._lastName'],
              phone: admin['User._phone'],
              email: admin['User._email'],
              address: admin['User._address'],
              avatar: admin['User._avatar']});
});

passport.deserializeUser( function(admin, done) {
  done(null, admin); 
});
module.exports=passport