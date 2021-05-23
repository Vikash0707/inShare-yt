const file = require('./models/file');

const fs = require('fs');
const connectDB = require('./config/db');

connectDB();

async function fetchData() {
    const pastData = new Data(Data.now() -24 *60 *1000);
    const files = await File.find({createAt: {slt: pastDate }});
    if(files.length){
        for(const file of file) {
            try{
                fs.unlinkSync(file.path);
                await file.remove();
                console.log(`successfully deleted ${file.filename}`);

            }catch(err) {
                console.log(`Error while deleting file ${err}`);

            }
        }
    }
}