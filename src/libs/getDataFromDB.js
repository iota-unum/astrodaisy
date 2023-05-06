import { MongoClient } from 'mongodb'
console.log(process.env.MONGO_URI, 'MONGOOOOOOURIIIIIII')
export async function getDataFromDB(dateString) {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4, // Add this line

  })
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection('dailyhoroscopes')
  const result = await collection.find({ date: dateString}).toArray()
  client.close()
  return JSON.parse(JSON.stringify(result))
}


export async function getDataBySign(sign, dayDateString){
  console.log('CONNECTING')
  const allData = await  getDataFromDB(dayDateString)
  const signData = allData[0].horoscopes.filter(s => s.sign === sign)
  return signData
}