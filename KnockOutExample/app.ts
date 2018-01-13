//from http://knockoutjs.com/documentation/component-overview.html

window.onload = () => {
    ko.applyBindings(new MyViewModel());
};

function Product(name, rating?) {
    this.name = name;
    this.userRating = ko.observable(rating || null);
}

function MyViewModel() {
    this.products = [
        new Product('Garlic bread'),
        new Product('Pain au chocolat'),
        new Product('Seagull spaghetti', 'like') // This one was already 'liked'
    ];
}


// This is a component with everything in the same file
ko.components.register('like-widget', {
    viewModel: function (params) {
        // Data: value is either null, 'like', or 'dislike'
        this.chosenValue = params.value;

        // Behaviors
        this.like = function () { this.chosenValue('like'); }.bind(this);
        this.dislike = function () { this.chosenValue('dislike'); }.bind(this);
    },
    template:
    '<div class="like-or-dislike" data-bind="visible: !chosenValue()">\
            <button data-bind="click: like">Like it</button>\
            <button data-bind="click: dislike">Dislike it</button>\
        </div>\
        <div class="result" data-bind="visible: chosenValue">\
            You <strong data-bind="text: chosenValue"></strong> it\
        </div>'
});

// This is the sime component as 'like-widget' but in separated files using requireJS as a module loader
ko.components.register('like-or-dislike', {
    viewModel: { require: 'files/component-like-widget' },
    template: { require: 'text!files/component-like-widget.html' }
});
