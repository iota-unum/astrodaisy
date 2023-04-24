const cron = require('node-cron')

console.log('cron started ')

    console.log('cron started fine')
    cron.schedule('18 8 * * *', async () => {
      try {
        const response = await fetch('http://localhost:3000/api/schedule');
        console.log(response)
     
      } catch (error) {
        console.error(error);
      }
    });
  
