import { PayloadAction, createSlice, isAction } from "@reduxjs/toolkit"
import { create } from "domain"


const LS_FAV_KEY = "rfk"

interface GithubState {
    favourites: string[]
}

const initialState: GithubState = {
    favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]")
}

export const gitHubSlice = createSlice({
    name: "github",
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        },
        removeFavourites(state, action: PayloadAction<string>) {
            state.favourites = state.favourites.filter(f => f !== action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        }
    }

})

export const githubActions = gitHubSlice.actions
export const githubReducer = gitHubSlice.reducer
