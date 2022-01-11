let initialObject={
    politicians:[],
}
let politiciansReducer=(state,action)=>
{
    switch (action.type) {
        case "AddPolitician":
           return{...state,politicians:state.politicians.concat(action.value)} 
            break;
    
        default:
            return initialObject;
            break;
    }
}
export default politiciansReducer;
