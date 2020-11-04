export const resolveEntity = (state, type = null) => {
    if (!type) return type
    return {
        entities: {
            [type]: state
        }
    }
}

export const unResolveEntity = (state, type = null) => {
    if (!type) return type
    return state.entities[type]
}