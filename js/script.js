// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Ms Raffin
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a greeting based on the hour of the day
 */
function displayGreeting () {
  // initialize variables
	let greeting = ""
	
	// get user input
	let hour = parseInt(document.getElementById('hour').value)


  // determine the greeting based on the hour of the day in 24-hour format
	if (hour < 12) {
		greeting = "Good morning!"
	}

  // display the results
  document.getElementById('greeting').innerHTML = greeting
}
