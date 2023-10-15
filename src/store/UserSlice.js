import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name : "user",
    initialState : {
        id : '',
        username : '',
        email : "",
    },

    reducers : {
        setUser : (state , action) => {

            const {username , email , id} = action.payload
            console.log(action.payload);
            state.email = email
            state.username = username
            state.id = id

        },
        resetUser : () => {
            state.email = ''
            state.username = ''
            state.id = ''
        },
    }

})


export const {setUser , resetUser} = userSlice.actions
export default userSlice.reducer