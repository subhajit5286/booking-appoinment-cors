const User = require('../models/user');

exports.getAddUser = (req, res, next) => {
  res.render('admin/add-user', {
    pageTitle: 'Add Product',
    path: '/admin/add-users',
    editing : false
  });
};

exports.postAddUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  User.create({
    name : name,
    email : email,
    phoneNumber : phoneNumber
  })
  .then(result =>{
    res.status(200);
  })
  .catch(err => {
    res.status(500).json({ error: err})
  })
  //res.redirect('/admin/users');
};

exports.getUsers = (req, res, next) => {
  User.findAll()
  .then(users=>{
    res.status(200).json({allUsers: users})
  })
  .catch(err => res.status(500).json({error: err}));
};

exports.postDeleteUser = async (req, res, next) => {
  const prodId = req.params.id;
 await User.findByPk(prodId)
  .then(users =>{
   return users.destroy()
})
.then(result =>{
  res.status(200)
})
.catch(err => res.status(500).json({error: err}));
//res.redirect('/admin/users');
 
};

