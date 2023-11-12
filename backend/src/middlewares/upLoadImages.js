const multer = require('multer');
const path = require('path');

const storagePropertyImg = multer.diskStorage({
    destination : function (req,file,callback) {
        callback(null, path.join(__dirname, '../assets/images'))
    },
    filename : function (req,file,callback){
        callback(null, `${Date.now()}_property_${path.extname(file.originalname)}`)
    }
});

const uploadImgProperty = multer({
    storage : storagePropertyImg
})

module.exports = {
    uploadImgProperty
}