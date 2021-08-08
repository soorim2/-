// 1. 액션생성 - 모듈이름을 앞에 붙여줌으로써 중복 방지
// reducer 파일명 / 액션명
const TOMATO = 'color/TOMATO'
const YELLOW = 'color/YELLOW'
const LIME = 'color/LIME'

// 2. 액션 내보내기
export const tomato = () => ({type : TOMATO})
export const yellow = () => ({type : YELLOW})
export const lime = () => ({type : LIME})

    /* 
        dispatch({type: AAA}) -> dispatch( aaa() )
        = dispatch({type: TOMATO}) -> dispatch( tomato() )
        
        dispatch({type: AAA , 값}) -> dispatch( aaa(값) )
    */

// 3. 초기값
const initialState = { color: 'green' }

// 4. reducer 함수 만들기
const reducer = (state = initialState, action) => {
    switch(action.type){
        case TOMATO :
            return{
                color : 'tomato'
            }
        case YELLOW : 
            return{
                color : 'yellow'
            }
        case LIME : 
            return{
                color : 'lime'
            }
        default : 
            return state
    }
}
/*
    const reducer = (state = initialState, action) => {
        switch(action.type){

        }
    }
*/
export default reducer