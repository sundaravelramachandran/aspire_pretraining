// // alert('Hwlooe');
// // for (let i=0 ; i<=10;i++){
// //     if (i%2==0){
        
// //     }
// // }
// let students = [{name:"sundar",age:'10',phone:'6374070014',marks:90},
//     {name:"Prbhakar",age:'11',phone:'6374070015',marks:95},
//     {name:"Suresh",age:'12',phone:'6374070016  ',marks:85},
//     {name:"Ramesh",age:'13',phone:'6374070017',marks:80}   
    

// ]
// for(let i=0;i<students.length;i++){
//     console.log(students[i]["name"]);
//     console.log(students[i].age);
//     console.log(students[i].phone);
//         if(students[i].marks>=35)
//             {
//             console.log("You are passed");
//             }
//         else if(students[i].marks<90 && students[i].marks>=80){
//             console.log("You are in second class");

//         }
//         else{
//             console.log("You are failed");
//         }
//     }

//     let arr=['sundar','prabhakar','suresh','ramesh'];
//     let arr2=['ram','shyam','mohan'];
//     let arr1=arr.join('@');
//     console.log(arr1);
//     console.log(arr.sort());
//     console.log(arr.slice(1,2));
//     console.log(arr.reverse());
//     console.log(arr.indexOf('sundar'));
//     console.log(arr.length);
//     console.log(arr.pop());
//     console.log(arr.shift ());
//     console.log(arr);
//     console.log(arr.concat(arr2));
//     console.log(arr.includes('suresh'));

//     console.log(new date());
let NumberofStudents = prompt("Enter the number of students");
let students = [];
for (let i = 0; i < NumberofStudents; i++) {
    let name = prompt("Enter name:");
    let age = parseInt(prompt("Enter age:") );
    let phone = prompt("Enter phone:");
    let marks = prompt("Enter marks:");
    students.push({ name, age, phone, marks });
}
function youngestPerson(students){
    let ages=[]
    for (let iteration=0;iteration<students.length;iteration++){
        ages.push(students[iteration].age);
    }
    let minAge = Math.min(...ages);
    let index = ages.indexOf(minAge);
    return students[index];
}
let result= youngestPerson(students);
console.log("the youngest person ");
console.log("Name:"+result.name);
console.log("Age:"+result.age);
console.log("Phone:"+result.phone);
console.log("Marks:"+result.marks);
