import { Meteor } from 'meteor/meteor'

import '/lib/collections'

var admins = [
  'WEp6vmbtaY2AJKj2g'
]

Meteor.startup(() => {
  Accounts.config({
    forbidClientAccountCreation: true
  });
});

Meteor.methods({
  checkAdmin(){
    if(Meteor.userId()){
      return admins.includes(Meteor.userId())
    }
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
      location: 1,
      description: 1
    }
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
     }
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
     }
  })
})
