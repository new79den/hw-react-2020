export const customThunk = (store) => {
    console.log('store',store);

    return (next) => {
        console.log('next', next);

        return (action) => {
            console.log('action', action)
            if (typeof action === 'function') {
                return action(store.dispatch, store.getState)
            }

            return next(action);
        }
    }
}