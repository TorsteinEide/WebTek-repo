function doneLoading()
{
    document.getElementById('p').innerHTML = "Hello"
}

function updateCounter(){
    let i =0
    setInterval(() => {
        i++
        document.getElementById('timeonpage').innerHTML = i + " seconds have passed since the page was loaded"
    }, 1000);
}

function updateAnswer()
{
    let answer = multiply(document.getElementById("A").value, document.getElementById("B").value)
    document.getElementById("calcAnswer").innerHTML= "the two numbers multiplied are: " + answer
}

function multiply(a, b)
{
    return a*b;
}