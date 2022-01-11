let initialObject={
    cricketers:[],
}
let cricketersReducer=(state,action)=>
{
    switch (action.type) {
        case "AddCricketer":
           return{...state,cricketers:state.cricketers.concat(action.value)} 
            break;
    
        default:
            return initialObject;
            break;
    }
}
export default cricketersReducer;
