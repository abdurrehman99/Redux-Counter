import * as actionTypes from './actions';
const initialState = {
    counter : 0,
    results : [],
}

const reducer = (state = initialState , action) => {
    switch(action.type)
    {
        case actionTypes.INC:
            {
                return {
                    ...state,
                    counter : state.counter  + action.value
                }
            }
        case actionTypes.DEC:
            {
                return {
                    ...state,
                    counter : state.counter + action.value
                }
            }
        case actionTypes.ADD:
            {
                return {
                    ...state,
                    counter : state.counter + action.value
                }
            }
        case actionTypes.SUB:
            {
                return {
                    ...state,
                    counter : state.counter + action.value
                }
            }
        case actionTypes.STORE_RESULT:
            {
                
                return {
                    ...state,
                    results : state.results.concat({ id : action.id , value : state.counter}),
                    
                }
            }  

        case actionTypes.DELETE_RESULT:
            {
                const newArray = [...state.results]
                newArray.splice(action.resultId,1);
                console.log(action.resultId);
                return {
                    ...state,
                    results:newArray,
                      
                }
            }  

        default :
            return state;
            
    }
}

export default reducer;