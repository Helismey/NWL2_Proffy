//Procurar o botão
document.querySelector("#add-time")
    //Quando clicar no botão
    .addEventListener('click', cloneField)

//Executat uma função
function cloneField() {
    //Duplicar os campos
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)
        //Pegar os campos
    const fields = newFieldsContainer.querySelectorAll('input')
        // para campo Limpar
    fields.forEach(function(field) {
            //pegar o Field do momento
            field.value = ""
        })
        //Colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}