# Countdown
https://dong-yi-xia.github.io/ZTM_Project_09_Countdown/

## Resource
Stock Video background<br>
https://pixabay.com/videos/<br>

Video Compressor <br>
https://www.youcompress.com/<br>

Form<br>
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms/Basic_form_hints<br>

Date Input<br>
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date<br>

Date and Time Object<br>
https://www.w3schools.com/jsref/jsref_obj_date.asp<br>

Date to String<br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString<br>
toISOString() - international standard format. || YYYY-MM-DDTHH:mm:ss.sssZ || "2021-02-24T21:39:12.461Z"<br>
toString() - local time zone format. ||"Wed Feb 24 2021 16:37:48 GMT-0500 (Eastern Standard Time)”<br>
toLocaleString() - local date and time.|| MM/DD/YY HH:MM:SS AM/PM || "2/24/2021, 4:36:02 PM"<br>
let date = new Date(); <br>
let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")<br>


preventDefault<br>
https://www.w3schools.com/jsref/event_preventdefault.asp<br>
The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.<br>


Timing Events<br>
https://www.w3schools.com/js/js_timing.asp<br>
setInterval(function, milliseconds) repeats the execution of the function continuously<br>
clearInterval() method stops the executions of the function specified in the setInterval() method.<br>

JSON.stringify()<br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify<br>
Convert json object into a  json string<br>

JSON.parse()<br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse<br>
Convert json string back into json object <br>

localStorage <br>
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage<br>
localStorage.setItem(‘key’, ‘value’)<br>
localStorage.getItem(‘key’)<br>
localStorage.removeItem(‘key’)   <br>

