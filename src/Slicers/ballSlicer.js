import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 32,
    staticValue:32,
    bossLevel:0
};
export const ballSlice = createSlice({
    name: 'ball',
    initialState,
    reducers:{
        setHP:(state,action)=>{
           state.value = action.payload
        },
        IncrementHP: (state)=>{
            state.staticValue +=32
        },
        DecerementHP: (state)=>{
            state.value -=1
        },
        BossLevelUp:(state)=>{
            state.bossLevel+=1
        }
    }
});

export const {IncrementHP,DecerementHP,BossLevelUp,setHP} = ballSlice.actions;
export const selectBall = (state)=>state.ball.value;
export const selectBallStatic = (state)=>state.ball.staticValue;
export const selectBossLevel = (state)=>state.ball.bossLevel;
export default ballSlice.reducer;