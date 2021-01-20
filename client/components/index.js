/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as Cart} from './cart'
export {default as UserHome} from './user-home'
export {default as Homepage} from './homepage'
export {default as AllProduct} from './allProduct'
export {default as SingleWine} from './singleWineView'
// export {default as SignUp} from './signUp'
export {default as ContactUs} from './contactUs'
export {Login, Signup} from './auth-form'
export {default as Checkout} from './checkout'
export {default as AddWine} from './addWine'
export {default as NotFound} from './404'
export {default as EditWine} from './editWine'
