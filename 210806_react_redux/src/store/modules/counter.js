// 1. 액션 생성

const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

// 2. 액션 내보내기
export const increment = (step) => ({type : INCREMENT,step:step})
export const decrement = (step) => ({type : DECREMENT,step})
// dispatch({type : 액션명 , 키:값}) - action.type, action.key

// 3. 초기값
const initialState = { num : 0}

// 4. reducer 함수 만들기
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case INCREMENT :
            return{
                num : state.num + action.step
            }
        case DECREMENT :
            return{
                num : state.num - action.step
            }
        default :
            return state
    }
}
export default reducer
