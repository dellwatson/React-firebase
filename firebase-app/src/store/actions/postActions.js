export const createPost = (posts) => {
    return (dispatch) => {
        dispatch({
            type: 'CREATE_POST',
            posts
        })
    }

}