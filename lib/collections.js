Images =  new Mongo.Collection("images");

// set up security
Images.allow({
	insert:function(userId, doc){
		console.log("testing security on image insert");
		if (Meteor.user()){
			// if logged in
			// force the image to be used by user
			doc.createdBy = userId;
			if (userId != doc.createdBy) {
				return false;

			}
			else {
				// user logged in
				return true;

			}
		}
		else {
			// use is not logged in
			return false;

		}
	},
	remove:function(userId, doc){
		return true;
	}
})