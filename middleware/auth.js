const User = require('../database/models/User')

// checks if user is registered
module.exports = (req, res, next) => {
  // fetch user from database
  User.findById(req.session.userId, (error, user) => {
    if (error || !user) {
      return res.redirect('/')
    }

    next()
  })
}