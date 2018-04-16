//this example is from http://knockoutjs.com/documentation/component-overview.html
//This project is based on the Typescript template addon. Nuget was used to load the frameworks
//Used node to download typings for the frameworks
window.onload = function () {
    ko.applyBindings(new MyViewModel());
};
function Product(name, rating) {
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
ko.components.register('like-widget', {
    viewModel: { require: 'Components/component-like-widget' },
    template: { require: 'text!Components/component-like-widget.html' }
});
