export const createPost = (posts) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({
            type: 'CREATE_POST',
            posts
        })
    }

}