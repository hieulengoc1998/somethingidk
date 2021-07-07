const init = () => {
  view.setActiveScreen('registerScreen')
}

const init_login = () => {
  view.setActiveScreen('loginScreen')
}


const changePage = (s) => {
  if(s == true){
    init_login()
  }else{
    init()
  }
}
window.onload = init

const showPassword = () => {
  let pw = document.getElementById('password-input')
  if(pw.type === "password"){
    pw.type = "text"
  }else{
    pw.type = "password"
  }
}






