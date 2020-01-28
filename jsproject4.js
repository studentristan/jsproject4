/**
* @author Werden Tristan
* @version 0.0.1
* @summary Kiosk (project 4)
* @todo
*/


//This is not complete, but I am having trouble with it and I wanted to at least get partial credit. I got the menu working, but I got stuck trying to get the ratings to go in.
//You can enter infinate movies, but even synjin's project is totally broken.
//It doesn't even run, and he got full credit, so... yeah. I know this because I thought looking at his may help me figure mine out, but it had some major issues. 
"use strict";
const PROMPT = require('readline-sync')

//section 1 ^^

let continueResponse;
let movies = [];
let avgRating, totalRating, numOfRating;
let menu;

//section 2 ^^

function main() {
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
    }
    while (continueResponse === 1) {
      menuSet();
        if (menu === 0){
          populateMovies();
          setContinueResponse();
        }
        else if (menu === 1) {
          rateMovies();
          setNumOfRating();
          setContinueResponse();
        }
    }
}

main();

//section 3 ^^

function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function populateMovies() {
    const MIN_RATING = 0, MAX_RATING = 5;
    let i = 0;
        movies[i] = [];
        console.log(`\nMovie ${i + 1}:`);
        while (! movies[i][0] || !/^[a-zA-Z -]{1,30}$/.test(movies[i][0])) {
            movies[i][0] = PROMPT.question(`Please enter movie title: `);
            if (! /^[a-zA-Z -]{1,30}$/.test(movies[i][0])) {
                console.log(`${movies[i][0]} is invalid. Please try again.`);
            }
        }

function menuSet(){
  menu = Number(PROMPT.question(`Please select what you would like to do. \n0-new movie \n1-See movies \n2-see average ratings \n3-best rated\n`));
}

function setNumOfRating(){
	if(numberOfRating == undefined){
	numberOfRating = 1;
	}else{
		numberOfRating = numberOfRating++; //shows how many times it was rated
    console.log(`These movies have ${numberOfRating} ratings`)
	}
}

function setAverageRating(){
  avgRating =
}
//section 4 ^^



/*
The movie kiosk.

Write the code to run a kiosk at a movie theater. Program should loop infinitely to allow users to either see
average rating of previous user entries, or enter their own review.

Requirements:

Should store movie title, current user rating, total rating, and number of ratings
Should display a list of movies for user to review or option to review a new one
Should allow user to select a movie to see average rating
Should allow sorting of highest to lowest rated movies
*/
