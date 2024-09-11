const mongoose = require('mongoose');

const mongoDB = "mongodb://localhost:27017/coiso"

async function main() {
    await mongoose.connect(mongoDB);
}

main() 
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log(err));

module.exports = mongoose;