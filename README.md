1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: getElementByID returns a single element that contains that unique ID, getElementsByClassName returns all the class that has specific class name. querySelector returns only the first match of the selected CSS selector. querySelectorAll returns all the elements of that CSS selector. 


2. How do you create and insert a new element into the DOM?
ans: 
const newDiv = document.createElement('div');
newDiv.innerHTML = "Hello World!";
parent.appendChild(newDiv)



3. What is Event Bubbling? And how does it work?
ans: 
When we click an element, it doesn't just stay there. It bubbles up to its parent until hits the window. 

4. What is Event Delegation in JavaScript? Why is it useful?
ans: We use Event Bubbling to get the element instead of adding event listener to every element. 

5. What is the difference between preventDefault() and stopPropagation() methods?
ans: 
event.preventDefault(): Stops the browser's default behavior.
event.stopPropagation(): Stops the event from traveling.
