const b = document.getElementById('b');

b.addEventListener('click', function onClick() {
  b.style.backgroundColor = 'red';
  b.style.color = 'white';
});


function validate(){
  var username = getComputedStyle('form1Example1');
  var password = getElementById('form1Example13');

  if(username == true && password == true)
  {
    alert("logic successfully");
  }
  else{
    alert("failed");
  }
}