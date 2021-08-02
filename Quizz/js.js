export const jsQuestions=[
    {
    question:"Which operator returns true if the two compared values are not equal?",
    0:"<>",
    1:"==",
    2:"=",
    3:"!==",
    correct:3     
    },
    {
    question:"How is a forEach statement different from a for statement?",
    0:"A for statement is generic, but a forEach statement can be used only with an array.",
    1:"Only a forEach statement lets you specify your own iterator.",
    2:"They are not different and can be used always",
    3:"Only a for statement uses a callback function.",
    correct:0     
    },
    {
    question:"Which statement is the correct way to create a variable called foo and assign it the value 100?",
    0:"100 = let foo;",
    1:"let 100 = foo;",
    2:"let foo = 100;",
    3:"foo = 100;",
    correct:2     
    },
    {
    question:"Which statement creates a new Animal object called \"lion\"",
    0:"const lion = new Animal();",
    1:"lion = new Animal();",
    2:"const lion = Animal();",
    3:"const lion = add new Animal();",
    correct:0     
    },
    {
    question:"How does a function create a closure?",
    0:"It reloads the document whenever the value changes.",
    1:"It returns a reference to a variable in its parent scope.",
    2:"It completes execution without returning.",
    3:"It copies a local variable to the global scope.",
    correct:1     
    },
    {
    question:`What is the result in the console of running this code?
    'use strict';
    function logThis() {
    this.desc = 'logger';
    console.log(this);}
    new logThis();`,
    0:"undefined",
    1:"it will throw an error",
    2:"{desc: \"logger\"}",
    3:"window",
    correct:2     
    },
    {
    question:`What would be the result in the console of running this code?
    for (var i = 0; i < 5; i++) {
    console.log(i);}`,
    0:"12345",
    1:"012345",
    2:"01234",
    3:"1234",
    correct:2     
    },
    {
    question:`What will be logged to the console?
    let arr = ['dog', 'cat', 'hen'];
    arr[100] = 'fox';
    console.log(arr.length);`,
    0:"3",
    1:"101",
    2:"100",
    3:"4",
    correct:1     
    },
    {
    question:`What will be logged to the console?  
    const animal = {type:'dog'};
    animal.type = 'fox';
    console.log(animal.type);`,
    0:"fox",
    1:"dog",
    2:"undefined",
    3:"it will throw an error",
    correct:0     
    },
    {
    question:`What does the following expression evaluate to?
    [] == [];`,
    0:"true",
    1:"undefined",
    2:"NaN",
    3:"false",
    correct:3     
    },
    // {
    // question:"",
    // 0:"",
    // 1:"",
    // 2:"",
    // 3:"",
    // correct:     
    // },
    // {
    // question:"",
    // 0:"",
    // 1:"",
    // 2:"",
    // 3:"",
    // correct:     
    // },
    // {
    // question:"",
    // 0:"",
    // 1:"",
    // 2:"",
    // 3:"",
    // correct:     
    // },
    // {
    // question:"",
    // 0:"",
    // 1:"",
    // 2:"",
    // 3:"",
    // correct:     
    // },
    



// {
// question:"",
// 0:"",
// 1:"",
// 2:"",
// 3:"",
// correct:     
// },



];