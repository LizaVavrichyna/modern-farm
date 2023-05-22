
import { createPlan } from "./plan.js"

const yearlyPlan = createPlan()

import { createCorn } from "./seeds/corn.js"
const cornSeed = createCorn()

import { addPlant } from "./field.js"
const plant = addPlant(cornSeed)

import { plantSeeds } from "./tractor.js"
const planted = plantSeeds(yearlyPlan)

import { usePlants } from "./field.js"
const used = usePlants(plant)


import { harvestPlants } from "./harvester.js"
const harvested = harvestPlants(used)
//console.log(harvested)

import { Catalog } from "./catalog.js"
const catalog = Catalog(harvested)

const parentHTMLElement = document.querySelector(".container")

parentHTMLElement.innerHTML = catalog