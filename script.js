// Declare variables below to save the different divs of your story.
const optionOneScreen = document.querySelector(".option-one-screen");
const optionOneOneScreen = document.querySelector(".option-one_one-screen");
const optionOneOneOneScreen = document.querySelector(".option-one_one_one-screen");
const optionOneOneTwoScreen = document.querySelector(".option-one_one_two-screen");
const optionOneTwoScreen = document.querySelector(".option-one_Two-screen");
const optionOneTwoOneScreen = document.querySelector(".option-one_Two_one-screen");
const optionOneTwoTwoScreen = document.querySelector(".option-one_two_two-screen");
const optionTwoScreen = document.querySelector(".option-two-screen");
const optionTwoOneScreen = document.querySelector(".option-two_one-screen");
const optionTwoOneOneScreen = document.querySelector(".option-two_one_one-screen");
const optionTwoOneTwoScreen = document.querySelector(".option-two_one_two-screen");
const optionTwoTwoScreen = document.querySelector(".option-two_two-screen");
const optionTwoTwoOneScreen = document.querySelector(".option-two_two_one-screen");
const optionTwoTwoTwoScreen = document.querySelector(".option-two_two_two-screen");
const optionOnebtn = document.querySelector(".option-one-button");
const optionTwobtn = document.querySelector(".option-two-button");

// console.log(optionOneScreen, optionTwoScreen)
console.log(optionOneScreen.style.display);

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

optionOnebtn.addEventListener('click', function() {

    if (optionOneScreen.style.display == "none") {
        console.log("option 1 chosen");
    }
});