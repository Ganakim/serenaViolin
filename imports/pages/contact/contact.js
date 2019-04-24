import './contact.html'

Template.contact.helpers({
  socialMedias(){
    return [
      {name:'youtube',path:'https://www.youtube.com/channel/UCkykDhA3wOJapMDzVf8o8fQ',icon:'fab fa-youtube'},
      {name:'pinterest',path:'https://www.pinterest.com/serenaviolinstudio',icon:'fab fa-pinterest'},
      {name:'facebook',path:'https://www.youtube.com/channel/UCkykDhA3wOJapMDzVf8o8fQ',icon:'fab fa-facebook'}
    ]
  }
})

Template.contact.events({
  'submit #Message'(e){
    e.preventDefault()
    Meteor.call('newMessage', {
      name:{
        first:e.target.Fname.value,
        last:e.target.Lname.value
      },
      email:e.target.Email.value,
      subject:e.target.Subject.value,
      message:e.target.Message.value,
      timestamp:moment().valueOf()
    })
  }
})
