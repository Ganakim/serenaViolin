import './nav.html'

Template.nav.helpers({
  links(){
    return [
      {text:'Home',path:'home',icon:'fas fa-home'},
      {text:'About',path:'about',icon:' far fa-user-circle'},
      {text:'Contact',path:'contact',icon:'far fa-envelope'},
      {text:'Events',path:'events',icon:'far fa-calendar'},
      {text:'Media',path:'media',icon:'far fa-images'},
    ]
  }
})

Template.nav.events({
  'click .nav-link':function(){
    FlowRouter.go(`/${this.path}`)
  },
  'click .SC-logo':function(){
    FlowRouter.go('/home')
  }
})