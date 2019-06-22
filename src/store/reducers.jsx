import { combineReducers } from 'redux-immutable';
import HeaderReducer from '../components/header/reducer';
import SidebarReducer from '../components/sidebar/reducer';
import HomeReducer from '../pages/home/reducer';

export default combineReducers({
    header: HeaderReducer,
    sidebar: SidebarReducer,
    home: HomeReducer
})