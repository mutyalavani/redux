let initialObject={
    scientists:[],
}
let scientistsReducer=(state,action)=>
{
    switch (action.type) {
        case "AddScientist":
            return{...state,scientists:state.scientists.concat(action.value)}
             break;
    
        default:
        return initialObject;
            break;
    }
}
export default scientistsReducer;