// Write your JavaScript code here!

//Array of planets
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],           
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]     
  ];                                
    
function calculateWeight(userWeight, planet) {
    // 2. Write the code to return the correct weight
   // document.getElementById("outputGrams").innerHTML = valNum / 0.0022046;
     
return userWeight * planet; //calculate weight
  }
  for (var i=0;i<planets.length;i++){
    var grabSelect = document.getElementById("planets") 
    var createOption= document.createElement("option");   //Create a <option> element
    createOption.innerHTML = planets[i][0];  
    createOption.value = planets[i][1];             //i represents outer array, 0 represents inner array of planets
   grabSelect.appendChild(createOption);  
  }

  function handleClickEvent(e) {
       var userWeight = document.getElementById("user-weight").value    // 3. Create a variable called userWeight and assign the value of the user's weight.
                var planetWeight = document.getElementById("planets").value   // 4. Create a variable called planetName and assign the name of the selected planet from the drop down
                var planetName = document.getElementById("planets")
                var opt = planetName.options[planetName.selectedIndex];
                var result= calculateWeight(userWeight, planetWeight);   // 5. Create a variable called result and assign the value of the new calculated weight.

      var planetName = document.getElementById("output")
      var element = document.getElementById("output"); //get output
      element.innerHTML = "If you were on " + opt.text + " you would weight " + result +" lbs!"; //write output to browser
   
        }                                                    
 
        document.getElementById("calculate-button").onclick = handleClickEvent;  //getting element, calling calculate-button an 