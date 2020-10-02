let recepieLists=[]
const recepie={
    id:'',
    name:'',
    description:'',
    ingridients:[]
}

document.querySelector('#addingridientform').addEventListener('submit', (e) => {
    e.preventDefault()
    // addIngredient(e, recipe.ingridients);
    e.target.elements[0].value = ''
    renderIngredients(recipe.ingridients)
})
document.querySelector('#addnewrecepie').addEventListener('click',()=>
{
    const recepiename1 = document.querySelector('#recepiename');
    const recepiesteps1 = document.querySelector('#recepiesteps');
    if(recepiename1.value.length === 0){
        recepie.name = "Unnamed Recepie";
    }
    else{
recepie.name =recepiename1.value;
    }   
    recepie.description = recepiesteps1.value;


    details.recepie.description;
    details.recepie.name;
    recepieLists.push(recepie);
    recepieLists.push(JSON.parse(localStorage.getItem('session')));
    localStorage.setItem('session',JSON.stringify(recepieLists))
    

})