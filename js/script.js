// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

// This function displays a greeting based on the hour of the day
 
function displayGreeting () {
  // declare constants
	const MIN = 1;
  const MAX = 6;

  let correct = Math.floor((Math.random()*MAX)+MIN);
  
	// get user input
	let number = parseInt(document.getElementById('number').value)

  // determine the greeting based on the hour of the day in 24-hour format
	if (number == correct) {
		let greeting = "You are right, that was the number I chose!"
    document.getElementById('greeting').innerHTML = greeting
	}

  else {
    let greeting = "Nope, wrong number. Try again."
    document.getElementById('greeting').innerHTML = greeting
  }

}

