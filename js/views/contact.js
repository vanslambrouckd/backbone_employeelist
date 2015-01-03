app.ContactView = Backbone.View.extend({
    initialize: function(options) {
        this.options = options || {};
        this.template = this.options.template;
        //console.log('template', this.template());
    },
    render: function() {
        //this.$el.html(this.template);
        this.$el.append(this.template);
        $('select.dropdown', this.el)
            .dropdown()
        ;
       
var content = [
    {
        title: 'Andorrs'
    },
    {
        title: 'United Arab Emirates'
    },
    {
        title: 'Afghanistas'
    },
    {
        title: 'Antigus'
    },
    {
        title: 'Anguills'
    },
    {
        title: 'Albanis'
    },
    {
        title: 'Armenis'
    },
    {
        title: 'Netherlands Antilles'
    },
    {
        title: 'Angols'
    },
    {
        title: 'Argentins'
    },
    {
        title: 'American Samos'
    },
    {
        title: 'Austris'
    },
    {
        title: 'Australis'
    },
    {
        title: 'Arubs'
    },
    {
        title: 'Aland Islands'
    },
    {
        title: 'Azerbaijas'
    },
    {
        title: 'Bosnis'
    }
    // etc
];
$('.ui.search', this.el)
    .search({
        source: content
    })
;
        return this;
    }
});