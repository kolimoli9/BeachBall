import {React ,useEffect } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {BossLevelUp, DecerementHP, IncrementHP, selectBall,selectBallStatic,selectBossLevel, setHP} from './Slicers/ballSlicer'
const Game = () => {
    const act = useDispatch()
    const hp = useSelector(selectBall)
    const StaticHp = useSelector(selectBallStatic)
    const Boss = useSelector(selectBossLevel)
    


   
  return (
    <div>
        <div className='middleMeThis1'>Ball Level : {Boss}</div>
     <button className='beachBall' onClick={()=>{
        if(hp===0){
            act(IncrementHP());
            act(BossLevelUp());
            act(setHP(StaticHp));
        }else{
            act(DecerementHP());
        }
     }}>{hp}/{StaticHp}</button>
    </div>
  )
}

export default Game