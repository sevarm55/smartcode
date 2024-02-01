export const initialCurrentSlide = 0;

export const currentSlideReducer = (state = initialCurrentSlide, action) => {
    switch (action.type) {
        case "currentSlide" :
            return action.payload
        default:
            return state;
    }
};

export const selectCurrentSlide = (state) => state.CurrentSlide;
