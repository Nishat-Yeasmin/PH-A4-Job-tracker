Answers to Questions

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 Answer:Here is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:
 (i) getElementById(): getElementById() selects an element using its unique id.It returns only one element.Since an id must be unique, it is fast and direct.
(ii) getElementsByClassName(): getElementsByClassName() selects elements using a class name.It returns an HTMLCollection (a collection of elements).It is a live
     collection, meaning it updates automatically if the DOM changes.
(iii) querySelector(): querySelector() selects elements using a CSS selector (id, class, tag, etc.).It returns only the first matching element.It is flexible because
      it supports all CSS selectors.
(iv) querySelectorAll(): querySelectorAll() also uses CSS selectors.It returns all matching elements.It returns a NodeList, which is static (does not automatically update).

2. How do you create and insert a new element into the DOM?
  Answer: To create and insert a new element into the DOM,firstly need to create the element using JavaScript. After creating it,we can add content such as text,
   attributes, or classes to make it meaningful.
    In simple steps:
    (i) Create a new HTML element.
    (ii) Add text or attributes if necessary.
    (iii) Select the parent element where it should be placed.
    (iv) Insert the new element into the DOM as a child of that parent.
    After these steps, the new element becomes part of the webpage and is visible to the user.

3. What is Event Bubbling? And how does it work?
   Answer: Event Bubbling is a process where an event starts from the target element and then moves upward to its parent elements.
   For example,
    When a user clicks a button nested inside a div, the click event occurs on the button first.The event handler for the button runs,
    and then the same event triggers on the div (parent), then the (grandparent), and finally the root. It is essential for event delegation,
   allowing developers to place a single event listener on a parent element to manage events for multiple child elements efficiently.

4. What is Event Delegation in JavaScript? Why is it useful?
   Answer: Event Delegation is a technique where add an event listener to a parent element instead of adding listeners to multiple child elements.
   The parent handles events for its children using event bubbling.
    It is useful because, It improves performance.It reduces code repetition.It works for dynamically created elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
    Answer: Here is the difference between preventDefault() and stopPropagation() methods,
   (i) preventDefault(): preventDefault() prevents the default behavior associated with an event from occurring.It does not stop the event from
       continuing its journey through the DOM. Other event listeners on the same or ancestor elements will still fire.
  (ii) stopPropagation(): stopPropagation() stops the event from moving to parent elements.It prevents event bubbling.
