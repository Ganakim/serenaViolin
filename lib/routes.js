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

FlowRouter.route('/contact', {
  action: function(params, queryParams) {
    document.title = 'Serena Violin Studio - Contact'
    Session.set('page', 'contact')
  }
})

FlowRouter.route('/policy', {
  action: function(params, queryParams) {
    document.title = 'Serena Violin Studio - Studio Policy'
    Session.set('page', 'policy')
  }
})