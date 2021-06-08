
function startTime() {
    let today = new Date();
  let date = today.getDate();
  let year = today.getFullYear();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  const h = new Array();
  h[0] = "12";
  h[1] = "1";
  h[2] = "2";
  h[3] = "3";
  h[4] = "4";
  h[5] = "5";
  h[6] = "6";
  h[7] = "7";
  h[8] = "8";
  h[9] = "9";
  h[10] = "10";
  h[11] = "11";
  h[12] = "12";
  h[13] = "1"; // Success...... yooo
  h[14] = "2";
  h[15] = "3";
  h[16] = "4";
  h[17] = "5";
  h[18] = "6";
  h[19] = "7";
  h[20] = "8";
  h[21] = "9";
  h[22] = "10";
  h[23] = "11";
  h[24] = "12";
  let hrs = h[today.getHours()];
  const m = new Array();
  m[0] = "January";
  m[1] = "February";
  m[2] = "March";
  m[3] = "April";
  m[4] = "May";
  m[5] = "June";
  m[6] = "July"; // success..... - W3school -
  m[7] = "August";
  m[8] = "September";
  m[9] = "October";
  m[10] = "November";
  m[11] = "December";
  let month = m[today.getMonth()];
  const d = new Array();
  d[0] = "Sunday";
  d[1] = "Monday"; // Success .... yoo                      but w3 school has some stuff- try - https://www.w3schools.com/jsref/jsref_todatestring.asp
  d[2] = "Tuesday";
  d[3] = "Wednesday";
  d[4] = "Thursday";
  d[5] = "Friday";
  d[6] = "Saturday";
  let day = d[today.getDay()];
  
  document.querySelector(".time").innerHTML = hrs + ":" + min + ":" + sec;
  const dateDisplay = document.querySelector(".date");
  const dayDisplay = document.querySelector(".day");
  dateDisplay.innerHTML = `${date}-${month}-${year}`;
  dayDisplay.innerHTML = `${day} `;
  
  
    var t = setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }
  