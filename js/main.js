// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

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

icons.forEach((elm, i) => {
    const {name, family, prefix, category} = elm;

    document.getElementById('icons').innerHTML += `<div class="card">
                                                        <i id="${i}" class="${family} ${prefix}${name}"></i>
                                                        <div class="icon-name">${name}</div>
                                                    </div>`;
    if (category == 'food') {
        document.getElementById(`${i}`).classList.add('yellow');
    } else if (category == 'beverage') {
        document.getElementById(`${i}`).classList.add('red');
    } else if (category == 'animal') {
        document.getElementById(`${i}`).classList.add('green');
    }
});