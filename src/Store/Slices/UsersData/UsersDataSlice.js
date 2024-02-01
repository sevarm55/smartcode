export const initialUsersData = [];

export const UsersDataReducer = (state = initialUsersData, action) => {
    switch (action.type) {
        case "fetchUsers" :
            return action.payload
        default:
            return state;
    }
};

export const selectUsers = (state) => state.usersData