//추가
const INSERT = 'todos/INSERT'
//삭제
const REMOVE = 'todos/REMOVE'
//변경(글자입력)
const CHANGE_INPUT = 'todos/CHANGE_INPUT'

//액션 내보내기
export const insert = (text) => ({type : INSERT,text})
export const remove = (id) => ({type : REMOVE, id})

// text 값을 먼저 받고, 키값으로 지정
export const changeInput = (text) => ({type : CHANGE_INPUT, text})

//초기값
let no = 5
const initialState = {
    text:'기본',
    todos : [
        {id:1, text : '종강입니다.'},
        {id:2, text : '주말입니다.'},
        {id:3, text : '친구와약속.'},
        {id:4, text : '배구경기보기'},
    ]
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case INSERT:
            return {
                ...state,
                todos:[...state.todos, {id:no++,text:action.text}]
            }
        case REMOVE:
            return {
                ...state,
                todos : state.todos.filter(todo=>todo.id !== action.id)
            }
        case CHANGE_INPUT:
            return {
                ...state,
                text : action.text 
            }
        default:
            return state
    }
    
}
export default reducer