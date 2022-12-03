const { MongoClient, ServerApiVersion } = require('mongodb')
const { DATABASE_URL } = require('./config')
let _db
const mongoConnet = (callBack) => {
  MongoClient.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  })
    .then((client) => {
      console.log('connected')
      _db = client.db('invoicing')
      callBack(client)
    })
    .catch((err) => {
      console.error('error')
      console.error(err)
      throw err
    })
}

const GetDb = () => {
  if (_db) {
    return _db
  }
  throw 'no database found yet'
}

exports.mongoConnet = mongoConnet
exports.GetDb = GetDb
