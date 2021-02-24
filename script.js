const inputContainer = document.getElementById('input-container')
const countdownForm = document.getElementById('countdownForm')
const dateEl = document.getElementById('date-picker')

const countdownEl = document.getElementById('countdown')
const countdownElTitle = document.getElementById('countdown-title')
const countdownBtn = document.getElementById('countdown-button')
const timeElements = document.querySelectorAll('span') // Return an array of html elements 

const completeEl = document.getElementById('complete')
const completeElInfo = document.getElementById('complete-info')
const completeBtn = document.getElementById('complete-button') 


let counddownTitle = ''
let countdownDate = ''
let countdownValue = Date //Date function
let countdownActive 

let savedCountdown 

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
        // console.log('distance', distance)
    
        const days = Math.floor(distance / day )  // example 4.5 days => 4days and 5 is the remainder
        const hours = Math.floor((distance % day) / hour) // use the remainder to get the whole hours
        const minutes = Math.floor((distance % hour) / minute) // use the remainder to get the whole minutes
        const seconds = Math.floor((distance % minute) / second) // use the remainder to get the whole second
        // console.log(days, hours, minutes, seconds)
    
        // Hide Input
        inputContainer.hidden = true

        // If the countdown has ended, show complete
        if (distance < 0){
            countdownEl.hidden = true
            clearInterval(countdownActive)
            completeElInfo.textContent = `${countdownTitle} finished on ${countdownDate}`
            // Show Complete
            completeEl.hidden = false
        } else {
            // Show the countdown in progress
            // Populate Countdown
            countdownElTitle.textContent = `${countdownTitle}`
            timeElements[0].textContent = `${days}`
            timeElements[1].textContent = `${hours}`
            timeElements[2].textContent = `${minutes}`
            timeElements[3].textContent = `${seconds}`
            completeEl.hidden = true
            //Show CountDown
            countdownEl.hidden =false
        }
    }, second)
}



// Take Values from Form Input
function updateCountdown(e){
    e.preventDefault()
    countdownTitle = e.target[0].value  // this[0].value
    countdownDate = e.target[1].value // this[1].value
  
    savedCountdown = {
        title: countdownTitle,
        date: countdownDate
    }
    // localStorgae Objects must be saved as a String. Else it gives back [object object]
    localStorage.setItem('countdown', JSON.stringify(savedCountdown)) 

    // Check for valid date 
    if(countdownDate === ''){
        alert('Please select a date for countdown')
    } else {
        // Get number version of future Date, updateDOM
        countdownValue = new Date(countdownDate).getTime()  // getTime() return in milliseconds since midnight January 1, 1970
        // console.log('future', countdownValue)
        updateDOM()
    }

}


// Reset All Values
function reset() {
    // Hide Countdowns, show Input
    countdownEl.hidden = true
    completeEl.hidden = true
    inputContainer.hidden = false

    // Stop the countdown
    clearInterval(countdownActive)

    // Reset values of title and date
    countdownTitle = ''
    countdownDate= ''
    localStorage.removeItem('countdown')
}


function restorePreviousCountdown(){
    // Get countdown from localStorage if available / true
    if(localStorage.getItem('countdown')){
        inputContainer.hidden = true
        savedCountdown = JSON.parse(localStorage.getItem('countdown'))
        countdownTitle = savedCountdown.title
        countdownDate = savedCountdown.date
        // Plug back the future date back into countdownValue
        countdownValue = new Date(countdownDate).getTime()
        updateDOM()
    }
}


// Event Listener
countdownForm.addEventListener('submit', updateCountdown)
countdownBtn.addEventListener('click', reset)
completeBtn.addEventListener('click', reset)


// On Load, check localStorage
restorePreviousCountdown()