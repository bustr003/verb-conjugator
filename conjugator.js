// from index.html
function redirectAr(){
    location.href = "ar/count.html";
}

function redirectEr(){
    location.href = "er/count.html";
}

function redirectIr(){
    location.href = "ir/count.html";
}

// from count.html
function redirectPerson(){
    location.href = "person.html";
}

function redirectPeople(){
    location.href = "people.html";
}

// from people.html and person.html
function solution(pronoun, ending){
    // Image insert
    var insert = "<img class=\"pronoun\" align=\"center\" src=\"../images/" + pronoun + ".png\" height=\"200\"><br>"

    // Pronoun modifications
    if(pronoun == "El"){pronoun = "E&#769;l";}
    else if(pronoun == "Tu"){pronun = "Tu&#769;";}
    else if(pronoun == "Usted"){pronoun = "Ud.";}
    else if(pronoun == "Ustedes"){pronoun = "Uds.";}

    // Solution for this combination of pronoun and verb type
    var message = pronoun + " <u>root</u>" + ending + ".<br>"

    // Note to add the root of the verb
    var note = "<p>Replace&nbsp;&nbsp;<u>root</u>&nbsp;&nbsp;with the root of your verb.<\p>"

    // Write to the HTML code
    document.getElementById("solution").innerHTML = insert + message;
    document.getElementById("note").innerHTML = note;
    }//end of function