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
        <button type="button" class="btn bg-${this.vaccine ? "success" : "danger"} btn-lg rounded-pill btn-vaccine" id="ChangeTest">
        ${this.vaccine
            ? "Vaccine <img src='../IMG/vaccine1.jpg' class='vac_icon'/>"
            : "Not Vaccine <img src='../IMG/novaccine.png' class='vac_icon'>"}
        </button>  
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
          <button type="button" class="btn bg-${this.vaccine ? "success" : "danger"} btn-lg rounded-pill btn-vaccine">
          ${this.vaccine
            ? "Vaccine <img src='../IMG/vaccine1.jpg' class='vac_icon'/>"
            : "Not Vaccine <img src='../IMG/novaccine.png' class='vac_icon'>"}
          </button>
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
          <button type="button" class="btn bg-${this.vaccine ? "success" : "danger"} btn-lg rounded-pill btn-vaccine">
          ${this.vaccine
            ? "Vaccine <img src='../IMG/vaccine1.jpg' class='vac_icon'/>"
            : "Not Vaccine <img src='../IMG/novaccine.png' class='vac_icon'>"}
          </button>
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
// console.log(array);
for (let value of array) {
    document.getElementById("result").innerHTML +=
        value.display();
}
let arrayCat = [];
new Cat("Peach", 6, "female", "large", false, "../IMG/cat-1455468_1920.jpg", "persian", "white", "www.google.com");
new Cat("Belfi", 7, "male", "small", true, "../IMG/cat-5457315_1920.jpg", "persian", "light brown", "www.google.com");
new Cat("Shadow", 4, "male", "medium", false, "../IMG/cat-4638664_1920.jpg", "persian", "light brown", "www.google.com");
// console.log(arrayCat);
for (let value of arrayCat) {
    document.getElementById("result").innerHTML +=
        value.display();
}
let arrayDog = [];
new Dog("Snowflake", 2, "female", "small", true, "../IMG/maltese-1123016_1920.jpg", "Maltese", true);
new Dog("Ace", 8, "male", "large", false, "../IMG/german-shepherd-1845744_1920.jpg", "Doberman", true);
// console.log(arrayDog);
for (let value of arrayDog) {
    document.getElementById("result").innerHTML +=
        value.display();
}
// Sort Animal Age
function sortAge() {
    array.sort(function (min, max) {
        return max.age - min.age;
    });
    document.getElementById("result").innerHTML = "";
    sortedCarts();
}
document.getElementById("link_sort").addEventListener("click", function () {
    sortAge();
});
function sortedCarts() {
    array.forEach((value) => {
        document.getElementById("sort_animal_age").innerHTML +=
            value.display();
    });
}
// Change Carts Colors
// function colorChange() {
//   let i: number;
//   let colorBtns: any = document.getElementsByClassName("btn_vaccine");
//   for (let i = 0; i < colorBtns.length; i++) {
//     colorBtns[i].addEventListener("click", function () {
//       array[i].vaccine = !array[i].vaccine;
//       (
//         document.querySelectorAll(".btn-vaccine")[i] as HTMLElement
//       ).style.background = "bg-danger";
//       colorBtns[i] == "bg-success" ? "bg-danger" : "bg-success";
//     });
//   }
// }
// colorChange();
