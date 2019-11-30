export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const increment = (index, c, classiffication) => ({
    type: INCREMENT_LIKES,
    index,
    c,
    classiffication
});

export const addComment = (postId, author, comment) => ({
    type: ADD_COMMENT,
    postId,
    author,
    comment
});

export const removeComment = (postId, i) => ({
    type: REMOVE_COMMENT,
    postId,
    i
});
