const mongoose = require('mongoose');
const {Schema} = mongoose;


function getCurrentDate(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var today = date.getDate();
    collection_name=year.toString()+month.toString()+today.toString();
    return collection_name;
}

const postSchema = new mongoose.Schema({
    id:{type: Number, required:true, unique:true, index:true},
    title:{type: String, required:true},
    writer:{type: String, required:true},
    contents:{type: String, required:true},
    reply_num:{type: Number, required:true, default:0},
    likes_num:{type: Number, required:true, default:0},
    createdAt:{type: Date, default:Date.now},
    lati:{type: Number, default:null},
    long:{type: Number ,default:null}
},
{
    collection:'posts',
    timestamp:true
});

module.exports = mongoose.model('Post', postSchema);
