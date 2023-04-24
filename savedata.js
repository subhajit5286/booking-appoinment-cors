var form=document.getElementById('addForm')
var itemList = document.getElementById('items');
var i=0;
// Form submit event
form.addEventListener('submit', saveItem);
// Delete event
itemList.addEventListener('click', removeItem);
//edit event
//itemList.addEventListener('click', editItem);


window.addEventListener("DOMContentLoaded",()=>{
  axios.get('http://localhost:3000/admin/users/')
  .then((response)=>{
    console.log(response.data.allUsers)
    for(var i=0;i<response.data.allUsers.length;i++){
      console.log(response.data.allUsers[i].id)
      var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    li.id=response.data.allUsers[i].id;
    // Add text node with input value
    li.appendChild(document.createTextNode(response.data.allUsers[i].name));
    li.appendChild(document.createTextNode('  '));
    li.appendChild(document.createTextNode(response.data.allUsers[i].email));
    li.appendChild(document.createTextNode('  '));
    li.appendChild(document.createTextNode(response.data.allUsers[i].phoneNumber));
    // Create del button element
    var deleteBtn = document.createElement('button');
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
  
    // Append button to li
    li.appendChild(deleteBtn);
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-warning btn-sm float-right warning';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    // Append li to list
    itemList.appendChild(li);
    }
  })
  .catch((err)=>{
    console.log(err)
  })
})
// save item
function saveItem(e){
  e.preventDefault();
  var newName = document.getElementById('name').value;
  var newEmail = document.getElementById('email').value;
  var newphoneNumber = document.getElementById('phoneNumber').value;
  
  
  console.log(newName);
  console.log(newEmail);
  //localStorage.setItem("Name",newName);
  //localStorage.setItem("E-mail",newEmail);
  let form = {};
form.name = newName;
form.email = newEmail;
form.phoneNumber=newphoneNumber;
axios.post('http://localhost:3000/admin/add-users/',form)
.then((res)=>{
console.log(res)
})
.catch((err)=>{
console.log(err)
})
location.reload()
}
//remove item
// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      var idz=li.id;
      console.log(idz)
      itemList.removeChild(li);
      axios.post('http://localhost:3000/admin/delete-user/'+idz)
      .then((res)=>{
          console.log(res)
        })
      .catch((err)=>{
           console.log(err)
      })

    }
  }
}



