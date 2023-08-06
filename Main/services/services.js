let mainDiv = document.getElementsByClassName("menu")[0];
let sandwich = document.getElementsByClassName("sandwich")[0];
        
function sandwichIcon() {
    if (mainDiv.style.display == "none") {
        mainDiv.style.display = "flex";
    } else {
        mainDiv.style.display = "none";
    }
}

sandwich.addEventListener("click", sandwichIcon);

  
