export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQD89eMgRt5iEPrPrmrrQVB5Ga3tZ0bDJLx8kriwb5Sz6rVIfoSg342o1n_xgaS21NIgcsfGRN9HuJJPMrBqgkW_6vpJR88iPXByJOcoBjR8UG-gfJdmb9wLtLAPQh9d332MGYdhE5XujBlxCN-oZcaZuL_fW5u1jFQZGwRzGwN07D_i'
    
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        default:
            return state;
    }
};

export default reducer