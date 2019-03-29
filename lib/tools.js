Tools = {
  'is':(a,b)=>{
    return a == b
  }
}

for(var helper in Tools){
  Template.registerHelper(helper, Tools[helper])
}