const User = require('../database/models/User')

// after registering, redirects to home page
module.exports = (req, res, next) => {
  if (req.session.userId) {
    return res.redirect('/')
  }

  next()
}