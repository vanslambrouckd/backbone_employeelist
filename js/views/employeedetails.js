app.EmployeeDetailsView = Backbone.View.extend({
    initialize: function(options) {
        this.options = options || {};
        this.template = this.options.template;
        //console.log(this.model.attributes);
        //console.log('template', this.template());
    },
    render: function() {
        var html = this.template(this.model.attributes);
        console.log('html', html);
        this.$el.html(html);
        console.log('attributes', this.model.attributes);
        console.log(this.model.attributes.firstName);
        /*
        var tpm = new app.EmployeeSummaryView({
            model: this.model
        });
        */
        /*
        $('#details').html(new app.EmployeeSummaryView({
            model: this.model
        }).render().el);
        */
        return this;
    }
});