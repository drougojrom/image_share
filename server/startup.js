   Meteor.startup(function(){
   	if (Images.find().count() == 0) {

   		for (var i=1;i<8;i++){
   			Images.insert(
   		{
      		img_src:"img_"+i+".jpg",
      		img_alt:"image" 
   		}
   		);

   		} // end of for
   		// count the images
         console.log("startup.js says: " + Images.find().count());
   	}; // end of it
 });