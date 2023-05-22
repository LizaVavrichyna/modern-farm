//takes year's planting plan array of arrays
//loops over each plant in each row
//adds appropriate seed to plants array in field.js

import { addPlant, usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (plan) => {
    for(const row of plan) {
        for(const plant of row) {
            if(plant === "Asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            } else if(plant === "Potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            } else if (plant === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            } else if (plant === "Wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            } else if (plant === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            } else if (plant === "Corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed[0])
                addPlant(cornSeed[1])
            }
        }
    }
}