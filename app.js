"use strict";

let numberOfFilms;
let personalMovieDB = {
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?");
    while (
      personalMovieDB.count === "" ||
      personalMovieDB.count === null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?");
    }
    console.log(personalMovieDB.count);
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat === false) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = prompt(
        `Ваш любимый жанр под номером ${i + 1}`
      );
      if (
        personalMovieDB.genres[i] === "" ||
        personalMovieDB.genres[i] === null
      ) {
        i--;
      }
    }
    personalMovieDB.genres.forEach((value, index) => {
      console.log(`Любимый жанр ${index + 1} - это ${value}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
      console.log(personalMovieDB.privat);
    } else {
      personalMovieDB.privat = true;
      console.log(personalMovieDB.privat);
    }
  },
};

