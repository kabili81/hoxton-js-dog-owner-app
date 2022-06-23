console.log(data);

// Step 1: Download the template and open it with VS Code 
// Step 2: Explore the HTML and the data
// Step 3: Read the instructions carefully
// Step 4: Query the elements that we will need to use from the page
// Step 5: Create a function for every action we will need to perform (i.e. addDogListItem, displayDog)
// Step 6: Start writing one function at a time, testing along the way to make sure things work the way we expect them to
// Step 7: Call the functions when we need to (i.e. call addDogListItem for each dog available whent he app starts, call displayDog when we click a dog list item, etc)

// Instructions:
// - You'll find a variable called data in the console.log. That's your list of dogs
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog

 // This is a template for the dog list item

 //<li class="dogs-list__button">Mr. Bonkers</li> 
//<!-- This is a template for the main dog card -->
// <section class="main__dog-section"> //       <h2>Mr. Bonkers</h2>
 //<img
 // src="http://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
 // alt=""
 // /> //  <div class="main__dog-section__desc"> //  <div class="main__dog-section__desc"> //  <div class="main__dog-section__desc">
 // <div class="main__dog-section__desc"> //  <div class="main__dog-section__desc">
 // <h3>Bio</h3>
 // <p>
 // Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
 // minima voluptates libero cumque rerum consequatur optio aliquid sint
 // eum maxime illo laborum omnis quo ab rem cupiditate nulla
 // perspiciatis ipsum!
 // </p>
 // </div class="main__dog-section__btn"> //         <p><em>Is naughty?</em> yes!</p>
 // <button>Good dog!</button>
 //</section> 



let dogList = document.querySelector('.dogs-list')


let dogSection = document.querySelector('.main__dog-section')

function addDogListItem(dog) {
    let liEl = document.createElement('li')
    liEl.className = 'dogs-list__button'
    liEl.textContent = dog.name
    dogList.append(liEl)
}

function displaydog(dog) {
    dogSection.textContent = ''

   // Add dog info

  // <h2>Mr. Bonkers</h2>
  let h2El= document.createElement('h2')
  h2El.textContent = dog.name

  //  <img
  //  src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
  //  alt=""
  //  />
  let imgEl = document.createElement('img')
  imgEl.src = dog.image
  //  <div class="main__dog-section__desc">
  let divEl = document.createElement('div')
  divEl.className = 'main__dog-section__desc'
  //  <h3>Bio</h3>
  let h3EL = document.createElement('h3')
  h3EL.textContent = dog.bio

  //  <p>
  let pEl = document.createElement('p')
  pEl.textContent = ' Lorem,'
  //  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
  //  minima voluptates libero cumque rerum consequatur optio aliquid sint
  //  eum maxime illo laborum omnis quo ab rem cupiditate nulla
  //  perspiciatis ipsum!
  //  </p>
  //  </div class="main__dog-section__btn">
  //  <p><em>Is naughty?</em> yes!</p>
  //  <button>Good dog!</button>

    const pEl = document.createElement('p')
  pEl.textContent = dog.name

  dogSection.append(pEl)
}

for (let dog of data) {
    addDogListItem(dog)
}