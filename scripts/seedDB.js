/* eslint-disable max-len */
const mongoose = require(`mongoose`);
const db = require(`../models`);

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/reactreadinglist`, {
    useNewUrlParser: true
});

const bookSeed = [
    {
        title: `The Dead Zone`,
        author: `Stephen King`,
        image: "https://www.syfy.com/sites/syfy/files/styles/1200x1200/public/2019/10/the-dead-zone-hardback.jpg",
        description:
      `A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a "compulsive page-turner" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a "faultlessly paced...continuously engrossing" (Los Angeles Times) novel of second sight.`
    },
    {
        title: `Lord of the Flies`,
        author: `William Golding`,
        image: "https://ca-times.brightspotcdn.com/dims4/default/3e6d443/2147483647/strip/true/crop/301x482+0+0/resize/840x1345!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F1a%2Ff3%2Fdc3b9263edf36ce835169ecadee9%2Fla-et-jc-lord-of-the-flies-still-a-terrifying-001",
        description:
      `The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.`
    },
    
    {
        title: `Code: The Hidden Language of Computer Hardware and Software`,
        author: `Charles Petzold`,
        image: "https://media.karousell.com/media/photos/products/2018/10/12/code__the_hidden_language_of_computer_hardware_and_software_1539354750_ed8b38c5_progressive.jpg",
        description:
      `What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries. Using everyday objects and familiar language systems such as Braille and Morse code, author Charles Petzold weaves an illuminating narrative for anyone who’s ever wondered about the secret inner life of computers and other smart machines. It’s a cleverly illustrated and eminently comprehensible story—and along the way, you’ll discover you’ve gained a real context for understanding today’s world of PCs, digital media, and the Internet. No matter what your level of technical savvy, CODE will charm you—and perhaps even awaken the technophile within.`
    },
    {
        title: `Astrophysics for People in a Hurry`,
        author: `Neil deGrasse Tyson`,
        image: "https://images-na.ssl-images-amazon.com/images/I/91w70Ax2LhL.jpg",
        description:
      `What is the nature of space and time? How do we fit within the universe? How does the universe fit within us? There's no better guide through these mind-expanding questions than acclaimed astrophysicist and best-selling author Neil deGrasse Tyson. But today, few of us have time to contemplate the cosmos. So Tyson brings the universe down to Earth succinctly and clearly, with sparkling wit, in digestible chapters consumable anytime and anywhere in your busy day. While waiting for your morning coffee to brew, or while waiting for the bus, the train, or the plane to arrive, Astrophysics for People in a Hurry will reveal just what you need to be fluent and ready for the next cosmic headlines: from the big bang to black holes, from quarks to quantum mechanics, and from the search for planets to the search for life in the universe.`
    }
];

db.Book.remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(`${data.result.n } records inserted!`);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
