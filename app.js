"use strict";

let numberOfFilms;
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

statr();
rememberMyFilms();
detectPersonalLevel();
showMyDB();
writeYourGenres();

function statr() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
  while (
    numberOfFilms === "" ||
    numberOfFilms === null ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
  }
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Один из последних просмотренных фильмов?");
    let b = prompt("На сколько оцените его?");

    if (
      a != null &&
      a != "" &&
      b != null &&
      b != "" &&
      typeof a === "string" &&
      a.length < 50
    ) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
      alert("Давай по новой миша, все хуйня!");
    }
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

function showMyDB() {
  if (personalMovieDB.privat === false) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
  }
}
