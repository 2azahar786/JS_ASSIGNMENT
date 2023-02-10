

function addLeadingZeros(n) {
    if (n <= 9) {
      return "0" + n;
    }
    return n
  }
  let currentDatetime = new Date()
  console.log(currentDatetime.toString());

//   - YYYY-MM-DD HH:mm
  let formattedDate = currentDatetime.getFullYear() + "-" + addLeadingZeros(currentDatetime.getMonth() + 1) + "-" + addLeadingZeros(currentDatetime.getDate()) + " " + addLeadingZeros(currentDatetime.getHours()) + ":" + addLeadingZeros(currentDatetime.getMinutes()) 
  console.log(formattedDate);

//   DD-MM-YYYY HH:mm
  let formattedDate2 = addLeadingZeros(currentDatetime.getDate()) + "-" + addLeadingZeros(currentDatetime.getMonth() + 1) + "-" + currentDatetime.getFullYear() + " " + addLeadingZeros(currentDatetime.getHours()) + ":" + addLeadingZeros(currentDatetime.getMinutes()) 
console.log(formattedDate2);

//  DD/MM/YYYY HH:mm
let formattedDate3 = addLeadingZeros(currentDatetime.getDate()) + "/" + addLeadingZeros(currentDatetime.getMonth() + 1) + "/" + currentDatetime.getFullYear() + " " + addLeadingZeros(currentDatetime.getHours()) + ":" + addLeadingZeros(currentDatetime.getMinutes()) 
console.log(formattedDate3);