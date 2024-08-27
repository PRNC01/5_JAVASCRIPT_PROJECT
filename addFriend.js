const addButton = document.getElementById('Add');
const Status = document.getElementById('Status');
let Check = true;

addButton.addEventListener('click', () => {
    if (Check == true) {
        Status.innerHTML = 'Friends'
    Status.style.color = 'Green'
    addButton.style.backgroundColor = '#dadada'
    addButton.style.color = '#000000'
    addButton.innerHTML = 'Remove'
    Check = false;
    }else{
        Status.innerHTML = 'Not Following'
        Status.style.color = 'Red'
        addButton.style.backgroundColor = '#5f9ea0'
        addButton.style.color = '#ffffff'
        addButton.innerHTML = 'ADD FRIEND'
        Check = true;
    }
})
