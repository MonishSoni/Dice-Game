    
    // player one 
    
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage = "dice" + randomNumber + ".png";
    var randomImageSource = "images/" + randomDiceImage;

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);



    // player two

    var randomNumber1= Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = "dice" + randomNumber1 + ".png";
    var randomImageSource1 = "images/" + randomDiceImage1;

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource1);


    // conditions for declaring result

    if (randomNumber > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player One Wins !";
    }

    else if (randomNumber < randomNumber1) {
        document.querySelector("h1").innerHTML = "Player Two Wins !";
    }

    else {
        document.querySelector("h1").innerHTML = "Draw !";
    }
