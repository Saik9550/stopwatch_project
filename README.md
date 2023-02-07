# stopwatch_project


stopwatch_project
In this project we are using following coding technologies:

1)HTML 2)CSS 3)JAVASCRIPT

Project Summary:

We are building a stopwatch project using above technologies. we are going to have start, pause and reset buttons in index.html file and a text which displays the time in hh:mm:ss format.

We are going to fetch the references of the buttons and our timer text using document.querySelector method.
time is changed once the buttons are pressed using innerHtml property.

1)START: once the start button is clicked, then the start timer function is called which is declared in javascript file is invoked by using addEventListener method.
         Inside this function we are going to call updatetimer function for every 1000ms using setInterval. Update timer function will update the time by one second each          time it called.

PAUSE: when pause button is clicked it will pause the stop watch and displays completed time, on clicking the start it will start the stop watch from previous stopeed value

RESET: When reset is clicked it will reset the time to zero
