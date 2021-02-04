import { eaterySelect } from "./eateries/EaterySelect.js";
import { attractionSelect } from './attractions/AttractionSelect.js';
import { parkSelect } from './parks/ParkSelect.js'
import './preview/PreviewList.js'
import './preview/PreviewDetail.js'
import { ItineraryList } from "./itinerary/ItineraryList.js";


parkSelect().then( () => {
    eaterySelect().then( () => {
        attractionSelect()
    })
})
ItineraryList()


// TEST CODE
