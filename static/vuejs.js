new Vue({
  el:"#loginCard",
  data:{
    status:'staff',
    loginForm:{
      username:'',
      password:''
    }
  },
  methods:{
    userLogin:function() {
      console.log("User:",this.loginForm.username,this.loginForm.password);
      this.loginForm.username = '';
      this.loginForm.password = '';
    }
  }
});

var input = document.getElementById("usernameInput");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("loginBt").click();
    }
});

var input = document.getElementById("passwordInput");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("loginBt").click();
    }
});
