//increment action for LineItems reducer.
export const setHelpShortcut = (shortcut) => {
    return {
        type:'SET_HELP_SHORTCUT',
        payload: shortcut
    }
}

export const setHelpProtal = (points) => {
    return {
        type:'SET_HELP_PORTAL',
        payload: points
    }
}

export const setHelpNews = (shortcut) => {
    return {
        type:'SET_HELP_NEWS',
        payload: shortcut
    }
}

export const setHelpEvents = (shortcut) => {
    return {
        type:'SET_HELP_EVENTS',
        payload: shortcut
    }
}
