function selectedV(playerNameId){
    const playerName = document.getElementById(playerNameId).textContent;
    const selectedPlayerList = document.getElementById('selected-players');
    const totalLi = selectedPlayerList.querySelectorAll('li').length; 
    if(totalLi < 5){
        const newListItem = document.createElement('li');
        newListItem.textContent = playerName;
        selectedPlayerList.appendChild(newListItem); 
    }else{
        alert("You alredy select five player"); 
    }   
}


function getInputValue(inputId){
    const innerValue = document.getElementById(inputId)
    const innerValueString = innerValue.value 
    const finalValue = parseFloat(innerValueString) 
    if(isNaN(finalValue)){
        alert("Give a proper input")
        return;
    }
    return finalValue;
}

function getElementValue(inputId){
    const innerValue = document.getElementById(inputId)
    const innerValueString = innerValue.innerText 
    const finalValue = parseFloat(innerValueString) 
    if(isNaN(finalValue)){
        alert("Give a proper input")
        return;
    }
    return finalValue;
}

function setValue(elementId, newValue){
    const getElement = document.getElementById(elementId)
    getElement.innerText = newValue
}


