/*

You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.

Write a function that takes in a collection of (student ID number, course name) pairs and returns, for every pair of students, a collection of all courses they share.

Sample Input:

student_course_pairs_1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]

Sample Output (pseudocode, in any order):

find_pairs(student_course_pairs_1) =>
{
  "58,17": ["Software Design", "Linear Algebra"]
  "58,94": ["Economics"]
  "58,25": ["Economics"]
  "94,25": ["Economics"]
  "17,94": []
  "17,25": []
}



Additional test cases:

Sample Input:

student_course_pairs_2 = [
  ["42", "Software Design"],
  ["0", "Advanced Mechanics"],
  ["9", "Art History"],
]

Sample output:

find_pairs(student_course_pairs_2) =>
{
  "0,42": []
  "0,9": []
  "9,42": []
}



n: number of student,course pairs in the input
s: number of students
c: number of courses being offered

*/

"use strict";




function find_pairs(studentCoursePairs){
  
  let myMap = new Map()
  var studentIds = [] //add to this array for every course 
  
  for(let i = 0; i < studentCoursePairs.length; i++){
    var string = studentCoursePairs[i]
    var studentID = string[0]
    var course = string[1]
    
    if(!myMap.has(course)){
      let array = []
      array.push(studentID)
      myMap.set(course, array)
    } else {
      let array = myMap.get(course) //get the value from key 
      array.push(studentID) //push another 
      myMap.set(course,array) 
    }
  }
  
  
  myMap.forEach((value, key) => {
     
    if(value.length === 2){
      f
    }

  });
  
  
  
  
}



const studentCoursePairs1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"]
];

const studentCoursePairs2 = [
  ["42", "Software Design"],
  ["0", "Advanced Mechanics"],
  ["9", "Art History"]
];


find_pairs(studentCoursePairs1)