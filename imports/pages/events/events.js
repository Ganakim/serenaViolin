import './events.html'

Template.events.helpers({
  selectedDate(){
    return moment(Session.get('selectedDate')).isSame(moment(), 'day') ? 'Today' : moment(Session.get('selectedDate')).format('MMM Do')
  },
  selectedDateEvents(){
    return Events.find({date:Session.get('selectedDate')}).fetch()
  }
})