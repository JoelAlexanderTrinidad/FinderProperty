export const offerFilter = async (properties) => {
    try {
        const offer = properties.filter(property => {
            return  property.publicationTypeId == 1
          })
        return offer;
    } catch (error) {
        throw new Error(error);
    }
}

export const rentFilter = async (properties) => {
    try {
        const rent = properties.filter(property => {
            return  property.publicationTypeId == 2
          })
        return rent;
    } catch (error) {
        throw new Error(error);
    }
}

export const saleFilter = async (properties) => {
    try {
        const sale = properties.filter(property => {
            return  property.publicationTypeId == 3
          })
        return sale;
    } catch (error) {
        throw new Error(error);
    }
}