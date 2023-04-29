// const today = '2023-04-21'
const today = getNowDateStr()
console.log('DATESTRING', today)

export function formatItalianDate(dateStr) {
    const [year, month, day] = dateStr.split(':').map(Number);
    const dateObj = new Date(year, month - 1, day);
    const italianDate = dateObj.toLocaleDateString("it-IT", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  
    return italianDate;
  }
  // export function formatColonsToJsDashes(dateStr) {
  //   const [year, month, day] = dateStr.split(':').map(Number);
  //   const dateObj = new Date(year, month - 1, day);
  //   const formattedStr = dateObj.toISOString().slice(0, 10);
  
  //   return formattedStr;
  // }
    
  export function formatColonsToJsDashes(dateStr) {
    const [year, month, day] = dateStr.split(':').slice(0, 3);
    const date = new Date(`${year}-${month}-${day}`);
    const formattedDate = date.toISOString().slice(0, 10);
    return formattedDate;
  }
  
  export function addOneDay(dateStr) {
    const dateObj = new Date(dateStr);
    dateObj.setDate(dateObj.getDate() + 1);
    const formattedStr = dateObj.toISOString().slice(0, 10);
    return formattedStr;
  }
  

  export function subtractOneDay(dateStr) {
    const dateObj = new Date(dateStr);
    dateObj.setDate(dateObj.getDate() - 1);
    const formattedStr = dateObj.toISOString().slice(0, 10);
    return formattedStr;
  }
  // export function getNowDateStr() {
  //   const now = new Date();
  //   const year = now.getFullYear();
  //   const month = now.getMonth() + 1;
  //   const day = now.getDate();
  //   const dateStr = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  //   return dateStr;
  // }
  export function getNowDateStr() {
    const nowString = new Date().toLocaleString('en-US', { timeZone: 'Europe/Rome' });
    const now = new Date(nowString);
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const dateStr = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return dateStr;
  }
  
  
  // export function getNowDateStr() {
  //   const now = new Date();
  //   const options = { timeZone: 'Europe/Rome', year: 'numeric', month: '2-digit', day: '2-digit' };
  //   const [year, month, day] = now.toLocaleDateString('en-US', options).split('/');
  //   const dateStr = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  //   return dateStr;
  // }
  
  
  // export function getTodayYesterdayTomorrow(dateColons){
  // const today =  formatColonsToJsDashes(dateColons)


  // return {today, yesterday: subtractOneDay(today), tomorrow: addOneDay(today)}

  // }
  export function getTodayYesterdayTomorrow(){
  const todayString =  today


  return {today:todayString, yesterday: subtractOneDay(today), tomorrow: addOneDay(today)}

  }


 export function getItalianTimestamp() {
    const days = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
    const now = new Date();
    const day = days[now.getDay()];
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');
    return `${day} ${hour}:${minute}:${second}`;
  }



  export function getFormattedDate(daysOfDifference = 0){
    //daysOfDifference set 0 for today +1 for tomorrow -1 for yesterday -2 2days ago

    // const difference = chooseDay === "tomorrow"  ? 1 : chooseDay === 'yesterday' ? -1 : 0

    const now = new Date().toLocaleString('en-US', { timeZone: 'Europe/Rome' });
    const today = new Date(now)
   const chosenDay = new Date(today)
   chosenDay.setDate(chosenDay.getDate() + daysOfDifference)
    const year = chosenDay.getFullYear();
    const month = (chosenDay.getMonth() + 1).toString().padStart(2, '0'); // pad with leading zero if less than 10
    const day = chosenDay.getDate().toString().padStart(2, '0'); // pad with leading zero if less than 10
    
    const colons = `${year}:${month}:${day}:12:00`; // e.g. "2021-05-14"
   const dashes = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-12-00`;
    return {dateColons:colons,dateDashes: dashes}
}
  