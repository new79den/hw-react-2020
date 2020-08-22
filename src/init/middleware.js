import {compose} from 'redux';
import {createLogger} from 'redux-logger';

export const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: (action) => {
            return action.error ? 'firebrick' : 'deepkyblue'
        },
        prevState: () => '#1C5FAF',
        action: () => '#149945',
        nextStage: () => '#A47104',
        error: () => '#ff0005',
    }
})

const __DEV__ = process.env.NODE_ENV === 'development';
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const middleware = [];

if (__DEV__) {
    middleware.push(logger);
}

export {composeEnhancers, middleware}