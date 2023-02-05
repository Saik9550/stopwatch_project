// In this code we are going to use simple Javascript functions

// first we are going t get all the elements with the specific ids given in index.html file and store them in const
// we can use either getElementById orquerySelector methods to fetch the elemnts

// sample syntax if we want to use getElementById as follows documwnt.getElemrntById("timer");

const timerDisplay = document.querySelector("#timer")
const startButton = document.querySelector("#start")
const pauseButton = document.querySelector("#pause")
const resetButton = document.querySelector("#reset")

// intially we are going to assume our stopwatch is not running(like when our page is initially loaded)
let running = false

// we are going to use a variable to control the timing of the stopwatch
let interval
let CompletedTime = 0

function startTimer() {
  if (!running) {
    running = true

    // setInterval function is called every 10ms
    interval = setInterval(updateTimer, 1000)
  }
}

function pauseTimer() {
  // in this function we are going to make the running tofalse and we are going to clear the setInterval function
  //
  if (running) {
    running = false
    clearInterval(interval)
  }
}

function resetTimer() {
  // once the reset button is pressed pauseTimer is called
  pauseTimer()
  CompletedTime = 0
  displayTime()
}

function updateTimer() {
  // for every 10milliseconds this function is called and will increase the elapsed time by 1
  CompletedTime++
  console.log(CompletedTime)
  displayTime()
}

function displayTime() {
    // we know that 3600 seconds makes one hour hence dividing completed time by 3600 and getting the floor value
    // Math.floor gives the largest integer less than or equal to given number
    //  is less than 10. If it is, a 0 is added to the left of the number to
    //  make it 2 digits long. This ensures that the hours is displayed in the format of hh
  const hours = (Math.floor(CompletedTime / 3600) < 10) ? '0' + Math.floor(CompletedTime / 3600) : Math.floor(CompletedTime / 3600)


//   in below code we are going to get remainder first
//  when completed time is divided by 3600 it gives a remainder in number of seconds
// to convert seconds into minutes we divide it by 60 
  const minutes = (Math.floor((CompletedTime % 3600) / 60) < 10) ? '0' + Math.floor((CompletedTime % 3600) / 60) : Math.floor((CompletedTime % 3600) / 60);


//   in below code we are going to get the remainder when completed time is divided by 60 
  const seconds = ((CompletedTime % 60)<10) ? '0'+ CompletedTime % 60 : CompletedTime % 60;
  //   const milliseconds = elapsedTime % 100

  timerDisplay.innerHTML = `${hours}:${minutes}:${seconds}`
}

// The addEventListener() method attaches an event handler to an element.
// addEventListener method takes two arguments , first argument is the event and second argument is a function when the event occurs
// in our project event is a click event and respective functions are called on clicking the buttons
startButton.addEventListener("click", startTimer)
pauseButton.addEventListener("click", pauseTimer)
resetButton.addEventListener("click", resetTimer)
