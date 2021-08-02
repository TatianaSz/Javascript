export const cssQuestions=[
{
question:"What is CSS?",
0:"Cascading Style Sheet.",
1:"Complete Style Sheet",
2:"Complete Sheet Style",
3:"all answers above",
correct:0     
},
{
question:"How would you select an <a> element with a \"title\" attribute?",
0:"a=title {...}",
1:"a.title {...}",
2:"a > title {...}",
3:"a[title]{...}",
correct:3     
},
{
question:"Three of these choices are true about class selectors. Which is NOT true?",
0:"Multiple classes can be used within the same element.",
1:"The same class can be used multiple times per page.",
2:"Classes can be used multiple times per page but not within the same element.",
3:"You can add multiple classes to element by separating them wih space",
correct:2     
},
{
question:"Which individual background properties are represented by: background: blue url(image.jpg) no-repeat scroll 0px 0px;?",
0:`background-color: blue;
background-image: url(image.jpg);
background-repeat: no-repeat;
background-attachment: scroll;
background-position: 0px 0px;`,
1:`background-color: blue;
background-img: url(image.jpg);
background-position: no-repeat;
background-scroll: scroll;
background-size: 0px 0px;`,
2:`background-color: blue;
background-src: url(image.jpg);
background-repeat: no-repeat;
background-wrap: scroll;
background-position: 0px 0px;`,
3:`background-color: blue;
background-src: url(image.jpg);
background-repeat: no-repeat;
background-scroll: scroll;
background-position: 0px 0px;`,
correct:0     
},
{
question:"When using position: fixed, what will the element always be positioned relative to?",
0:"the parent element with position: relative",
1:"the viewport",
2:"the parent element",
3:"the parent element with position: absolute",
correct:1     
},
{
question:"By default, a background image will repeat:",
0:"only if the background-repeat property is set to repeat",
1:"indefinitely on the horizontal axis only",
2:"never",
3:"indefinitely, vertically, and horizontally",
correct:3     
},
{
question:"When using media queries, media types are used to target a device category. Which choice lists current valid media types?",
0:"print, screen, aural",
1:"print, screen, television",
2:"print, screen, speech",
3:"print, speech, device",
correct:2     
},
{
question:"How would you make the first letter of every paragraph on the page red?",
0:"p::first-letter { color: red; }",
1:"p:first-letter { color: red; }",
2:"first-letter::p { color: red; }",
3:"first-letter:p { color: red; }",
correct:0     
},
{
question:`In this example, what is the selector, property, and value?
div{
    color:red;
}`,
0:"selector:div, property:color, value:red",
1:"selector:color, property:div, value:red",
2:"selector:div, property:red, value:color",
3:"selector:div, property:div, value:red",
correct:0     
},
{
question:"Which of these would give a block element rounded corners?",
0:"corner-curve: 10px",
1: "border-corner: 10px",
2:"border-radius: 10px",
3:"corner-radius: 10px",
correct:2     
},
{
question:"What is the rem unit based on?",
0:"The rem unit is relative to the font-size of the containing (parent) element.",
1:"The rem unit is relative to the font-size of the root element of the page.",
2:"You have to set the value for the rem unit by writing a declaration such as rem { font-size: 1px; }",
3:"The rem unit is relative to the font-size of the p element.",
correct:1     
},
{
question:"Which of the following is NOT a valid color value?",
0:"color: #000;",
1:"color: rgb(0,0,0);",
2:"color: #000000;",
3:"color: 000000;",
correct:3     
},
{
question:`What is the vertical gap between the two elements below?
<div style="margin-bottom: 2rem;">Div 1</div>
<div style="margin-top: 2rem;">Div 2</div>`,
0:"2rem",
1:"3rem",
2:"4rem",
3:"no gap",
correct:0     
},
{
question:"When using the Flexbox method, what property and value is used to display flex items in a column?",
0:"flex-flow: column; or flex-direction: column;",
1:"flex-flow: column;",
2:"flex-column: auto;",
3:"flex-direction: column;",
correct:0     
},
{
question:"What is the difference between display:none and visibility:hidden?",
0:"None",
1:"Display:none hides the element from view and removes it from the flow of the document. visibility:hidden will hide the element but maintains the space it occupied.",
2:"Both will hide the element on the page, but display:none has greater browser support.",
3:"Display:none hides the elements but maintains the space. Visibility:hidden will hide the element from view and remove it from the normal flow of the document",
correct:1     
},
{
question:"What selector and property would you use to scale an element to be 50% smaller on hover?",
0:"element:hover {scale: 0.5;}",
1:"element:hover {scale: 50%;}",
2:"element:hover {transform: scale(50%);}",
3:"element:hover {transform: scale(0.5);}",
correct:3     
},
{
question:`If the width of the container is 500 pixels, what would the width of the three columns be in this layout?
{ display: grid; grid-template-columns: 50px 1fr 2fr; }`,
0:"50px, 200px, 300px",
1:"50px, 100px, 200px",
2:"50px, 150px, 300px",
3:"50px, 50px, 100px",
correct:2     
},
{
question:"What is the difference between the margin and padding properties?",
0:"Margin adds space around and inside of an element; padding adds space only inside of an element.",
1:"Margin adds space around an element; padding adds apace inside of an element.",
2:"Margin adds a line around an element, padding adds space inside of an element.",
3:"Margin adds space inside of an element, padding adds space around an elemen",
correct:1     
},
{
question:"How to add a padding value of 10 pixels on the top and bottom, and 0 pixels on the left and right?",
0:"padding: 10px 10px 0px 0px;",
1:"padding: 10px 0px;",
2:"padding: 10px 0px 5px 5px;",
3:"padding: 10px 0px 0px 10px;",
correct:1     
},


];