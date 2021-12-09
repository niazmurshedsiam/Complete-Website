const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bm8mo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
console.log(uri);

const app = express()

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('doctors'));
app.use(fileUpload());

const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const appointmentCollection = client.db("doctorsInformationPortal").collection("appointment");
  const doctorCollection = client.db("doctorsInformationPortal").collection("doctors");
  app.post('/addAppointment',(req,res)=>{
      const appointment = req.body;
      console.log(appointment);
      appointmentCollection.insertOne(appointment)
      .then(result=>{
          res.send(result.insertedCount > 0)
      })
  })
  app.get('/appointments',(req,res)=>{
    appointmentCollection.find({})
    .toArray((err,documents)=>{
      res.send(documents);
    })
  })
  app.post('/appointmentsByDate',(req,res)=>{
    const date = req.body;
    const email = req.body.email;
    doctorCollection.find({email:email})
    .toArray((err,doctors)=>{
      const filter = {date:date.date}
      if(doctors.length){
        filter.email = email;

      }
      appointmentCollection.find(filter)
      .toArray((err,documents)=>{
      res.send(documents);
    })
    })
    
})
app.post('/addDoctor',(req,res)=>{
  const file = req.files.file;
  const name = req.body.name;
  const email = req.body.email;
  console.log(name,email,file);
  file.mv(`${__dirname}/doctors/${file.name}`, err=>{
    if(err){
      console.log(err);
      return res.status(500).send({msg:'Failed to upload Image'});
    }
      return res.send({name: file.name,path:`/${file.name}`})
    })
   })
app.get('/doctors', (req, res) => {
  doctorCollection.find({})
    .toArray((err, documents) => {
      res.send(documents);
    })
});

app.post('/isDoctor', (req, res) => {
    const email = req.body.email;
    doctorCollection.find({ email: email })
        .toArray((err, doctors) => {
            res.send(doctors.length > 0);
        })
})
 
});

app.listen(process.env.PORT || port)