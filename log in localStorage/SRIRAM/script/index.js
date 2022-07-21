// let arrayOfDetails = [];

function strInLocal(data) {
    let local = localStorage.setItem("stringedData", JSON.stringify(data));
    document.querySelector('.name').value = '';
    document.querySelector('.dept').value = '';
    document.querySelector('.year').value = '';
}

function getDetails(event) {
    event.preventDefault();
    let Name = document.querySelector('.name').value;
    let department = document.querySelector('.dept').value;
    let year = document.querySelector('.year').value;
    let disp = document.querySelector('.disp');
    strInLocal({Name,department,year});
    disp.innerHTML = 
    `
    <span>${Name}</span><br>
    <span>${department}</span><br>
    <span>${year}</span>
    `
}
