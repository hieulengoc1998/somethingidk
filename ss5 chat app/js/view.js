const view = {}
view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case 'registerScreen':
      document.getElementById('app').innerHTML = components.registerScreen
      const registerForm = document.getElementById("register-form")
       registerForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const data = {
          firstName : registerForm.firstName.value,
          lastName : registerForm.lastName.value,
          email : registerForm.email.value,
          password : registerForm.password.value,
          comfirmPassword : registerForm.comfirmPassword.value
        }
        controller.register(data)
      })
      break;
    case 'loginScreen':
      document.getElementById('app').innerHTML = components.loginScreen
      // const loginForm = document.getElementById("login-form")
      // loginForm.addEventListener('submit', (event) => {
      //   event.preventDefault()
      //   const data = {
      //     email : loginForm.email.value,
      //     password : loginForm.password.value,
      //   }
      //   controller.login(data)
      // })
      break;
  }
}