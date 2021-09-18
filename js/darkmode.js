$("#theme").on("click", () => {

    if(localStorage.getItem("theme") == "dark"){
        lightTheme()
    }else {
        darkTheme()
    }

})

const darkTheme = () => {

    
    $(".nav").css("background-color","#1c1c1c")
    $(".nav-link").css("color","white")
    $(".catalogo").css("background-color","#141414")
    $(".card").css("background-color","black",)
    $(".card-body").css("color","white")
    $(".montoTotal").css("background-color","black")
    $("#theme").removeClass("btn-outline-dark")
    $("#theme").addClass("btn-outline-light")
    $(".card").css("background-color", "#1c1c1c")
    $(".carrito").css("background-color", "#1c1c1c")
    $(".table").css("background-color", "#346751")
    $("th").css("color", "white")
    $("td").css("color", "white",
                "background-color", "#346751"
    )

    localStorage.setItem("theme", "dark")

}

const lightTheme = () => {

    $(".nav").css("background-color","white")
    $(".nav-link").css("color","black")
    $(".catalogo").css("background-color","white")
    $(".card").css("background-color","white",)
    $(".card-body").css("color","black")
    $(".montoTotal").css("background-color","white")
    $("#theme").removeClass("btn-outline-light")
    $("#theme").addClass("btn-outline-dark")
    $(".carrito").css("background-color", "white")
    $(".table").css("background-color", "#346751")
    $("th").css("color", "white")
    $("td").css("color", "white",
                "background-color", "#346751"
    )

    localStorage.setItem("theme", "light")

    
}
