const cron = require('node-cron')

console.log('cron started ')

    console.log('cron started fine')
    cron.schedule('*/1 * * * *', async () => {
      try {
        const response = await fetch('http://localhost:3000/api/handleImage');
        const tweet = await fetch('http://localhost:3000/api/tweetTest')
        const data = await response.json();
        console.log(tweet)
        console.log(data); // or do something else with the data
      } catch (error) {
        console.error(error);
      }
    });
  
