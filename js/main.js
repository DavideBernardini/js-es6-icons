/* Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

Milestone 2
Coloriamo le icone per tipo

Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone*/

const icons = [
	{
        name: 'apple-alt',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
	},
	{
        name: 'ice-cream',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
	},
	{
        name: 'fish',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
	},
	{
        name: 'lemon',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
	},
	{
        name: 'hamburger',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
	},
	{
        name: 'pizza-slice',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
	},
	{
        name: 'beer',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
	},
	{
        name: 'glass-whiskey',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
	},
	{
        name: 'wine-bottle',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
	},
	{
        name: 'cocktail',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
	},
	{
        name: 'coffee',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
	},
	{
        name: 'glass-martini',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
	},
	{
        name: 'dragon',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
	},
	{
        name: 'kiwi-bird',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
	},
	{
        name: 'frog',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
	},
	{
        name: 'hippo',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
	},
	{
        name: 'otter',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
	},
	{
        name: 'horse',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
	},
];

// Milestone 1

// funzioni
const printIcons = (array, container) => {
    container.innerHTML = '';
    array.forEach((elm) => {
        const {name, family, prefix, color} = elm;
    
        container.innerHTML += `<div class="card">
                                    <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
                                        <div class="icon-name">${name}</div>
                                </div>`;
    });
};

const iconsContainer = document.getElementById('icons');

// Milestone 2

const colors = {
    food: 'yellow',
    beverage: 'red',
    animal: 'green'
};

const iconsColored = icons.map(
    (elm) => {
        return {
            ...elm,
            color: colors[elm.category]
        };
    }
);

printIcons(iconsColored, iconsContainer);

// Milestone 3

const iconCategories = [];

icons.forEach(
    (elm) => {
        if (iconCategories.includes(elm.category) == false) {
            iconCategories.push(elm.category);
        }
    }
);

const selectedCategory = document.getElementById('cat');

iconCategories.forEach(
    (elm) => {
        selectedCategory.innerHTML += `<option value="${elm}">${elm}</option>`;
    }
);

selectedCategory.addEventListener('change', () => {
    const iconsFiltered = iconsColored.filter((elm) => elm.category == selectedCategory.value || selectedCategory.value == '');
    printIcons(iconsFiltered, iconsContainer);
    }
);
