import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMissions = createAsyncThunk(
	"missions/fetchMissions",
	async () => {
		const response = await fetch("https://api.spacexdata.com/v3/missions");
		const data = await response.json();
		return data;
	}
);

const initialState = {
	missions: [],
	loading: false,
};

export const missionsSlice = createSlice({
	name: "missions",
	initialState,
	reducers: {
		toggleMission: (state, action) => {
			const index = state.missions.findIndex(
				(mission) => mission.mission_id === action.payload
			);
			if (index !== -1) {
				state.missions[index].joined = !state.missions[index].joined;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMissions.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchMissions.fulfilled, (state, action) => {
				state.loading = false;
				state.missions = action.payload.map((mission) => ({
					...mission,
					joined: false,
				}));
			})
			.addCase(fetchMissions.rejected, (state) => {
				state.loading = false;
			});
	},
});

export const { toggleMission } = missionsSlice.actions;
export default missionsSlice.reducer;
