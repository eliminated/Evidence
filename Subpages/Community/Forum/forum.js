// // Get references to the topic form and the topic list
// const topicForm = document.querySelector('#topic-form form');
// const topicList = document.querySelector('#topics ul');

// // Listen for the form submission event
// topicForm.addEventListener('submit', event => {
//   // Prevent the default form submission behavior
//   event.preventDefault();

//   // Get the values of the title and description inputs
//   const title = topicForm.elements['topic-title'].value;
//   const description = topicForm.elements['topic-description'].value;

//   // Create a new topic object with the title and description
//   const topic = { title, description };

//   // Call a function to add the new topic to the list and display it
//   addTopicToList(topic);

//   // Reset the form
//   topicForm.reset();
// });

// function addTopicToList(topic) {
//   // Make sure that the topic list and item elements exist
//   if (!topicList) {
//     console.error('Topic list element not found!');
//     return;
//   }

//   const topicItemTemplate = `
//     <li>
//       <h3><a href="#">${topic.title}</a></h3>
//       <p>Author: ${getRandomName()} | Last Updated: ${getCurrentDate()}</p>
//       <p>${topic.description}</p>
//     </li>
//   `;

//   // Create a new list item from the template
//   const topicItem = document.createRange().createContextualFragment(topicItemTemplate).firstElementChild;

//   // Append the list item to the topic list
//   topicList.appendChild(topicItem);
// }

// // Helper functions to generate random names and current dates
// function getRandomName() {
//   const names = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Jones'];
//   const randomIndex = Math.floor(Math.random() * names.length);
//   return names[randomIndex];
// }

// function getCurrentDate() {
//   const date = new Date();
//   return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
// }


// Get references to the topic form, the topic list, and the author name input
const topicForm = document.querySelector('#topic-form form');
const topicList = document.querySelector('#topics ul');
const authorNameInput = document.querySelector('#author-name');

// Listen for the form submission event
topicForm.addEventListener('submit', event => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the title, description, and author name inputs
  const title = topicForm.elements['topic-title'].value;
  const description = topicForm.elements['topic-description'].value;
  const authorName = authorNameInput.value;

  // Create a new topic object with the title, description, and author name
  const topic = { title, description, authorName };

  // Call a function to add the new topic to the list and display it
  addTopicToList(topic);

  // Reset the form
  topicForm.reset();
});

function addTopicToList(topic) {
  // Create a new list item for the topic
  const topicItem = document.createElement('li');

  // Create the title, author, and description elements
  const titleElem = document.createElement('h3');
  const titleLink = document.createElement('a');
  titleLink.textContent = topic.title;
  titleElem.appendChild(titleLink);

  const authorElem = document.createElement('p');
  authorElem.textContent = `Author: ${topic.authorName} | Last Updated: ${getCurrentDate()}`;

  const descElem = document.createElement('p');
  descElem.textContent = topic.description;

  // Create the delete button element
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-topic-btn';

  // Add event listener to delete button
  deleteBtn.addEventListener('click', () => {
    topicItem.remove();
  });

  // Append the title, author, description, and delete button elements to the list item
  topicItem.appendChild(titleElem);
  topicItem.appendChild(authorElem);
  topicItem.appendChild(descElem);
  topicItem.appendChild(deleteBtn);

  // Append the list item to the topic list
  topicList.appendChild(topicItem);
}

function getCurrentDate() {
  // Get the current date and time and format it
  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

