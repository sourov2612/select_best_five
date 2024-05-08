document.getElementById('calculatePlayerCost').addEventListener('click', function(){
    const selectedPlayerList = document.getElementById('selected-players');
    const totalLi = selectedPlayerList.querySelectorAll('li').length;
    const perPlayer = getInputValue('par_player_cost') 
    const totalCost = (perPlayer*totalLi) 
    setValue('player_expenses',totalCost)
})

document.getElementById('Calculate_total').addEventListener('click', function(){
    const manager = getInputValue('manager_cost')
    const coach = getInputValue('coach_cost') 
    const playerTotalCost = getElementValue('player_expenses') 
    const totalExpenses = (manager + coach + playerTotalCost)
    setValue('total_expenses',totalExpenses)
})

