//input is harvested food array of objs
//iterates over array and return name property of current food object in HTML 
export const Catalog = (harvested) => {
    let HTMLString = '<article class="cropsList">'
    for(const plant of harvested) {
        HTMLString += `<section class="crops_plant">${plant.type}</section>`
    }
    HTMLString += `</article>`
    return HTMLString
}