const initState = {
    authError :null
}

const authReducer = ( state = initState, action ) => {
    switch (action.type) {
        case 'ERROR_LOGIN':
            console.log('login error');
            return {
                ...state,
                authError: 'login error'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'LOGOUT':
            console.log('logout');
            return state;
        default:
            return state;
    }
}

export default authReducer;