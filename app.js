// local reviews data
// All the reviews of the different users are stored in an array.
// Remember that const is a js keyword to create variables.
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/bucheli-web-development/image/upload/v1605451411/images_jrgpe1.jpg",
    text:
      "I had the opportunity to spend two weeks at the eco park and it was one of the most extraordinary experiences I have ever had in my entire life.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/bucheli-web-development/image/upload/v1605451425/Millennial-Woman-e1469476024752_q6bg4p.jpg",
    text:
      "I had never had the opportunity to be so close to nature as when I visited the ecological park.  It is an experience I will never forget.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/bucheli-web-development/image/upload/v1605451438/360_F_247319079_5DtMmz1Wwx1Ffkm2ciMgKs96APar3Qcy_z8vl9u.jpg",
    text:
      "I am a United States Army veteran and I love adventure.  This jungle is so impressive that if you are a man of action it is the perfect place to test your skills as an explorer.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/bucheli-web-development/image/upload/v1605451449/5de63f8fa310cf3e97a9bfbf_gfljmr.jpg",
    text:
      "I love calm, contemplation, meditation and retreat and this ecological park is a great place to meet the spiritual.",
  },
];

// select items
// Remember that const is a js keyword used to create variables.
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item to the first value of the array. (Remember that the arrays always have index 0)
let currentItem = 0; /*In order to create interaction with the buttons I need to relate this variable with functionality in a way that when i change this
value, the information of the person will change in the screen.*/

//We need to create click events for prevBtn, nextBtn and randomBtn.*/

// load initial item
/* Add an event listener on the window object. The event listener is DOMContentLoaded. Remember that The DOMContentLoaded event fires when the initial
HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading */

window.addEventListener('DOMContentLoaded', function () {
  // Now is time to access the first item and to do that we assign it to a variable
  /*const item = reviews[currentItem];
  img.src = item.img; //src is a property of image we are not defining this property.  It's intrisec to images.
  author.textContent = item.name; /*textcontent is a property of js.  The textContent property of the Node interface represents the text content of the 
  node and its descendants.  Syntax: let text = someNode.textContent   someOtherNode.textContent = string
  job.textContent = item.job;
  info.textContent = item.text;*/
  showPerson(); /*Reusing the showPerson function.  The original syntax was showPerson(currentItem) but there is no reason to set currentItem as a 
  parameter because currentItem is a global variable.*/
});

// It's better to update all the information in the screen using a function to relate with prevBtn, nextBtn and randomBtn.

// Show person based on item

function showPerson(){ //Originally here we had person, but it's better to use the current Item.  The original syntax was showPerson(person)
  const item = reviews[currentItem]; //Orignially  here we had person, but it's better to use the current Item.
  img.src = item.img; //src is a property of image we are not defining this property.  It's intrisec to images.
  author.textContent = item.name; /*textcontent is a property of js.  The textContent property of the Node interface represents the text content of the 
  node and its descendants.  Syntax: let text = someNode.textContent   someOtherNode.textContent = string*/
  job.textContent = item.job;
  info.textContent = item.text;
}

// Show next person
nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length - 1) { //Because the lenght is 4.
    currentItem = 0;
  }
  showPerson(); /*Changing person for currentItem in the steps before, it's possible to delete currentItem as parameter from this function.  The original
  syntax was showPerson(currentItem).*/

});

// Show previous person
prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// Show random person
randomBtn.addEventListener('click', function () {
    /*Here to implement this function we need to use a random number in the range of the array.*/
  /*Math floor rounds to the closest lowest integer.*/
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});








