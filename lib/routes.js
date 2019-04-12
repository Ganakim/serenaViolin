FlowRouter.route('/', {
  action: function(params, queryParams) {
      FlowRouter.go('/home')
  }
})

FlowRouter.route('/home', {
  action: function(params, queryParams) {
    document.title = 'Serena Violin Studio - Home'
    Session.set('page', 'home')
  }
})

FlowRouter.route('/about', {
  action: function(params, queryParams) {
    document.title = 'Serena Violin Studio - About'
    Session.set('page', 'about')
  }
})

FlowRouter.route('/admin', {
  action: function(params, queryParams) {
    document.title = 'Serena Violin Studio - Admin'
    Session.set('page', 'admin')
  }
})

FlowRouter.route('/contact', {
  action: function(params, queryParams) {
    document.title = 'Serena Violin Studio - Contact'
    Session.set('page', 'contact')
  }
})

FlowRouter.route('/events', {
  action: function(params, queryParams) {
    document.title = 'Serena Violin Studio - Events'
    Session.set('page', 'events')
  }
})

FlowRouter.route('/login', {
  action: function(params, queryParams) {
    document.title = 'Serena Violin Studio - Admin'
    Session.set('page', 'login')
  }
})

FlowRouter.route('/media', {
  action: function(params, queryParams) {
    document.title = 'Serena Violin Studio - Media'
    Session.set('page', 'media')
  }
})