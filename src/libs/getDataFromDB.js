import { MongoClient } from 'mongodb'
console.log(process.env.MONGO_URI, 'MONGOOOOOOURIIIIIII')
export async function getDataFromDB(dateString) {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = client.db(process.env.DB_NAME)
  const collection = db.collection('dailyhoroscopes')
  const result = await collection.find({ date: dateString}).toArray()
  client.close()
  return JSON.parse(JSON.stringify(result))
}