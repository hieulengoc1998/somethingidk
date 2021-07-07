const init = () => {
  view.setActiveScreen('registerScreen')
}

const init_login = () => {
  view.setActiveScreen('loginScreen')
}
changePage = (s) => {
  if(s == true){
    init_login()
  }else{
    init()
  }
}
window.onload = init







