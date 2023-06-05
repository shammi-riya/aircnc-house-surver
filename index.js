
const express = require('express')
const app = express()
const port =process.env.PORT||5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config()
const cors = require("cors")





app.use(cors())
app.use(express.json())





const uri = `mongodb+srv://${process.env.airCncUser}:${process.env.airCncPass}@cluster0.f4myxpg.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection

    const userCollection = client.db('aircnc-house').collection('users');
    const roomCollection = client.db('aircnc-house').collection('rooms');
   



    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('sircnc house!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
