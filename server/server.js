Meteor.methods ({
	profileinsert:function (user) {
		if(Profile.find({userId:user}).fetch().length == 0) {
			email = Meteor.users.find({_id:Meteor.userId()}).fetch()[0].emails[0].address
			var userId = Meteor.userId()
			//splits the userId by each letter
			userId = userId.split("")
			//sets the 6th letter to `
			userId[5]='`'
			//rejoins ir into a string
			userId= userId.join("")
			//splits it at ` to gain the first 5 terms
			Profile.insert({userId:user, username:email.split("@")[0],friendcode:userId.split("`")[0],highscore:0})
		}
	}

	

	
	
})
