//post = title, post
export const createPost = (posts) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...posts,
            authorFirstName: "dell",
            authorLastName: "watson",
            authorId: 12345,
            createdAt: new Date()
         }).then(() => {
            dispatch({ type: 'CREATE_POST', posts })
         }).catch((err) => {
             dispatch({ type: 'CREATE_ERROR', err })
         })

    }
}