"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<p>' + coffee.id + '</p>';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
    
    if (selectedRoast == "all") {
        tbody.innerHTML = renderCoffees(coffees);
    }
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// sorts id in ascending order
coffees.reverse();


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

//  add coffee variables



tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


function nameSearch(){
    // e.preventDefault();
    var searchInput = document.getElementById("searchByName").value;
    var searchMatch = [];
    coffees.forEach(function(coffee){
        if (coffee.name.toUpperCase().includes(searchInput.toUpperCase())){
            searchMatch.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(searchMatch);
}

var addNewRoast = document.querySelector("#roast-add");
var addNewName = document.querySelector("#addNewName");
var submitButtonNew = document.querySelector('#submitNew');

submitButtonNew.addEventListener('click', addCoffee);

function addCoffee(e){
    e.preventDefault();
      var newCoffee = {
          id: coffees.length +1,
          name: addNewName.value,
          roast: addNewRoast.value
      }
   
      console.log(coffees)
      coffees.push(newCoffee);
      tbody.innerHTML = renderCoffees(coffees);
      console.log(coffees);
   
   }
  