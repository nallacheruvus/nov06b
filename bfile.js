/**
 * 
 * @param {Name} name 
 * @param {Author} author 
 * @param {Publisher} pubs 
 * @param {ISBN} isbn 
 */
function Books(name, author, pubs, isbn) {
    this.name = name;
    this.author = author;
    this.pubs = pubs;
    this.isbn = isbn;
}
const book = new Books("Quiet flows of don", "Sholkov", "Mikha", 20998373);
console.log(JSON.stringify(book));
