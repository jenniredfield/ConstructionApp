const FETCH_USER_STARTED = 'FETCH_USER_STARTED';
const FETCH_USER_COMPLETED = 'FETCH_USER_COMPLETED';
const FETCH_USER_HAS_ERROR = 'FETCH_USER_HAS_ERROR';

const INITIAL_STATE: AppState = {
    user: {
        isFetching: false,
        hasError: false,
        name: '',
        email: '',
        isLoggedIn: false,
    },
    productsList: {
        isFetching: false,
        hasError: false,
        data: []
    },
    productDetail: {
        isFetching: false,
        hasError: false,
        name: ''
    },
    cart: {},
    appConfig: {
        currency: 'R$'
    }
}

const reducers: IReducers = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case FETCH_USER_STARTED: {
            return {
                ...state,
                user: {
                    ...state.user,
                    isFetching: true,
                }
            }
        }
        case FETCH_USER_COMPLETED: {
            return {
                ...state,
                user: { 
                    ...state.user,
                    isFetching: false,
                    email: payload.email,
                    name: payload.name
                }
            }
        }
        case FETCH_USER_HAS_ERROR: {
            return {
                ...state,
                user: { 
                    ...state.user,
                    isFetching: false,
                    hasError: true
                }
            }
        }
        default:
            return state;
    }
}

export default reducers;