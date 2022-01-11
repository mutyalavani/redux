let initialObject={
    actors:[],
}
let actorsReducer=(state,action)=>
{
    switch (action.type) {
        case "AddActor":
            return{...state,actors:state.actors.concat(action.value)}
            
            break;
    
        default:
            return initialObject;
            break;
    }
}
export default actorsReducer;