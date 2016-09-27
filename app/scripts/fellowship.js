console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement('section');
  // var sectionid = document.createAttribute('id');
  //
  // sectionid.value = 'middle-earth';
  // middleEarth.setAttributeNode(sectionid);

  for(var i = 0; i < lands.length; i++) {
    var land = document.createElement('article');
    land.innerHTML = '<h1>' +lands[i] +'</h1>';
    middleEarth.appendChild(land);
  }
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  body.appendChild(middleEarth);
}
makeMiddleEarth();


// Part 2
  var shire = body.querySelectorAll('article')[0];
  var rivendell = body.querySelectorAll('article')[1];
  var mordor = body.querySelectorAll('article')[2];

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
    var hobbitList = document.createElement('ul');
for (var i =0; i < hobbits.length; i++) {
    var hobbit = document.createElement('li');
    hobbit.className = 'hobbit'
    hobbit.innerText = hobbits[i];
    hobbitList.appendChild(hobbit);
}
  shire.appendChild(hobbitList);
  // give each hobbit a class of hobbit
}
makeHobbits();


// Part 3
var frodo = body.querySelectorAll('li')[0];

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute('class', 'magic-imbued-jewelry')
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener('click', nazgulScreech);
  // add the ring as a child of Frodo
frodo.appendChild(theRing);

}

keepItSecretKeepItSafe();

// Part 4

function makeBuddies() {
  // create an aside tag
  var aside = document.createElement('aside');
  // attach an unordered list of the 'buddies' in the aside
  var buddyList = document.createElement('ul');
    for(var i = 0, len = buddies.length; i < len; i++){
  var buddy = document.createElement('li');
      buddy.textContent = buddies[i];
      buddyList.appendChild(buddy);
 }
 // insert your aside as a child element of rivendell
 aside.appendChild(buddyList);
 rivendell.appendChild(aside);
}
makeBuddies();


// Part 5
var strider = rivendell.querySelectorAll('li')[3];

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent = 'Aragon';
}

beautifulStranger();



// Part 6
var hobbits = shire.querySelector('ul');

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(hobbits);
}
leaveTheShire();



// Part 7
var fellowshipMembers = rivendell.querySelectorAll('li');

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
var theFellowship = document.createElement('div');
    theFellowship.className = ('id', 'the-fellowship');

  // add each hobbit and buddy one at a time to 'the-fellowship'
  for(var i = 0, len = fellowshipMembers.length; i < len; i++){
      theFellowship.appendChild(fellowshipMembers[i]);
    }
  // after each character is added make an alert that they have joined your party
  rivendell.appendChild(theFellowship);
}

forgeTheFellowShip();


// Part 8
var gandalf = fellowshipMembers[0];

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.textContent = 'Gandalf the White';
  // apply style to the element
  gandalf.style.border = '1px solid grey';
  // make the background 'white', add a grey border
  gandalf.style.backgroundColor = 'White';
}
theBalrog();


// Part 9
var Boromir = fellowshipMembers[4];

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
alert('The horn of Gondor has blown');
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
    Boromir.style.textDecoration = 'line-through';
  // Remove Boromir from the Fellowship
    Boromir.parentNode.removeChild(Boromir)
}
hornOfGondor();

// Part 10

var sam = fellowshipMembers[6];

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
    mordor.appendChild(frodo);
    mordor.appendChild(sam);
      var mountDoom = document.createElement('div');
    mountDoom.className = ('id', 'mount-doom');
  mordor.appendChild(mountDoom);
  // add a div with an id of 'mount-doom' to Mordor
}
itsDangerousToGoAlone();

// Part 11


function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
