function throwDie()
{
    let request = new XMLHttpRequest;
    request.open("POST", "https://web-tek.ninja/php_backend/throw_a_dice.php")

    request.open("GET", "https://web-tek.ninja/php_backend/throw_a_dice.php");
    request.onload = function()
    {
        let response = JSON.parse(request.responseText);
        changePic(response);
    }
    request.send();
}

function addDiceRoll(response)
{
    
    let getP = document.getElementById("diceRollP");
    
    getP.innerHTML = "You threw: " + response;
}

function changePic(response)
{
    if(response == 1)
    {
        document.getElementById("dicediv").className = "dice"
    }
    if(response == 2)
    {
        document.getElementById("dicediv").className = "secondFace"
    }
    if(response == 3)
    {
        document.getElementById("dicediv").className = "thirdFace"
    }
    if(response == 4)
    {
        document.getElementById("dicediv").className = "fourthFace"
    }
    if(response == 5)
    {
        document.getElementById("dicediv").className = "fifthFace"
    }
    if(response == 6)
    {
        document.getElementById("dicediv").className = "sixthFace"
    }
}