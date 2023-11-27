'use strict';

import { Contact } from "../scripts/contact.js" ;

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
  }
  
  // Get HTML element by id
  function getElement(selector, parent = document) {
    return parent.getElementById(selector);
  }
  
  // Select HTML element
  function select(selector, parent = document) {
    return parent.querySelector(selector);
  }
  
  // Get a (node) list of HTML elements as array
  function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
  }
  
  // Print
  function print(arg) {
    console.log(arg);
  }
  
  // Sleep
  function sleep(duration) {
    return new Promise(resolve => {
      setTimeout(resolve, duration)
    });
  }
  
  // Generate random number between - and including - 'min' and 'max'
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Filter array
  function filterArray(array, callback) {
    return array.filter(callback);
  }
  
  // Create an HTML element
  function create(element, parent = document) {
    return parent.createElement(element);
  }

  const addingButton = select(".adding-button");
  const infoContainer = select(".info");
  const contactContainer = select(".contact-container .contacts");
  const contactCounter = select(".contact-counter");
  const feedbackSection = select(".feedback-section");
  const newContact = selectAll(".new-contact");

  feedbackSection.textContent = ``
  
  let contactCount = 0;
  let contactList = [];


  function checkInput(name, city, email) {
    if (!Contact.checkName(name)) {
      feedbackSection.textContent = `Invalid name(Name must include only letters)`;
      throw new Error('Invalid name');
  } else if (!Contact.checkCity(city)) {
      feedbackSection.textContent = `Invalid city name(City name must include only letters)`;
      throw new Error('Invalid city name');
  } else if (!Contact.checkEmail(email)) {
      feedbackSection.textContent = `Invalid email(Email must include "@" sign and only lower case)`;
      throw new Error('Invalid email');
  }
}

  function listOfContacts() {
    let contactInfo = infoContainer.value.trim().split(", ");
  
    const contact = new Contact(contactInfo[0], contactInfo[1], contactInfo[2]);

  checkInput(contactInfo[0], contactInfo[1], contactInfo[2]);
  
    let newContact = create("div");
    newContact.classList.add("new-contact");
    contactContainer.appendChild(newContact);
  
    let nameOfContact = create("p");
    nameOfContact.textContent = `Name: ${contact.name}`;
    newContact.appendChild(nameOfContact);
  
    let cityOfContact = create("p");
    cityOfContact.textContent = `City: ${contact.city}`;
    newContact.appendChild(cityOfContact);
  
    let emailOfContact = create("p");
    emailOfContact.textContent = `Email: ${contact.email}`;
    newContact.appendChild(emailOfContact);
  
    contactList.push(contact);
    contactCount++;
    infoContainer.value = "";
    contactCounter.textContent = `Number of contacts: ${contactCount}`;
  }
  
  function removeContact() {
    contactContainer.addEventListener("click", (event) => {
      const newContact = event.target.closest(".new-contact");
      if (newContact) {
        newContact.remove();
        contactCount--;
        contactCounter.textContent = `Number of contacts: ${contactCount}`;
      }
    });
  }
    
  onEvent("click", addingButton, () => {
    feedbackSection.textContent = '';
    if (infoContainer.value.trim() !== "") {
      listOfContacts();
    } else {
      feedbackSection.textContent = `Invalid contact`;
    }
  });

  onEvent("load", window, () => {
    contactCounter.textContent = `Number of contacts: ${contactCount}`;
    removeContact();
  });