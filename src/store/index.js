import {configureStore} from "@reduxjs/toolkit"
import  trainerName  from "./slices/trainerName.slice"
/*import 'bootstrap/dist/css/bootstrap.min.css';*/

const store = configureStore({
    reducer:{
        trainerName
    }

})

export default store