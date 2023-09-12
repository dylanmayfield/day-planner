// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

$('.time-block').each(function (index, timeBlock) {
  const plannedHour = timeBlock.getAttribute('data-hour');
  const actualHour = dayjs().hour();
  //console.log(actualHour)
  

  if (plannedHour > actualHour) {
    timeBlock.classList.add('future')
  } else if (plannedHour < actualHour) {
    timeBlock.classList.add('past')
  } else {
    timeBlock.classList.add('present')
  }

  // add event listener
  timeBlock.addEventListener('click', function (event)  {
    if(event.target.matches('button')) {
      console.log("clicked button");
      console.log(event.target);
      saveSchedule(event)
    }
  });
});

// <!-- someElement.id => split('-') => Get [1] -->
// <!-- Compare that with the hour which is from actualHour-->
// <!-- If less than, equal, or greater than... that's when you add the right class past, present, or future -->
// let time = docutment.querySelector(".row time-block past");


  // updated schedules
  for(var i = 0; i<localStorage.length; i++) {
   
    const key = localStorage.key(i); // eg. hour-10
    const localStorageValue = localStorage.getItem(key); // eg. brunch
  
    console.log(key)
    console.log(localStorageValue.trim())
  
    document.querySelector("#"+key).querySelector(".description").value = localStorageValue.trim();
    // console.log(someElement.textContent) // READING from the webpage
    // someElement.textContent = "Updated text" // WRITING to the webpage
   } // for
  

  function saveSchedule(event) {
    const hour = event.target.parentElement.getAttribute("data-hour");
    const text = event.target.parentElement.querySelector(".description").value;
 
    console.log("hour", hour)
    console.log("text", text)
  

    localStorage.setItem("hour-"+hour, text)

  } // saveSchedule

  let dateNow = new Date() // set variable for new date
  
  dateNow = dateNow.toString() // converting date into string
  
  dateNow = dateNow.split(' ') // converting string to array

  dateNow = dateNow.slice(0,5) // telling what to keep in array
  
  dateNow = dateNow.join(' ') // change back to string, added space where items were stringed together
  // $("#currentDay").text(currentDay.format('dddd, MMMM D'))
  $("#currentDay").text(dateNow)

});
 

