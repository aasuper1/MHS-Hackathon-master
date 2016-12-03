Session.set("running",false);
var sizeincreaser;
Template.game.events({
	'click #start' : function() {
		if (Session.get("running")) {
		Session.set("running",false)
		clearInterval(sizeincreaser);

		}
		else {
		Session.set("running",true)
		sizeincreaser = setInterval(function(){
			$(".bottle").css({top:(($(".bottle").position().top-4)+"px")})
			$(".bottle").height($(".bottle").height()+4)
		}, 50);

		}
	}
})
Template.game.rendered = function() {
	 $(".bottle").on(function() {
	 console.log("clicking");
})
	}

Template.game.helpers({
	startorstop:function(){
		if(!Session.get("running")) {
		
		return "Start"
		
		}
		else {
		
		return "Stop"
		}
	},
	buttoncolor:function(){
		if(!Session.get("running")) {
		return "success"
		}
		return "warning"
	}
})