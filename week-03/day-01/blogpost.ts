`use strict`;

export default class Blogpost {
    authorName: string;
    title: string;
    text: string;
    publicationDate: string;

    constructor(authorName: string, title: string, text: string, publicationDate: string) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationDate;
    }
}

let blogpost01 = new Blogpost(`John Doe`, `Lorem Ipsum`, `Lorem ipsum dolor sit amet`, `2000.05.04`)
let blogpost02 = new Blogpost(`Tim Urban`, `Wait but why`, `A popular long-form, stick-figure-illustrated blog about almost everything.`, `2010.10.10`)
let blogpost03 = new Blogpost(`William Turton`, `One Engineer Is Trying to Get IBM to Reckon With Trump`, `Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.`, `2017.03.28`)

console.log(blogpost01, blogpost02, blogpost03);
