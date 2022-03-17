function hello(firstname, lastname){
    lastname= lastname || "norris"
    console.log("hello, " + firstname + " " + lastname);
    return firstname + " " + lastname;
}

function includesChar(s, c){
    if(s.includes(c)){
        console.log("true")
        return true;
    } else {
        console.log("false")
        return false;
    }
}

function countA(s){
    let numberOfA=0;
    for (let i=0; i<s.length; i++){
        if(s[i]=="a")
        {
            numberOfA++;
        }
    }
    console.log(numberOfA);
    return numberOfA;
}

function countA(s){
    countChars(s, "a");
}

function countChars(s, c){
    let numberOfChars=0;
    let lowerS = s.toLowerCase();
    for (let i=0; i<lowerS.length; i++){
        if(lowerS[i]==c)
        {
            numberOfChars++;
        }
    }
    console.log(numberOfChars);
    return numberOfChars;
}
function isEmail(s){
    if(s.includes("@") && s.includes("."))
    {
        console.log("yes email")
        return true;
    }else {
        console.log("nah email")
        return false;
    }
}



hello("Torstein", "eide");
includesChar("Torstein", "s")
countA("aaaas")
countChars("Torstein", "t")
isEmail("kuk@kuk.no")
isEmail("123123123")