async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      // NOTE: we using await, we can assign the result of the promise to a variable. For example, const response = await fetch();. This way, we don't need to use catch() or then() to tell the code what to do after the Promise completes
      // NOTE: by using async and await, we can add error handling by using the .ok property on the response object  
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      
      
      // check the response status
      if (response.ok) {
          console.log('Success');
      } else {
          alert(response.statusText)
      }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

