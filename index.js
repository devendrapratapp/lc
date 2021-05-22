function love(){
    var name1 = document.getElementById("NameOne").value;
    var name2 = document.getElementById("NameTwo").value;
    if(name1.length<=2){
        alert("Enter at least 3 character");
    }
    if(name2.length<=2){
        alert("Enter at least 3 character");
    }
    else{
        var random = Math.floor(Math.random()*100);
        document.getElementById("print").innerHTML = "Percentage of love between " + name1+ " & " +name2+ " : "+random+ "%";
    }
    if(random<=10){
        document.getElementById("statement").innerHTML = "God bless your Relationship 😗";
    }
    else if(random<=20 || random<=60){
        document.getElementById("statement").innerHTML = "Must work on your Relationship 🤜🤛";
    }
    else if(random<=79){
        document.getElementById("statement").innerHTML = "Wow you guys are best friends or more than that? 😁";
    }
    else if(random<=90){
        document.getElementById("statement").innerHTML = "Woah you guys are best catch for each other, just say it 😉";
    }
    else if(random<=100){
        document.getElementById("statement").innerHTML = "I guess, you've just found your soulmate 🧡 ";
    }
}