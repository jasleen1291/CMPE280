
module.exports=function(router)
{	


	router.post('/signup',function(req, res, next) {
		var UserSchema=require('../app/models/user/user');

		UserSchema.findOne({username: req.body.userName, password: req.body.password}, function(err, user) {
		if (err) {
			console.log('err');
			res.json({
				type: false,
				data: "Error occured: " + err
			});
		} else {
			if (user) {
				console.log('exists');
				res.json({
					type: false,
					data: "User already exists!"
				});
			} else {
				console.log('new');
				var userModel = new UserSchema();
				console.log("data: " + req.body.userName);
				userModel.username = req.body.userName;
				userModel.password = req.body.password;
				userModel.firstname = req.body.firstName;
				userModel.lastname = req.body.lastName;
				userModel.instances = [];
				userModel.save(function(err, user) {
						res.json(user);
				})
			}
		}
	});
	});
}