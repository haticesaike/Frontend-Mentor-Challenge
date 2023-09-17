const reaction = document.getElementById("reaction");



var data =fetch("data.json")
.then(response => response.json())
.then(data => {
    console.log(data);
})
