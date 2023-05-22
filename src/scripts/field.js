
//empty array for plants 
let plants = []

//takes seed obj 
//function adds seed to the field(array)
export const addPlant = (seed) => {
    plants.push(seed)
} 

//returns a copy of the array of plants.
export const usePlants = () => {
    return plants
}