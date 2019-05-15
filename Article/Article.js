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
  constructor(article) {
    this.heading = article.heading;
    this.paragraphs = article.paragraphs;
    this.date = article.date;
  }

  addArticle() {
    
  }
}