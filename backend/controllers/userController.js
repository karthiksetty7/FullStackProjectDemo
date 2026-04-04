const db = require('../config/db')

exports.getUsers = (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) return res.json(err)
    res.json(result)
  })
}

exports.addUser = (req, res) => {
  const {name, email} = req.body

  db.query(
    'INSERT INTO users (name,email) VALUES (?,?)',
    [name, email],
    (err, result) => {
      if (err) return res.json(err)
      res.json(result)
    },
  )
}
