// const person ={
//     name:"ekhlas uddin",
//     professions:"student",
//     age:21,
//     isSingle:true
// }
// let key = Object.keys(person)
// console.log(key);
// let value = Object.values(person)
// console.log(value);

// delete person.age
// delete person["professions"]
// console.log(person);

// nested js

let student = {
  id: 101,
  name: "Rahim Hasan",
  age: 20,
  gender: "Male",
  department: {
    id: "CSE",
    name: "Computer Science and Engineering",
    faculty: "Engineering",
  },
  college: {
    name: "ABC College",
    location: {
      city: "Rangpur",
      district: "Rangpur",
      country: "Bangladesh",
    },
  },
  contact: {
    email: "rahim@example.com",
    phone: "01712345678",
  },
  guardian: {
    father: {
      name: "Abdul Karim",
      phone: "01811111111",
      occupation: "Farmer",
    },
    mother: {
      name: "Rokeya Begum",
      phone: "01922222222",
      occupation: "Teacher",
    },
  },
  result: {
    semester: "3rd",
    cgpa: 3.85,
    subjects: [
      {
        code: "CSE101",
        name: "Programming Fundamentals",
        grade: "A",
      },
      {
        code: "CSE102",
        name: "Data Structures",
        grade: "A-",
      },
      {
        code: "MAT101",
        name: "Discrete Mathematics",
        grade: "B+",
      },
    ],
  },
};
