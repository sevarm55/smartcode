export const initialActive = false;

export const ActiveReducer = (state = initialActive, action) => {
    switch (action.type) {
        case "Active":
            return action.payload;
        default:
            return state;
    }
};

export const selectActive = (state) => state.active