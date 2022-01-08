var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const AdminService= require("../components/auth/adminService")

passport.use(new LocalStrategy(
  async function(username, password, done) {
    const admin = await AdminService.findByUserName(username)
    console.log(admin)
    if (admin==null)
        return done(null, false, {type: 'error',message: "Invalid username"})
    else {
      const check= await AdminService.validatePassword(admin,password)
      if(admin['User.isBanned'])
        return done(null, false, {type: 'error',message: "Your account is banned"})
      else if (!check)
        return done(null, false, {type: 'error',message: "Incorrect password"})
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