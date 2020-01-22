const direction = (state='next',action={}) =>{
  if(!action.meta || !action.meta.location){
      return state;
  }
  const type = action.type;
  const prevType = action.meta.location.prev.type;
  if(type === prevType){
     return state;
  }

  return state;
}

export default direction;