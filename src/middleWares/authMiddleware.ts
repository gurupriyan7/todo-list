const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const userModel = require('../model/userModel/userModel')

// User-Authorization
const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get-token-from-header
      token = req.headers.authorization.split(' ')[1]

      // Verify-token
      const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET)

      // Get-user-from-the-token
      req.user = await userModel.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log('error', error)
      res.status(401)
      throw new Error('Not Authroized')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Not Authorized,No token')
  }
})

// AuthRole
const authRole = asyncHandler(async (req, res, next) => {
  console.log('token', req.user)
  if (req.user.role !== process.env.ROLE_ADMIN) {
    res.status(401)
    throw new Error('Not Allowed')
  }
  next()
})
module.exports = { protect, authRole }
