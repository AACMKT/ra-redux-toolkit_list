import { createSlice } from '@reduxjs/toolkit'
import data from '../../data/data'

function shuffle(data) {
  let array = [...data];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    value: []
  },
  reducers: {
    showListItems: (state, action) => {
        let i = 0;
        let list = [];
        let shffledData = shuffle(data)
        while (i < Number(action.payload)) {
            list.push(shffledData[i]);
            i ++
        }
        state.value = list
    }
  }
})

// Action creators are generated for each case reducer function
export const { showListItems } = listSlice.actions

export default listSlice.reducer