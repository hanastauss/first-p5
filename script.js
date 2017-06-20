// Let's build some funcitons in p5.js

// Functions are like actions = they make stuff happen 

// Define a setup function

function setup(){
    //Call the createCanvas and background funcitons 
    // Numbers - Data type that is a number 
    createCanvas(800, 600)
    background(150)
}

// Variables in javascript are created using the var keyword
// Variables contain values 
// Assign values to variables with the equal sign 
var position = 100
var speed = 3

// Goal is to animate Tron Bike 
function draw(){
    clear()
    background(150)
    fill(255)
    rect(position, 100, 150, 60, 20)
    // String - Data type that is a series of characters
    fill("skyblue")
    ellipse(position, 150, 75, 75)
    ellipse(position + 150, 150, 75, 75)
    
    position = position + speed 
    
    // Conditionals - allows program to make decisions 
    if (position > 800) {
        speed = speed * -1
    }
    
    if (position < 0) {
        speed = speed * -1
    }
    
    textSize(40)
    // Concatenate - chain together 
    text("Position: " + position, 30, 30)
    text("Speed: " + speed, 30, 80)
    
    
}