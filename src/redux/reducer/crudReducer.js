const intState = {
    card : []
}

export const cardReducer = (state = intState, action)=>{
    switch(action.type){
        case 'ADD_CARD':
            console.log(action.payload);
            return state

        default : return state
    }

}
