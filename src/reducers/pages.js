import {NOT_FOUND} from 'redux-first-router';

const components = {
    HOME:'Home',
    PRODUCT:'Product',
    PRODUCTDETAILS:'ProductDetails',
    ABOUTUS:'AboutUs',
    CONTACTUS:'ContactUs',
    [NOT_FOUND]: 'NotFound'
}

const pages = (state='HOME',action={}) => {
    console.log("pages =",action);
    console.log(state);
   return components[action.type] || state;
}
export default pages;