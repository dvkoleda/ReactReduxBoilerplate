/**
 * Created by Koleda_D on 30.05.2017.
 */
import weatherService from '../services/weather-service';

//action types
const ACTION_TYPE = 'ACTION_TYPE';

//reduce function
export default function reduce(state = [], action) {
    return actionsMap[action](state, action) || state;
}

//action creators
export function fetchWeather(city) {
    return {
        type: ACTION_TYPE,
        payload: {}
    };
}

const actionsMap = {
    FETCH_WEATHER : (state, action) => state
};