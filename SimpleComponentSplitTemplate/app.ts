// This doesn't work because the component template separated in a file is loaded via jquery get after the component bind happens. 
// To do this , it's easier to just use requireJS to load 

//this is based in the example is from http://knockoutjs.com/documentation/component-overview.html
//This project is based on the Typescript template addon. Nuget was used to load the frameworks. Typings was added manually

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
