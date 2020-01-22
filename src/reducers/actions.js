export default (state=[],action={}) => {
    if(action.type === '@@redux/INIT' || action.type === '@@INIT'){
        return state;
    }

    console.log(action)
    console.log(state);
    return [action, ...state];
}