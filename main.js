//console.log 1-1000
const thousand = () => {
    let number = 0;

    do {
        number += 1;
        console.log(number)
    } while (number < 1000)
}

thousand();

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  }
  for (let key in person) {
    if (key == "birthDate"){
      let birthYear = person["birthDate"].match(/\d{4}/);
      if (birthYear % 2 != 0){
        console.log(person["birthDate"]);
      }
    }
  }

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
const onlyDudes = arrayOfPersons.filter(elem => elem.gender == "male");
console.log(onlyDudes);
const beforeNineties = arrayOfPersons.filter(
	(birthYear) => birthYear["birthDate"].match(/\d{4}/) < "1990"
);

console.log(beforeNineties);