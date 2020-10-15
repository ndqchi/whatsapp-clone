var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const path = require('path');
const PORT = process.env.PORT || 5000;
const cors = require("cors")({ origin: true });
var server = require("http").Server(app);
var io = require("socket.io")(server);

const uri = "mongodb+srv://Jolie:jolie@cluster0-3sxsg.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

var messages;
client.connect(err => {
	if (err!=null) {
		console.log(err);
	}
	messages=client.db("WhatsApp").collection("Chat");
	console.log("Connected to mongo");
});


app.use(bodyParser.json());
app.use(cors);
app.use(express.static(path.join(__dirname, 'client/build')));

app.get("/", async (req,res) => {
	//get all the documents in the collection
	messages.find().toArray((err,docs) => {
		res.send(docs);
	});
})

app.post("/send", async (req,res) => {
	//insert a document into the collection
	var response = await messages.insertOne(req.body);
	res.send(response);
})

io.on("connection", socket => {
    console.log("connected new client");
    console.log(socket.id);

    socket.on("message", (data)=>{
    	socket.broadcast.emit("receiving",data);
    });
});


server.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
});

