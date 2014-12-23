app.Employee = Backbone.Model.extend({
	defaults: {
		name: '',
		position: '',
		email: '',
		facebook: ''
	}
});

app.Employees = Backbone.Collection.extend({
	model: app.Employee
});