let profileDetails = document.getElementById("profile");
window.addEventListener("DOMContentLoaded",()=>{
    let userDetails = JSON.parse(localStorage.getItem('userDetaiils'));

    if(userDetails){
        profileDetails.innerHTML =`<h2>Profile</h2>
        <div>Full Name : ${userDetails.name1}</div>
        <div>Email : ${userDetails.email}</div>
        <div>Password : ${userDetails.password}</div>`;
    }
    else{
        window.location.href="index.html"
    }
})

const logoutButton = document.getElementById('log-out');
logoutButton.addEventListener('click', () => {
  // Clear user state from local storage
  localStorage.removeItem('userDetails');
  // Redirect to signup page
  window.location.href = 'index.html';
});