const controller = {}
controller.register = (data) => {
  if(data.firstName ===''){
    document.getElementById('first-name-error').innerText = 'please input first name'
  }else{
    document.getElementById('first-name-error').innerText = ''
  }
   if (data.lastName ==='') {
    document.getElementById('last-name-error').innerText = 'please input last name'
  }else{
    document.getElementById('last-name-error').innerText = ''
  }
  if(data.email===''){
    document.getElementById('email-error').innerText='please input email'
  }else{
    document.getElementById('email-error').innerText=''
  }
  if(data.password===''){
    document.getElementById('password-error').innerText='please input password'
  }else{
    document.getElementById('password-error').innerText=''
  }
  if(data.confirmPassword===''){
    document.getElementById('confirmPassword-error').innerText='please input confirmPassword'
  }else{
    document.getElementById('confirmPassword-error').innerText=''
  }
}
