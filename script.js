function saveSignup(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const msg = document.getElementById('signupMsg');
  msg.textContent = `Thank you, ${name}. You are added to the Film Link founders list as: ${role}.`;
  e.target.reset();
}
