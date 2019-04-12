import { Template } from 'meteor/templating'

import './main.html'
import './imports'

Session.set('modal', false)

var ModalCallback;

Template.body.helpers({
  page(){
    return Session.get('page')
  },
  modal(){
    return Session.get('modal')
  }
})

Template.body.events({
  'click #ModalConfirm'(){
    ModalCallback()
    Session.set('modal', false)
  },
  'click #ModalDeny'(){
    Session.set('modal', false)    
  }
})

Meteor.subscribe('events')
Meteor.subscribe('media')
Meteor.subscribe('messages')

Modal = (message, confirm, deny, callback)=>{
  ModalCallback = callback
  Session.set('modal', {message:message, confirm:confirm, deny:deny})
}
