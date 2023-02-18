    
    const closeMenu = document.getElementById("menu-close")
    const openMenu = document.getElementById("menu-open")
    const menu = document.getElementById("menu")

    const authContainer = document.getElementById("auth-form-container")
    const closeAuthLog = document.getElementById("close-auth-log")
    const closeAuthReg = document.getElementById("close-auth-reg")

    const openLogin = document.getElementById("openLogin")
    const openRegister = document.getElementById("openRegister")

    const loginForm = document.getElementById("login-form")
    const registerForm = document.getElementById("register-form")

    const changeToLog = document.getElementById("change-to-log")
    const changeToReg = document.getElementById("change-to-reg")

    openMenu.addEventListener("click", () => {
        menu.classList.add("opened")
    })
    closeMenu.addEventListener("click", () => {
        menu.classList.remove("opened")
        
    })


    openLogin.addEventListener("click", () => {
        loginForm.classList.add("opened-auth")
        authContainer.classList.add("opened-container")
    })

    openRegister.addEventListener("click", () => {
        registerForm.classList.add("opened-auth")
        authContainer.classList.add("opened-container")
    })

    closeAuthLog.addEventListener("click", () => {
        loginForm.classList.remove("opened-auth")
        authContainer.classList.remove("opened-container")
    })

    closeAuthReg.addEventListener("click", () => {
        registerForm.classList.remove("opened-auth")
        authContainer.classList.remove("opened-container")
    })

    changeToLog.addEventListener("click", () => {
        registerForm.classList.remove("opened-auth")
        loginForm.classList.add("opened-auth")
    })

    changeToReg.addEventListener("click", () => {
        registerForm.classList.add("opened-auth")
        loginForm.classList.remove("opened-auth")
    })

