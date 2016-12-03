Template.addfriend.events({
	 //on Click button with the id of add events
	'click #add':function(){
		//finds the input value and stores it into the friendcode variable
		var friendcode= $("#friendId").val()
		// pulls the profile of the person with that friend code
		var friendid = Profile.find({friendcode:friendcode}).fetch()
		// checks if the person exists by checking if anything is there
		if(friendid.length ==1) {
		//changes it to simply the id of the 
		friendid=friendid[0].userId
		//checking if you are already friends with the person by checking if it already exists
		if (Friends.find({userId:Meteor.userId(), friendId:friendid}).fetch().length==0){
		//creates a friend of you and the user under your Id	
		Friends.insert({userId:Meteor.userId(), friendId:friendid})
		//creates a friend of you and the user under their Id
		Friends.insert({friendId:Meteor.userId(), userId:friendid})
		//routes you to the friendslist page
		Router.go("/friendslist")
	}
	else {
		//error message returned if you are already a friend
		alert('You are already friends with this user.')
	}
	}
	else {
		//error message returned if the code does not exist
		alert('invalid code');
	}
	}
})
Template.addfriend.helpers({
	friends: function() {
		console.log("this ran")
		return (Friends.find({userId:Meteor.userId()}).fetch().length>0)
	}

})