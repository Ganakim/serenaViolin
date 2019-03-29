import './nav.html'

Template.nav.helpers({
  links(){
    return [
      {text:'Home',path:'home',icon:'home'},
      {text:'About',path:'about',icon:'user-circle'},
      {text:'Contact',path:'contact',icon:'phone-square'},
      {text:'Studio Policy',path:'policy',icon:'book'},
    ]
  }
})

Template.nav.events({
  'click .nav-link':function(){
    FlowRouter.go(`/${this.path}`)
  }
})