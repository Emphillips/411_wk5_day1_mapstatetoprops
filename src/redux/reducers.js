import { combineReducers } from 'redux'

const user = (state = {}) => state

const cars = (state = []) => state

export default combineReducers({ user, cars })