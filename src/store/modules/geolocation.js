const state = {
    location: {
        latitude: '54.687157',
        longitude: '25.279652'
    },
    gettingLocation: false,
    errorStr: null,
    available: true
}

export const mutationTypes = {
    getGeolocationStart: '[geolocation] Get geolocation start',
    getGeolocationSuccess: '[geolocation] Get geolocation success',
    getGeolocationFailure: '[geolocation] Get geolocation failure',
    checkGeolocationAvailability: '[geolocation] Check availability'
}

export const actionTypes = {
    getGeolocation: '[geolocation]: Get geolocation'
}

export const getterTypes = {
    getterLocation: '[geolocation] Getter'
}

const mutations = {
    [mutationTypes.getGeolocationStart]() {
    },
    [mutationTypes.getGeolocationSuccess](state, payload) {
        state.location = payload
        state.gettingLocation = true
    },
    [mutationTypes.getGeolocationFailure](state, payload) {
        state.error = payload
        state.gettingLocation = false
    },
    [mutationTypes.checkGeolocationAvailability](state) {
        state.available = false
    }
}

const actions = {
    [actionTypes.getGeolocation](context) {
        if (!('geolocation' in navigator)) {
            context.commit(mutationTypes.checkGeolocationAvailability)
            return
        }
        context.commit(mutationTypes.getGeolocationStart)
        // get position
        navigator.geolocation.getCurrentPosition(
            pos => {
                context.commit(mutationTypes.getGeolocationSuccess, pos.coords)
            },
            err => {
                context.commit(mutationTypes.getGeolocationFailure, err.message)
            }
        )
    }
}

const getters = {
    [getterTypes.getterLocation]: (state) => {
         return state.location
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
