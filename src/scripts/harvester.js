//parameter is an array of plants
//returns array of seeds objs
//if plant is Corn, return only half of output
export const harvestPlants = (plants) => {
    let harvestedSeeds = []
    for(const plant of plants) {
        let outs = plant.output
        if(plant.type === "Corn") {
            outs = outs /2
        }
        while(outs > 0) {
            harvestedSeeds.push(plant)
            outs--
        }
    }
    return harvestedSeeds
}