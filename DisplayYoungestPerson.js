let students=[
    {name:"sundar", age:10, phone:'6374070014', marks:90},
    {name:"Prabhakar", age:11, phone:'6374070015', marks:95},
    {name:"Suresh", age:12, phone:'6374070016', marks:85},
    {name:"Ramesh", age:13, phone:'6374070017', marks:80}
];
function findYoungestPerson(students) { // Function to find the youngest person in the array of students
    if (students.length === 0) {
        console.log("No students found");
    }
    let youngest = [];
    for (let i = 0; i < students.length; i++) {
        youngest.push(students[i].age);
    }
    let minAge = Math.min(...youngest);
    let finage=youngest.indexOf(minAge);
    return students[finage];
}
console.log(findYoungestPerson(students));
// Output: {name: "sundar", age: 10, phone: "6374070014", marks: 90}
