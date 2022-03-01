const path = require("path")

function getMessages  (req, res) {
    const p = path.join(__dirname,"../public","skimountain.jpg")
    const filePdf = path.join(__dirname,"../public","CourseResources.pdf")
    console.log(__dirname);
    res.sendFile(filePdf)
//   res.send(`<ul><li>Hello ZIN MIN HTET!</li></ul>`);
};

function postMessage(req,res){
    res.send("Updating Messages...")
}

module.exports = {
    getMessages,
    postMessage
}
