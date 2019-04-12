Tools = {
  is(a,b){
    return a == b
  },
  not(a){
    return !a
  },
  log(a){
    console.log(a)
  },
  search(collection, where, id, part){
    var result
    if(id){
      result = Collections[collection].findOne(id)
    }else{
      result = Collections[collection].find(where ? where : {}, {many:true}).fetch()
    }
    if(result){
      if(part){
        return result[part]
      }else{
        return result
      }
    }
  },
  formatTime(time, format){
    return moment(time).format(format)
  }
}

for(var helper in Tools){
  Template.registerHelper(helper, Tools[helper])
}