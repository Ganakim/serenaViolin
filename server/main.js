import { Meteor } from 'meteor/meteor'

import '/lib/collections'

Meteor.startup(() => {
  Accounts.config({
    forbidClientAccountCreation: true
  })
  console.log('Checking admin')
  if(Meteor.users.find({username:process.env.adminUsername}).fetch().length == 0){
    console.log('admin not found')
    Meteor.users.remove({})
    Accounts.createUser({username:process.env.adminUsername, password:process.env.adminPassword})
  }else{
    console.log('admin found')
  }
})

Meteor.methods({
  checkAdmin(){
    return Meteor.userId() === Meteor.users.find({username:process.env.adminUsername}).fetch()._id
  },
  NewEvent(event){
    Events.insert(event)
  },
  UpdateEvent(event){
    Events.update(event.id, event)
  },
  RemoveEvent(event){
    Events.remove(event.id)
  },
  newMessage(message){
    Messages.insert(message)
  },
  removeMessage(id){
    Messages.remove(id)
  }
})

Meteor.publish('events', ()=>{
  return Events.find({}, {
    fields: {
      name: 1,
      date: 1,
      startTime: 1,
      endTime: 1,
      location: 1,
      description: 1
    },
    sort:{date: 1}
  })
})

Meteor.publish('media', ()=>{
  return Media.find({}, {
    fields: { 
      type: 1,
      src: 1,
      thumb: 1,
      name: 1,
      event: 1,
      description: 1,
      date: 1,
      externalLinks: 1
     },
     sort:{date: 1}
  })
})

Meteor.publish('messages', ()=>{
  return Messages.find({}, {
    fields: { 
      name: 1,
      email: 1,
      subject: 1,
      message: 1,
      timestamp: 1
     },
     sort:{timestamp: 1}
  })
})
