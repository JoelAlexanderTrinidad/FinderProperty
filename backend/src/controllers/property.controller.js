const propertyService = require('../services/property.services');
const userService = require('../services/user.services');
const imageService = require('../services/image.services');

class PropertyController {

    async findAll(req, res){

        const userEmail = req.body.userEmail;

        console.log(req.params);

        const currentUser = await userService.findByEmail(userEmail);
        const userID = currentUser.id;

        const userProperties = await propertyService.allPropertyUser(userID);
        return res.status(200).json(userProperties);
    }

    async findByPk(req, res){
        const id = req.params.id
        const properties = await propertyService.findByPk(id);
        return res.status(200).json(properties);
    }

    async createProperty(req, res){
        const {name, description, adress, propertyStatus, parking, furnished, beds, baths, price, emailUser} = req.body;

        let idUser = 0;

        if(emailUser){
            const user = await userService.findByEmail(emailUser);
            idUser = user.id
        }

        const newProperty = await propertyService.create({
            name: name.trim(),
            description: description.trim(),
            adress: adress.trim(),
            publicationTypeId: propertyStatus === 'sell' ? 3 : propertyStatus === 'rent' ? 2 : 1,
            parking,
            furnished: furnished === 'true' ? true : false,
            beds,
            baths,
            price,
            userId: idUser
        })

        if(req.files.length > 0){
            let images = req.files.map(({filename}, i) => {
                let image = {
                    name: filename,
                    propertyId: newProperty.id
                }
                return image
            })
            await imageService.storeImages(images);
        }

        return res.status(200).json({
            message: "Property created successfully!"
        });
    }

    async updateProperty(req, res){
        const id = req.params.id
        const {name, description, adress, parking, furnished, beds, baths, price} = req.body

        await propertyService.update(id, {
            name,
            description,
            adress,
            parking,
            furnished,
            beds,
            baths,
            price
        });

        return res.status(200).json({
            message: "Property updated successfully!"
        });
    }

    async deleteProperty(req, res) {
        const id = req.params.id;
        try {
            await propertyService.delete(id);
            return res.status(200).json({
                message: "Property deleted successfully!"
            })
        } catch (error) {
            console.log(error)
        }

    }

    async searchProperty(req, res) {
        const keywords = req.query.value
        try {
            const response = await propertyService.allProperty(keywords);
            return res.json({
                response
            })
          
        } catch (error) {
            console.log(error)
        }

    }
}

module.exports = new PropertyController();