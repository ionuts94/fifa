import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Player {
  id: number,
  name: string,
  win?: number,
  lost?: number,
}

export interface players {
  data: Player[];
}

export interface modal {
  isVisible: boolean,
  content: any
}

export interface AppInitialStateType {
  players: players
  modal: modal
}

const initialState: AppInitialStateType = {
  players: {
    data: []
  },
  modal: {
    isVisible: false,
    content: null
  }
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<modal>) => {
      state.modal.isVisible = action.payload.isVisible;
      state.modal.content = action.payload.content
    },
    setPlayersData: (state, action: PayloadAction<players>) => {
      state.players = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setModal, setPlayersData } = appSlice.actions

export default appSlice.reducer