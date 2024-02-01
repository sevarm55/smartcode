export const initialHoverId = null;

export const HoverIdReducer = (state = initialHoverId, action) => {
    switch (action.type) {
        case "HoverId":
            return action.payload;
        default:
            return state;
    }
};

export const selectHoverId = (state) => state.hoverId