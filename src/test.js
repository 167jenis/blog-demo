import { createAsyncThunk, createSlice, isRejected } from "@reduxjs/toolkit";
import { VERCEL_API_BASE_URL } from "config";
import { MakeProtectedApiCall } from "utility/api";
import { DELETE_SEARCH, SAVE_SEARCH, SAVE_SEARCH_ADD } from "utility/endpoint";
import { getToken } from "utils/authtoken";

let BaseUrl = VERCEL_API_BASE_URL;

const initialState = {
  savesearchdata: null,
  savesearchloading: false,
  saveerror: false,
  deleteSearch: null,
  deleteSearchError: false,
  deleteLoading: false,
  createSaveSearch: null,
  createSaveSearchLoading: false,
  createSaveSearchError: false,
};
const Token = getToken();

export const getSaveSearch = createAsyncThunk(
  "userProfile/getsavesearch",
  async ({ page, limit }) => {
    try {
      console.log("getToken", getToken);
      const url = `${BaseUrl}/${SAVE_SEARCH}?page=${page}&limit=${limit}`;
      let response = await MakeProtectedApiCall(url, "GET", Token);
      return response.data.data;
    } catch (error) {
      console.log("state updated==> builder error", error.message);
      return rejectWithValue(error);
    }
  }
);

export const DeleteSearch = createAsyncThunk(
  "userProfile/deleteSaveSearch",
  async (id) => {
    try {
      console.log("getToken", getToken);
      const url = `${BaseUrl}/${DELETE_SEARCH}/${id}`;
      let response = await MakeProtectedApiCall(url, "DELETE", Token);
      return response.data.data;
    } catch (error) {
      console.log("state updated==> builder error", error.message);
      return rejectWithValue(error);
    }
  }
);
export const addSaveSearch = createAsyncThunk(
  "userProfile/addSaveSearch",
  async (payload) => {
    try {
      console.log("getToken", getToken);
      const url = `${BaseUrl}/${SAVE_SEARCH_ADD}`;
      let response = await MakeProtectedApiCall(url, "POST", Token, payload);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const saveSearchSlice = createSlice({
  name: "saveSearchSlice",
  initialState,
  reducers: {
    setPrimaryAdd: (state, action) => {
      state.primaryAddress = action.payload;
    },
    setSelectedPrimaryAdd: (state, action) => {
      state.selectedAddress = action.payload;
    },
  },
  extraReducers: (profile) => {
    profile.addCase(getSaveSearch.pending, (state, action) => {
      state.savesearchloading = true;
    });
    profile.addCase(getSaveSearch.fulfilled, (state, action) => {
      state.savesearchdata = action.payload;
      state.savesearchloading = false;
    });
    profile.addCase(getSaveSearch.rejected, (state, action) => {
      state.savesearchloading = false;
      state.saveerror = true;
    });
    profile.addCase(DeleteSearch.pending, (state, action) => {
      state.deleteLoading = true;
    });
    profile.addCase(DeleteSearch.fulfilled, (state, action) => {
      state.deleteSearch = action.payload;
      state.deleteLoading = false;
    });
    profile.addCase(DeleteSearch.rejected, (state, action) => {
      state.deleteLoading = false;
      state.deleteSearchError = true;
    });
    profile.addCase(addSaveSearch.pending, (state, action) => {
      state.createSaveSearchLoading = true;
    });
    profile.addCase(addSaveSearch.fulfilled, (state, action) => {
      state.createSaveSearch = action.payload;
      state.createSaveSearchLoading = false;
    });
    profile.addCase(addSaveSearch.rejected, (state, action) => {
      state.createSaveSearchLoading = false;
      state.createSaveSearchError = true;
    });
  },
});

// export const {  } = saveSearchSlice.actions;
export const { setPrimaryAdd, setSelectedPrimaryAdd } = saveSearchSlice.actions;

export default saveSearchSlice.reducer;
