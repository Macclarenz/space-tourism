import { createServer, Model } from 'miragejs'
import data from './data.json'

// destination
import moon_png from './assets/destination/image-moon.png'
import moon_webp from './assets/destination/image-moon.webp'

import mars_png from './assets/destination/image-mars.png'
import mars_webp from './assets/destination/image-mars.webp'

import europa_png from './assets/destination/image-europa.png'
import europa_webp from './assets/destination/image-europa.webp'

import titan_png from './assets/destination/image-titan.png'
import titan_webp from './assets/destination/image-titan.webp'

// Crew
import crew1_png from './assets/crew/image-douglas-hurley.png'
import crew1_webp from './assets/crew/image-douglas-hurley.webp'

import crew2_png from './assets/crew/image-mark-shuttleworth.png'
import crew2_webp from './assets/crew/image-mark-shuttleworth.webp'

import crew3_png from './assets/crew/image-victor-glover.png'
import crew3_webp from './assets/crew/image-victor-glover.webp'

import crew4_png from './assets/crew/image-anousheh-ansari.png'
import crew4_webp from './assets/crew/image-anousheh-ansari.webp'

// technology
import tech1_landscape from './assets/technology/image-launch-vehicle-landscape.jpg'
import tech1_portrait from './assets/technology/image-launch-vehicle-portrait.jpg'

import tech2_landscape from './assets/technology/image-spaceport-landscape.jpg'
import tech2_portrait from './assets/technology/image-spaceport-portrait.jpg'

import tech3_landscape from './assets/technology/image-space-capsule-landscape.jpg'
import tech3_portrait from './assets/technology/image-space-capsule-portrait.jpg'

const crewArr = data.crew
const destinationsArr = data.destinations
const technologyArr = data.technology

const arrImages = {
    crewImages: [
        [crew1_png, crew1_webp],
        [crew2_png, crew2_webp],
        [crew3_png, crew3_webp],
        [crew4_png, crew4_webp]
    ],
    destinationImages: [
        [moon_png, moon_webp],
        [mars_png, mars_webp],
        [europa_png, europa_webp],
        [titan_png, titan_webp]
    ],
    techonologyImages: [
        [tech1_landscape, tech1_portrait],
        [tech2_landscape, tech2_portrait],
        [tech3_landscape, tech3_portrait]
    ]
}

const renderedDestinationArr = destinationsArr.map((el, index) => ({
    ...el,
    images: {
        png: arrImages.destinationImages[index][0],
        webp: arrImages.destinationImages[index][1]
    }
}))

const renderedCrewArr = crewArr.map((el, index) => ({
    ...el, 
    images: {
        png: arrImages.crewImages[index][0],
        webp: arrImages.crewImages[index][1]
    }
}))

const renderedTechnologyArr = technologyArr.map((el, index) => ({
    ...el,
    images: {
        landscape: arrImages.techonologyImages[index][0],
        portrait: arrImages.techonologyImages[index][1]
    }
}))

export default function () {
    let server = createServer({
        models: {
            crews: Model,
            destinations: Model,
            technologies: Model
        },
        seeds(server) {
            // destination
            server.create('destination', {...renderedDestinationArr[0]})
            server.create('destination', {...renderedDestinationArr[1]})
            server.create('destination', {...renderedDestinationArr[2]})
            server.create('destination', {...renderedDestinationArr[3]})
            // crew
            server.create('crew', {...renderedCrewArr[0]})
            server.create('crew', {...renderedCrewArr[1]})
            server.create('crew', {...renderedCrewArr[2]})
            server.create('crew', {...renderedCrewArr[3]})
            // technology
            server.create('technology', {...renderedTechnologyArr[0]})
            server.create('technology', {...renderedTechnologyArr[1]})
            server.create('technology', {...renderedTechnologyArr[2]})
        },
        routes() {
            this.namespace = 'api'
            this.get('/destinations', schema => schema.destinations.all())
            this.get('/crew', schema => schema.crews.all())
            this.get('/technology', schema => schema.technologies.all())
        }
    })

    return server
}