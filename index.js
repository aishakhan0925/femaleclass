
// function greetUser() {
//     var name = prompt('what is your name?');
//     alert(name)
// }

// function checkAddress(fieldId) {
//     if (document.getElementById(fieldId).value === "") {
//         alert("Email address is required.");
//     } else {
//         alert("Form submitted")
//     }
// }

// function fillCity() {
//     var cityName;
//     var zipEntered = document.getElementById("zip").value;
//     switch (zipEntered) {
//         case "60608":
//             cityName = "Chicago";
//             break;
//         case "68114":
//             cityName = "Omaha";
//             break;
//         case "53212":
//             cityName = "Milwaukee";
//     }
//     document.getElementById("city").value = cityName;
// }


// function expandLoris() {
//     var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates whichmake up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety ofdistinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have severaladaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.Slow lorises have a toxic bite, a rare trait among mammals.";
//     document.getElementById("slowLoris").innerHTML = expandedParagraph;
// }

// function makeInvisible() {
//     document.getElementById("ugly").className += "hidden";
// }
// function swapPic() {
//     document.getElementById("before").src = "img.jpg";
// }
//  function makeBig() {
//      document.getElementById("slowLoris").style.fontSize = "30px";
//      }

function replce() {
    var para = document.getElementsByTagName("p");
    // console.log(para)

    for (var i = 0; i < para.length; i++) {
        para[i].style.color = "red";
    }
}
