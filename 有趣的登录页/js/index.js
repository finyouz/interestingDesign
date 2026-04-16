let mouseX = 0;
let mouseY = 0;

// 是否展示密码
let showPassword = false;
// 登录错误
let isLoginError = false;


//document节点
let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password')

let btnLogin = document.querySelector('#btn-login') // 登录按钮

let contentForm = document.querySelector('#content-form')


// 事件

// 邮箱获取焦点
emailInput.addEventListener('focus', () => {
    console.log("邮箱获取焦点");
})


// 邮箱失去焦点
emailInput.addEventListener('blur', () => {
    console.log("blur");
})

//邮箱输入框改变
emailInput.addEventListener('input', () => {
    console.log("input");
})


// 密码框获取焦点
passwordInput.addEventListener('focus', () => {
    console.log("邮箱获取焦点");
})


// 密码框失去焦点
passwordInput.addEventListener('blur', () => {
    console.log("blur");
})

//密码框    输入框改变
passwordInput.addEventListener('input', () => {
    console.log("input");
})


contentForm.addEventListener('submit', () => {
    console.log("form表单");
})

//函数
function calcPupilOffset() {

}


function updateCharacters() {
    const charPurple = document.querySelector('#char-purple')
    const charBlack = document.querySelector('#char-black')
    const charOrange = document.querySelector('#char-orange')
    const charYellow = document.querySelector('#char-yellow')
}

