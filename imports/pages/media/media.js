import './media.html'

Session.set('currentMedia', Media.findOne())

Template.media.helpers({
  currentMedia(){
    return Session.get('currentMedia')
  }
})