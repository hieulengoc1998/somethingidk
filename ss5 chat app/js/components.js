const components = {}
components.registerScreen = `
<div class="register-container">
  <div class="aside-right">
    <div class="header">
      <h3>XTP Chat</h3>
    </div>
    <form id="register-form">
      <div class="input-name">
        <div class="input-wrapper">
          <input type="text" placeholder="enter first name" name="firstName">
          <div class="error" id="first-name-error"></div>
        </div>
        <div class="input-wrapper">
          <input type="text" placeholder="enter last name" name="lastName">
          <div class="error" id="last-name-error"></div>
        </div>
      </div>
      <div class="input-wrapper">
        <input type="email" placeholder="Email" name="email">
        <div class="error" id="email-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" placeholder="password" name="password">
        <div class="error" id="password-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" placeholder="comfirm Password" name="comfirmPassword">
        <div class="error" id="confirm-password-error"></div>
      </div>
      <div class="form-action">
        <span id="redirect-to-login" onclick="changePage(true)">
          Already have an account ? Login 
        </span>
        <button class="btn" id = "btn-register" type="submit">Register</button>
      </div>
    </form>
  </div>
</div>
`
components.loginScreen = `
<form class="login-form">
<div class="center-container">
  <div class="header">
    <h3>XTP Chat</h3>
  </div>
  <div class="login-details">
    <input class="input-wrapper" id="email-input" type="email" placeholder="enter your email here" name="email" !required>
    <input class="input-wrapper" id="password-input" type="password" placeholder="enter your password here" name="password">
  </div>
  <div class="forgot-password">
    <p>Forgot your password?</p>
  </div>
  <div class="login-btn">
    <button type="submit" class="btn-login" id="btn-login">Log in</button>
  </div>
  <div class="sign-up">
    <p>Sign up?</p>
  </div>
</div>
</form>
`