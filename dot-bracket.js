const student = {
  name: "rasel",
  1: 50,
  "home-address": "gaibandha",
  marks: 90,
};

// dot notation
const studentName = student.name;
// bracket notation
const studentName2 = student["name"];

console.log(student["home-address"]);

for (const key in student) {
  const value = student[key];
}

const propName = "marks";
console.log(student[propName]);
