
const URLGET = "https://api.mercadolibre.com/countries#json";

$("#selectPaises").click(() => {

    $.get(URLGET,(res, state) => {

        if (state === "success"){
            
            res.forEach(element => {
                
                $("#selectPaises").append(`<option value="${element.name}">${element.name}</option>`)
            });
        }
    })
})

