import { createSlice } from "@reduxjs/toolkit";



const getFromLocalStorage = (key: string):any => {
  if (!key || typeof window === 'undefined') {
      return ""
  }
  return localStorage.getItem(key)
}


const initialState = {
    signupData: null,
    loading: false,
    token: getFromLocalStorage("token") ? JSON.parse(localStorage.getItem("token")!) : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setSignupData(state, value) {
            state.signupData = value.payload;
          },
          setLoading(state, value) {
            state.loading = value.payload;
          },
          setToken(state, value) {
            state.token = value.payload;
          },
    }
})

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;