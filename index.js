//Creating variables for the HTML elements we want to access
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

// intialize the count as 0
let count = 0

// increment the count variable when the button is clicked and change the count-el in the HTML to reflect the new count
function increment() {
    count ++;
    countEl.textContent = count;
}

//Create a function, save(), which logs out the count when it's called
 // 3. Render the variable in the saveEl using innerText
function save() {
    let countStr = count + " - ";  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    saveEl.textContent += countStr;   // NB: Make sure to not delete the existing content of the paragraph
    //when the train leaves the station - we need to reset the count to 0 and display it in the count-el html element
    count = 0;
    countEl.textContent = count;
}