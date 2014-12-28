app.PageView = Backbone.View.extend({
    initialize: function(options) {
        this.options = options || {};
        this.template = this.options.template;
    },
    render: function() {
        this.$el.html(this.template);
        return this;
    },
    selectMenuItem: function(idMenuItem) {
        $('.menu .item').removeClass('active');
        $('#' + idMenuItem).addClass('active');
    }
});