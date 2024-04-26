// Function to prompt the user and process the input
function processFlavors() {
    // Prompt the user for their list of flavors
    var input = prompt("Enter a list of comma-separated froyo flavors:");
  
    // Split the input string into an array of flavors
    var flavors = input.split(",");
  
    // Count the occurrences of each flavor
    var flavorCounts = {};
    flavors.forEach(function(flavor) {
      flavor = flavor.trim(); // Remove any leading/trailing whitespace
      if (flavorCounts[flavor]) {
        flavorCounts[flavor]++;
      } else {
        flavorCounts[flavor] = 1;
      }
    });
  
    // Display the counts in the console
    console.log("Flavor Counts:");
    console.table(flavorCounts);
  }
  
  // Call the function when the page loads
  window.onload = processFlavors;
  