 //登录页面js
 const signInBtn = document.getElementById("signIn");
  const signUpBtn = document.getElementById("signUp");
  const fistForm = document.getElementById("form1");
  const secondForm = document.getElementById("form2");
  const container = document.querySelector(".container");
 
  //移除signInBtn事件句柄
  signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });
  //向signUpBtn添加事件句柄
  signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });
  fistForm.addEventListener("submit", (e) => e.preventDefault());
  secondForm.addEventListener("submit", (e) => e.preventDefault());
