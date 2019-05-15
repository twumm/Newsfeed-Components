// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandArticle = this.expandArticle.bind(this);
    this.expandButton.addEventListener('click', this.expandArticle);
    // this.expandButton.addEventListener('click', () => this.expandArticle());

    // STRETCH GOALS - Close article
    this.close = document.createElement('span');
    this.close.textContent = 'Close';
    this.close.setAttribute('style', 'position: absolute; top: 5px; left: 92%; font-size: 12px;' +
      'color: red; cursor: pointer');
    this.domElement.append(this.close);
    this.close.addEventListener('click', () => this.closeArticle())
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
  }

  closeArticle() {
    this.domElement.style.display = 'none';
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
articles.forEach(article => {
  new Article(article);
});

// STRETCH GOAL - Article Builder Component
class ArticleBuilder {
  constructor(article, data) {
    // console.log(data)
    this.article = article;
    this.heading = data.heading;
    this.paragraphs = data.paragraphs;
    this.date = data.date;

    // Initialize building of elements
    this.buildArticle();
    this.buildParagraphElement();
    this.buildDateElement();
  }

  buildArticle() {
    // initiate and build heading
    const heading = document.createElement('h2');
    heading.textContent = this.heading
    this.article.append(heading);
  }

  buildParagraphElement() {
    // initiate and build paragraphs
    const paragraph = document.createElement('p');
    this.paragraphs.forEach(paragraphContent => {
      paragraph.textContent = paragraphContent;
      this.article.append(paragraph);
    })
  }

  buildDateElement() {
    // initiate and build date tag with p
    const date = document.createElement('p');
    date.textContent = this.date;
    this.article.append(date);
  }
}

let articlesDiv = document.querySelector('.articles');

const articleData = [
  {
    heading: 'Sheep',
    paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    date: 'Nov 5th, 2017'
  },
  {
    heading: 'Lambs',
    paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    date: 'Nov 5th, 2017'
  },
  {
    heading: 'Wolves',
    paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
    date: 'Nov 5th, 2017'
  },
];
