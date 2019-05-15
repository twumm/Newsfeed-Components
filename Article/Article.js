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

window.addEventListener('load', () => {
  let articles = document.querySelectorAll('.article');
  console.log(articles);
  articles.forEach(article => {
    new Article(article);
  });
})


// STRETCH GOAL - Article Builder Component
class ArticleBuilder {
  constructor(article, data) {
    // console.log(data)
    this.article = article;
    this.heading = data.heading;
    this.paragraphs = data.paragraphs;
    this.date = data.date;

    this.currentArticleDiv = document.createElement('div');

    // Initialize building of elements
    this.buildHeading();
    this.buildParagraphElement();
    this.buildDateElement();
    this.buildMainArticleElement();
  }

  buildHeading() {
    // initiate and build heading
    const heading = document.createElement('h2');
    heading.textContent = this.heading
    // this.article.append(heading);
    this.currentArticleDiv.append(heading);
  }

  buildParagraphElement() {
    // initiate and build paragraphs
    const paragraph = document.createElement('p');
    this.paragraphs.forEach(paragraphContent => {
      paragraph.textContent = paragraphContent;
      // this.article.append(paragraph);
      this.currentArticleDiv.append(paragraph);
    })
  }

  buildDateElement() {
    // initiate and build date tag with p
    const date = document.createElement('p');
    date.textContent = this.date;
    // this.article.append(date);
    this.currentArticleDiv.append(date);
  }

  buildMainArticleElement() {
    // initiate and build article tag with div
    // const article = document.createElement('div');
    // article.classList.add('article')
    // article.appendChild
    const expandSpan = document.createElement('span');
    expandSpan.classList.add('expandButton');
    this.currentArticleDiv.classList.add('article');
    this.currentArticleDiv.append(expandSpan);
    this.article.append(this.currentArticleDiv);
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

articleData.forEach(data => {
  new ArticleBuilder(articlesDiv, data);
})

// STRETCH GOALS - Add forms submit articles
const formDiv = document.createElement('div');
formDiv.setAttribute('style', 'margin: 20px 10%; padding: 0 20px 25px;');

articlesDiv.insertAdjacentElement('afterend', formDiv);

const formElement = document.createElement('form')
formElement.setAttribute('action', 'submit');
formElement.setAttribute('style', 'display: flex; justify-content: center; flex-direction: column; margin-top: 40px;');
const headingInput = document.createElement('input');
headingInput.setAttribute('type', 'text')
headingInput.setAttribute('name', 'heading')
const paragraphInput = document.createElement('input');
paragraphInput.setAttribute('type', 'text')
paragraphInput.setAttribute('name', 'paragraph')

formDiv.append(formElement);
formElement.append(headingInput);
formElement.append(paragraphInput);