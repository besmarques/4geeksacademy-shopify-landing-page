function displayGrid(){
    var classLength = document.getElementsByClassName("card").length;
    for (var i = 0; i < classLength; i++){
        document.getElementsByClassName("card")[i].className = "card col-4"
    }
}

function displayList(){
    var classLength = document.getElementsByClassName("card").length;
    for (var i = 0; i < classLength; i++){
        document.getElementsByClassName("card")[i].className = "card col-7" 
    }
}