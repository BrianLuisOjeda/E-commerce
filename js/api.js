
const URLGET = "https://restcountries.eu/rest/v2/all";


$("#selectPaises").prepend(`<select value""></select>`);

$("#selectPaises").click(() => {

    $.get(URLGET,(res, state) => {

        if (state === "success"){
            
            res.forEach(element => {
                
                $("#selectPaises").append(`<option value="${element.name}">${element.name}</option>`)
            });
        }
    })
})

