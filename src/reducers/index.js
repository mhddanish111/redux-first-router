//import {combineReducers} from 'redux';
import home from './home';
import product from './product';
import aboutUs from './aboutUs';
import contactUs from './contactUs';
import pages from './pages';



const reducers = {
    pages,
    home,
    product,
    aboutUs,
    contactUs
}

export default reducers

// const rootReducers = combineReducers({
//     home,
//     product,
//     aboutUs,
//     contactUs
// })
// export default rootReducers;


