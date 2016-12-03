//Session auto updates the html, sets all to false so you cannot edit the prifile
Session.set("caneditusername",false);
Template.profiles.rendered= function() {
	//creates a profile if the user does not have one
	Meteor.call("profileinsert",Meteor.userId());
}
Template.profiles.events({
	//allows the user to edit username
	'click #editusername':function(){
		
		Session.set("caneditusername",true);
		
	},
	//makes the user to unable edit username and saves it to the server
	'click #doneusername':function(){
		//pulls current profile
		var toinsert = Profile.find({userId:Meteor.userId()}).fetch()[0]
		//changes the username to whatever you changed it to
		toinsert.username= $("#newusername").val()
		//puts the new profile onto the server
		Profile.update({_id:toinsert._id},toinsert)
		//makes the user unable to edit
		Session.set("caneditusername",false)
	}


})
Template.profiles.helpers({
	username:function(){
		//sends user username to the html
		return Profile.find({userId:Meteor.userId()}).fetch()[0].username
	},
	caneditusername:function(){
		//tells the html if you can edit the username
		return Session.get("caneditusername");
	},
	//creates the friend code
	userId:function(){
		//gets the userId
		var userId = Meteor.userId()
		//splits the userId by each letter
		userId = userId.split("")
		//sets the 6th letter to `
		userId[5]='`'
		//rejoins ir into a string
		userId= userId.join("")
		//splits it at ` to gain the first 5 terms
		return userId.split("`")[0];
	}
})
