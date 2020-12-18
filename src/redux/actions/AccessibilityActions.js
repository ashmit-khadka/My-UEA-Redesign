//increment action for LineItems reducer.
export const setLanguage = (language) => {
    return {
        type:'SET__LANGUAGE',
        payload: language
    }
}

export const toggleDy = (isDy) => {
    return {
        type:'TOGGLE__DY',
        payload: isDy
    }
}