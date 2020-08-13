// procurar o botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener("click", cloneField)


//executar uma acao
function cloneField() {
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    //limpar os campos
    //fields[0].value = ""
    //fields[1].value = ""
    //para cada campo 
    fields.forEach(function(field) {
        //pegar o field do momento
        field.value = ""
})

    //colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
    
    