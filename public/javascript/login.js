async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        // the following code will automatically take the user to the user dashboard if they are logged in
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  

// route the user to the sign up page if they do not have an account
function handleSignUp() {

    document.location.replace('/signup');

};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('#signupBtn').addEventListener('click', handleSignUp);