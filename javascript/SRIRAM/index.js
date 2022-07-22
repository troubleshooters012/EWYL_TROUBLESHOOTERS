const characterUrl = 'https://www.breakingbadapi.com/api/characters?limit=10';
fetch(characterUrl).then(function(data){
    return data.json().then(function(project){
    let data1="";
    localStorage.setItem("testJSON", JSON.stringify(project));

    product_string=localStorage.getItem("testJSON");
    testJSON = JSON.parse(product_string);
    project.map(function(sri){
        sri.updatedName = `${sri.name} Sri Eshwar college`;
    });

    localStorage.setItem("sece", JSON.stringify(updatedName));
    project.map(function(values){
        data1+=`<div class="card">
        <h1 class="title">
            ${values.updatedName}
        </h1>
        <img  class="img" src=${values.img} alt="img">
        <p>
            ${values.nickname}
        </p>
        <p class="category">
          ${values.status}
        </p>
        <p class="price">
            ${values.birthday}
        </p>
    </div>`;
    });
    document.getElementById("cards").innerHTML=data1;
})
}).catch((error)=>{
    console.log(error);
})