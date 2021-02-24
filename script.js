const inputContainer = document.getElementById('input-container')
const countdownForm = document.getElementById('countdownForm')
const dateEl = document.getElementById('date-picker')

const countdownEl = document.getElementById('countdown')
const countdownElTitle = document.getElementById('countdown-title')
const countdownBtn = document.getElementById('countdown-button')
const timeElements = document.querySelectorAll('span') // Return an array of html elements 


let counddownTitle = ''
let countdownDate = ''
let countdownValue = Date //Date function
let countdownActive 

const second = 1000 // 1s === 1000ms
const minute = second * 60
const hour = minute * 60
const day = hour * 24
// 1 day in total milliseconds



// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0]
dateEl.setAttribute('min', today) // Can only select today or future date

//------------------------------------------// //------------------------------------------// 
// var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
// var localISOTime = (new Date(Date.now() - tzoffset)).toISOString()
// console.log(localISOTime)

// let date = new Date();
// let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0]
//------------------------------------------// //------------------------------------------// 

// Populate Countdown / Complete UT
function updateDOM(){
    countdownActive = setInterval(() => {
        const now = new Date().getTime() // getTime() return in milliseconds since midnight January 1, 1970
        const distance = countdownValue - now // countdownValue is the future date value, bigger than now
        console.log('distance', distance)
    
        
        const days = Math.floor(distance / day )  // example 4.5 days => 4days and 5 is the remainder
        const hours = Math.floor((distance % day) / hour) // use the remainder to get the whole hours
        const minutes = Math.floor((distance % hour) / minute) // use the remainder to get the whole minutes
        const seconds = Math.floor((distance % minute) / second) // use the remainder to get the whole second
        console.log(days, hours, minutes, seconds)
    
        // Populate Countdown
        countdownElTitle.textContent = `${countdownTitle}`
        timeElements[0].textContent = `${days}`
        timeElements[1].textContent = `${hours}`
        timeElements[2].textContent = `${minutes}`
        timeElements[3].textContent = `${seconds}`
    
    
        // Hide Input
        inputContainer.hidden = true
    
        //Show CountDown
        countdownEl.hidden =false
    }, second)
}



// Take Values from Form Input
function updateCountdown(e){
    e.preventDefault()
    countdownTitle = e.target[0].value  // this[0].value
    countdownDate = e.target[1].value // this[1].value
  
    // Check for valid date 
    if(countdownDate === ''){
        alert('Please select a date for countdown')
    } else {
        // Get number version of current Date, updateDOM
        countdownValue = new Date(countdownDate).getTime()  // getTime() return in milliseconds since midnight January 1, 1970
        console.log('future', countdownValue)
        updateDOM()
    }

}


// Reset All Values
function reset() {
    // Hide Countdowns, show Input
    countdownEl.hidden = true
    inputContainer.hidden = false

    // Stop the countdown
    clearInterval(countdownActive)

    // Reset values of title and date
    countdownTitle = ''
    countdownDate= ''
}


// Event Listener
countdownForm.addEventListener('submit', updateCountdown)
countdownBtn.addEventListener('click', reset)