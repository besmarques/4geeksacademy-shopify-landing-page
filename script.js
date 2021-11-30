function displayGrid(){
    var classLength = document.getElementsByClassName("card").length;
    for (var i = 0; i < classLength; i++){
        document.getElementsByClassName("main")[0].className = "main container-fluid"
        document.getElementsByClassName("card")[i].className = "card col-4 g-0 mb-0"
        document.getElementsByClassName("card-title")[i].className = "card-title row g-2 justify-content-around d-none"
        document.getElementsByClassName("card-bottom")[i].className = "card-bottom d-none"
    }
}

function displayList(){
    var classLength = document.getElementsByClassName("card").length;
    for (var i = 0; i < classLength; i++){
        document.getElementsByClassName("main")[0].className = "main container"
        document.getElementsByClassName("card")[i].className = "card col-7 mt-5 mb-3 border-0"
        document.getElementsByClassName("card-title")[i].className = "card-title row g-2 justify-content-around pt-2"
        document.getElementsByClassName("card-bottom")[i].className = "card-bottom"
    }
}