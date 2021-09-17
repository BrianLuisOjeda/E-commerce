$("#theme").on("click", () => {

    if(localStorage.getItem("theme") == "dark"){
        lightTheme()
    }else {
        darkTheme()
    }

})

const darkTheme = () => {

    $(".nav").css("background-color","black")
    $(".nav-link").css("color","white")
    $(".catalogo").css("background-color","black")
    $(".card").css("background-color","black",)
    $(".card-body").css("color","white")
    $(".montoTotal").css("background-color","black")

    localStorage.setItem("theme", "dark")

}

const lightTheme = () => {

    $(".nav").css("background-color","white")
    $(".nav-link").css("color","black")
    $(".catalogo").css("background-color","white")
    $(".card").css("background-color","white",)
    $(".card-body").css("color","black")
    $(".montoTotal").css("background-color","white")

    localStorage.setItem("theme", "light")

    
}