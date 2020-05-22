//console.log 1-1000
const thousand = () => {
    let number = 0;

    do {
        number += 1;
        console.log(number)
    } while (number < 1000)
}

thousand();

let person = {firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};


let arrayOfPersons = [
  {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
},
{
  firstName: "John",
  lastName: "Smith",
  birthDate: "Nov 15, 1935",
  gender: "male"
},
{
  firstName: "Jessie",
  lastName: "Perez",
  birthDate: "Feb 5, 1872",
  gender: "female"
},
{
  firstName: "Billy",
  lastName: "Kid",
  birthDate: "Jul 23, 2018",
  gender: "male"
}
]
const newArray = arrayOfPersons.map(elem => elem.firstName)
console.log(newArray)