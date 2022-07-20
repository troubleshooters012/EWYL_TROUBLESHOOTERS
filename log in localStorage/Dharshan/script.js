function storeValue(data){
    let local = localStorage.setItem("stringData", JSON.stringify(data));
    document.querySelector('.username').value='';
    document.querySelector('.deptname').value='';
    document.querySelector('.placename').value='';
}


function studentDetails(event) {
    event.preventDefault();
    let Name = document.querySelector('.username').value;
    let department = document.querySelector('.deptname').value;
    let place = document.querySelector('.placename').value;
    let result = document.querySelector('.result');
    storeValue({Name,department,place});
    result.innerHTML = `<span>${Name}</span><br>
    <span>${department}</span><br>
    <span>${place}</span>`
}
