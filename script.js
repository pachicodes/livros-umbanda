const books = [
    { title: "Umbanda - Uma nova era  chegou", 
        description: "Em Umbanda – A Nova Era Chegou, existe uma reflexão profunda das responsabilidades que envolvem as nossas escolhas individuais, com o apoio e o acompanhamento dos Guias, Orixás, Mestres, Divindades e toda a espiritualidade da Luz. Os autores mostram que as entidades, como Pretos-Velhos, Caboclos e Exus, há tempos nos trazem ensinamentos que são condizentes com este momento da Nova Era." },
    { title: "Manual doutrinário, ritualístico e comportamental umbandista",  
        description: "Este livro não tem o propósito de codificar procedimentos, mas sim de ser um manual prático que auxiliará os médiuns umbandistas nos seus trabalhos e nas suas sessões espirituais. É certo que cada centro tenha sua forma particular de conduzi-los, mas muitas outras práticas podem ser acrescentadas para tornar o culto mais atraente e para abrir novas opções religiosas aos consulentes que, após serem auxiliados, costumam se afastar e só retornam quando se sentem necessitados do auxílio dos guias espirituais." },
    { title: "Os Orixás na Umbanda e no Candomblé",  description: "Nesta obra, os autores apresentam as características dos Orixás e de seus "filhos", as suas atuações na Umbanda e no Candomblé, as oferendas, os dias da semana, as cores, os pontos e outros atributos importantes relacionados a eles. O livro inclui também a história do início da Umbanda, com Zélio de Moraes, e algumas lendas a respeito dos Orixás." }
];

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';

    const title = document.createElement('h2');
    title.textContent = book.title;
    card.appendChild(title);

    const description = document.createElement('p');
    description.textContent = book.description;
    card.appendChild(description);

    return card;
}

function displayBooks(books) {
    const container = document.getElementById('book-container');
    books.forEach(book => {
        const card = createBookCard(book);
        container.appendChild(card);
    });
}

// Assuming you have a container element with id 'book-container' in your HTML
document.addEventListener('DOMContentLoaded', () => {
    displayBooks(books);
});
