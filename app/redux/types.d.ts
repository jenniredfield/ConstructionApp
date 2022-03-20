interface AppState {
    user: {
        email: string;
        name: string;
        isLoggedIn;
    } & FetchingState,
    productsList: {
        data: Product[]
    } & FetchingState,
    productDetail: {
        name: string;
    } & FetchingState,
    cart: {},
    appConfig: {
        currency: string; // change to type currency
    }
}

interface FetchingState {
    isFetching: boolean;
    hasError: boolean;
}