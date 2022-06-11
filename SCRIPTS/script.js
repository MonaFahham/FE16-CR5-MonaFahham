"use strict";
class Animal {
    constructor(name, age, gender, size, vaccine, image) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.vaccine = vaccine;
        this.image = image;
        array.push(this);
    }
    display() {
        return `
    <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center my-3">
    <div class="col">
      <div class="card h-100">
        <img src="${this.image}" class="card-img-top d-none d-sm-block" alt="...">

        <div class="card-footer bg-dark">
          <small class="name_style">${this.name}</small>
        </div>
        <div class="card-body">
            <p class="card-text describe_text">Gender: ${this.gender}</p>
            <p class="card-text describe_text">Age: ${this.age}</p>
            <p class="card-text describe_text">Size: ${this.size}</p>
        </div>
        <button type="button" class="btn btn-success btn-lg rounded-pill btn-vaccine" >Vaccine</button>  
            </div>            
         </div>
        </div>
      </div>`;
    }
}
class Cat extends Animal {
    constructor(name, age, gender, size, vaccine, image, breed, furColor, URLBreed) {
        super(name, age, gender, size, vaccine, image);
        this.breed = breed;
        this.furColor = furColor;
        this.URLBreed = URLBreed;
        arrayCat.push(this);
    }
    display() {
        return `<div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center my-3">
      <div class="col">
        <div class="card h-100">
          <img src="${this.image}" class="card-img-top d-none d-sm-block" alt="...">
          <div class="card-footer bg-dark">
            <small class="name_style">${this.name}</small>
          </div>
          <div class="card-body">
              <p class="card-text describe_text">Gender: ${this.gender}</p>
              <p class="card-text describe_text">Age: ${this.age}</p>
              <p class="card-text describe_text">Size: ${this.size}</p>
          </div>
          <button type="button" class="btn btn-success btn-lg btn_vaccine rounded-pill">Vaccine</button>
          <div  class="extra_info-text">
          <p class="card-text describe_text">Breed: ${this.breed}</p>
          <p class="card-text describe_text">Fur color: ${this.furColor}</p>
          <p class="card-text describe_text">Breed info: ${this.URLBreed}</p>
          </div>
        </div>
      </div>
    </div>`;
    }
}
class Dog extends Animal {
    constructor(name, age, gender, size, vaccine, image, breed, training) {
        super(name, age, gender, size, vaccine, image);
        this.breed = breed;
        this.training = training;
        arrayDog.push(this);
    }
    display() {
        return `<div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center my-3">
      <div class="col">
        <div class="card h-100">
          <img src="${this.image}" class="card-img-top d-none d-sm-block" alt="...">
  
          <div class="card-footer bg-dark">
            <small class="name_style">${this.name}</small>
          </div>
          <div class="card-body">
              <p class="card-text describe_text">Gender: ${this.gender}</p>
              <p class="card-text describe_text">Age: ${this.age}</p>
              <p class="card-text describe_text">Size: ${this.size}</p>
          </div>
          <button type="button" class="btn btn-success btn-lg btn_vaccine rounded-pill">Vaccine</button>
          <div class="extra_info-text">
          <p class="card-text describe_text">Breed: ${this.breed}</p>
          <p class="card-text describe_text">Training: ${this.training}</p>
          </div>
        </div>
      </div>
    </div>`;
    }
}
let array = [];
new Animal("Rainbow", 3, "female", "small", true, "../IMG/7-bird.jpg");
new Animal("Needle", 1, "male", "small", false, "../IMG/2-porcupine.jpg");
new Animal("Bunny", 4, "female", "small", true, "../IMG/guinea-pig-2017678_1920.jpg");
console.log(array);
for (let value of array) {
    document.getElementById("result").innerHTML +=
        value.display();
}
let arrayCat = [];
new Cat("Peach", 6, "female", "large", true, "../IMG/cat-1455468_1920.jpg", "persian", "white", "www.google.com");
new Cat("Belfi", 7, "male", "small", false, "../IMG/cat-5457315_1920.jpg", "persian", "light brown", "www.google.com");
new Cat("Shadow", 4, "male", "medium", false, "../IMG/cat-4638664_1920.jpg", "persian", "light brown", "www.google.com");
console.log(arrayCat);
for (let value of arrayCat) {
    document.getElementById("result").innerHTML +=
        value.display();
}
let arrayDog = [];
new Dog("Snowflake", 2, "female", "small", true, "../IMG/maltese-1123016_1920.jpg", "Maltese", true);
new Dog("Ace", 8, "male", "large", false, "../IMG/german-shepherd-1845744_1920.jpg", "Doberman", true);
console.log(arrayDog);
for (let value of arrayDog) {
    document.getElementById("result").innerHTML +=
        value.display();
}
// let totalArray: any = ["array", "arrayCat", "arrayDog"];
//===============================
// var color = ["green", "red"];
// function colorChange() {
//   for (let i = 0; i < totalArray.length; i++) {
//     if (totalArray[i].vaccine == true) {
//       (
//         document.querySelectorAll(".btn-vaccine")[i] as HTMLElement
//       ).addEventListener("click", function () {
//         (
//           document.querySelectorAll(".btn-vaccine")[i] as HTMLElement
//         ).style.background = color[0];
//       });
//     } else {
//       (
//         document.querySelectorAll(".btn-vaccine")[i] as HTMLElement
//       ).addEventListener("click", function () {
//         (
//           document.querySelectorAll(".btn-vaccine")[i] as HTMLElement
//         ).style.background = color[1];
//       });
//     }
//   }
// }
// colorChange();
//=======================================
// for (let i = 0; i < totalArray.length; i++) {
//   function sortAge() {
//     totalArray.sort(function (min: number, max: number) {
//       return max.age - min.age;
//     });
//   }
// }
// (document.querySelector(".link_sort") as HTMLElement).addEventListener(
//   "click",
//   function () {
//     sortAge();
//   }
// );
//==========================================
// for (let i = 0; i < array.length; i++) {
//   let btnVaccine = document.getElementsByClassName("btn_vaccine");
//   btnVaccine[i].addEventListener("click", function () {
//     if (array[i].vaccine == true) {
//       (
//         document.getElementsByClassName("btn-vaccine")[i] as HTMLElement
//       ).style.backgroundColor = "bg-info";
//     } else {
//       (
//         document.getElementsByClassName("btn-vaccine")[i] as HTMLElement
//       ).style.background = "bg-danger";
//     }
//   });
// }
//=========================================
//   for (let i = 0; i < arrayDog.length; i++) {
//     if (value.vaccine == true) {
//       (
//         document.getElementsByClassName("btn-vaccine")[i] as HTMLElement
//       ).style.background = "bg-success";
//     } else {
//       (
//         document.getElementsByClassName("btn-vaccine")[i] as HTMLElement
//       ).style.background = "bg-danger";
//     }
//   }
//=========================================
//btn color
// function clickVaccine() {
//   let btns = document.getElementsByClassName("btn-vaccine");
//   for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//       array[i].vaccine = !array[i].vaccine;
//       //   doOnClick();
//       (
//         document.querySelectorAll(".btn-vaccine")[i] as HTMLElement
//       ).style.background = "bg-danger";
//     });
//   }
// }
// function doOnClick() {
//   let btns = document.getElementsByClassName("btn-vaccine");
//   for (let i = 0; i < btns.length; i++) {}
// }
//=========================================
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-x" viewBox="0 0 16 16">
//   <path fill-rule="evenodd" d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z"/>
//   <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
//   <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
// </svg>
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
//   <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
//   <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
//   <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
// </svg>
