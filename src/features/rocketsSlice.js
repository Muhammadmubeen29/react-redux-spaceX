import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRockets = createAsyncThunk(
	"rockets/fetchRockets",
	async () => {
		const response = await fetch("https://api.spacexdata.com/v4/rockets");
		const data = await response.json();
		return data;
	}
);

const initialState = {
	rockets: [],
	loading: false,
};

const rocketsSlice = createSlice({
	name: "rockets",
	initialState,
	reducers: {
		reserveRocket: (state, action) => {
			const index = state.rockets.findIndex(
				(rocket) => rocket.id === action.payload
			);
			if (index !== -1) {
				state.rockets[index].reserved = true;
			}
		},
		cancelRocket: (state, action) => {
			const index = state.rockets.findIndex(
				(rocket) => rocket.id === action.payload
			);
			if (index !== -1) {
				state.rockets[index].reserved = false;
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchRockets.fulfilled, (state, action) => {
			state.rockets = action.payload;
		});
	},
});

export const { reserveRocket, cancelRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
