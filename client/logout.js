Template.logout.helpers({
	useless:function() {
		if(Meteor.userId()==null) {
				Router.go("/")
			}
		}
	
})