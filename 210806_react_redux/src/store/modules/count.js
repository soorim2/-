// 1. 액션 생성

const INCREMENT = 'count/INCREMENT'
const DECREMENT = 'count/DECREMENT'

// 2. 액션 내보내기
export const increment = () => ({type : INCREMENT})
export const decrement = () => ({type : DECREMENT})

// 3. 초기값
const initialState = { cnt : 0}

// 4. reducer 함수 만들기
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case INCREMENT :
            return{
                cnt : state.cnt + 1
            }
        case DECREMENT :
            return{
                cnt : state.cnt - 1
            }
        default :
            return state
    }
}
export default reducer
