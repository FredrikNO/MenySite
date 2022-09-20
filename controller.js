function changeMenu(menuChoise) {
    selectedMenuchoise=menuChoise;
    chooseMenu(menuChoise);
}
function selectedMenuItem(menuChoise){
    if(selectedMenuchoise==menuChoise){
        return 'selectedBtn'
    }
    else return ''
}
function addToChart(index){
    if(selectedMenuchoise=='dinner'){
        if(window.confirm('Er du sikker på valget og antallet?')){
            chart.push(menu.dinner[index])
        }

    }
}