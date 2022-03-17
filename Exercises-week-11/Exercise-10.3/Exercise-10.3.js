

function sqrt () {
    let sqrt1764 = Math.sqrt(1764);
    console.log(sqrt1764)
    return sqrt1764;
}

function helloi(limit)
{
    let counter=0;
    setInterval(()=>{
        counter++;
        console.log("hello, " + counter)
    }, 1000)
}

function aButton()
{
    console.log("button a was pressed");
}

function bButton()
{
    console.log("button b was pressed");
}

function textInput()
{
    console.log("Text was changed");
}

sqrt();
helloi(10);