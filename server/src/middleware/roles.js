isAdmin = (req, res, next) => {
  const role = req.user.role;
  if (role !== 'admin') {
    return res.sendStatus(401);
  }
  next();
};

// Exports
module.exports = {
  isAdmin
};
