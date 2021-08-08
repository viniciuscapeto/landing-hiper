function msgBotao(){
    alert('Seus dados foram enviados!')
    window.location.reload();
}


    
function checkInputs(inputs) {
var filled = true;

inputs.forEach(function(input) {
    
    if(input.value === "") {
        filled = false;
    }

});

return filled;

}


var inputs = document.querySelectorAll("input");
var button = document.querySelector("button");

inputs.forEach(function(input) {
    
input.addEventListener("keyup", function() {
    if(checkInputs(inputs)) {
    button.disabled = false;
    submitInicio.style.backgroundColor = "#FFC200";
    submitInicio.style.color = "#6A4B9D";
    submitInicio.style.border = "2px solid #6A4B9D";
    submitInicio.style.boxShadow = "10px 10px 10px lightgrey";        
    } else {
    button.disabled = true;
    submitInicio.style.backgroundColor = "#BEBEBE";
    submitInicio.style.color = "#fff";
    }
});
});


