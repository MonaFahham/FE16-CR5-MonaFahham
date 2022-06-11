# FE16-CR5-MonaFahham

This is a pet shop website.
In this project, I have created a website displaying all the wonderful animals such as cats, dogs and similar. 
To achieve this, I create a TypeScript-based system that presents all of the animals in an engaging manner on a web page.
I create the class Animal. The properties are: name, gender, size, age, vaccine (“yes”/ “no” or true/false) and image. 
I also create the display() method.
An array has been created to store all objects related to this parent class. At least 2 objects from various animals must be created from this class.
I create the class Cat. This class is extended from the Animal class and have extra properties: breed, fur color and URL breed information. 
3 Cat’s objects are being created by using the constructor method and saved in the array of objects (JSON has not been used in this projects)
I did the same for Dog cass.
as vaccine property is common for all animals, the vaccine button have a green background colour if the animal is vaccinated or red background colour otherwise. 
every time the vaccine button for a specific animal is clicked the vaccination status(vaccine property) of that animal should toggle between vaccinated and not vaccinated.
I also create an ascending button available in the navbar that will organise the animals shown on the screen by agecreate an ascending button available in the navbar that will organise the animals shown on the screen by age.
