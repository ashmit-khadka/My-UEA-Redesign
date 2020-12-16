//increment action for LineItems reducer.
export const addShortCut = (shortcut) => {
    return {
        type:'ADD_SHORTCUT',
        payload: shortcut
    }
}

export const setShortCut = (points) => {
    return {
        type:'SET_DISTRIBUTION_POINT',
        payload: points
    }
}

export const removeShortCut = (shortcut) => {
    return {
        type:'REMOVE_SHORTCUT',
        payload: shortcut
    }
}
