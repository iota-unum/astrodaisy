// const today = '2023-04-20'
const today = getNowDateStr()


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
  export function getNowDateStr() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const dateStr = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return dateStr;
  }
  
  
  // export function getTodayYesterdayTomorrow(dateColons){
  // const today =  formatColonsToJsDashes(dateColons)


  // return {today, yesterday: subtractOneDay(today), tomorrow: addOneDay(today)}

  // }
  export function getTodayYesterdayTomorrow(){
  const todayString =  today


  return {today:todayString, yesterday: subtractOneDay(today), tomorrow: addOneDay(today)}

  }