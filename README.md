## **BIT BLOG**

BIT Blog (blog_app) application is a blogging platform-like application. You can read posts from other user or write your own posts. You can also filter posts by author, read more about authors etc.


## **TECHNOLOGIES**

- React - The Javascript library for creating an application
- Materialize - Material Design is a design language that combines the classic principles of successful design along with innovation and technology.



## **STRUCTURE OF BIT BLOG**

```
blog_app/
  README.md
  images/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    App/
      AboutPage/
        About.js
      AuthorPage/
        AboutAuthor.js
        AuthorDetails.js
      AuthorsPage/
        Authors.js
        AuthorsList.js
      HomePage/
        Home.js
        PostListItem.js
        PostsList.js
      NewPostPage/
        NewPost.js
      Partials/
        Footer.js
        Header.js
      PostPage/
        PostContent.js
        PostDetails.js
        PostLinks.js
      SharedComponents/
        BackButton.js
        ErrorComponent.js
      App.js
    Entites/
      Author.js
      Post.js
    Services/
      dataService.js
    App.test.js
    index.css
    index.js
    logo.svg
```

## **DESCRIPTION OF PAGES IN BIT BLOG**


1) Home.js - On the home page there are posts from all authors, which can be clicked on.



![alt text](https://raw.githubusercontent.com/mariaradovanovic/blog_app/master/images/home_page.png)



2) PostDetails.js - Clicking on one of the posts on the home page goes to the page of all posts by an author.



![alt text](https://raw.githubusercontent.com/mariaradovanovic/blog_app/master/images/one_author_posts.png)



3) Authors.js - On the page there is a list of all authors on the blog.



![alt text](https://raw.githubusercontent.com/mariaradovanovic/blog_app/master/images/authors_page.png)



4) AuthorDetails.js - Clicking on one of the authors goes to the page with more detailed information about one author.



![alt text](https://raw.githubusercontent.com/mariaradovanovic/blog_app/master/images/data_about_author.png)



5) About.js - A page that explains the blog in more details.



![alt text](https://raw.githubusercontent.com/mariaradovanovic/blog_app/master/images/about_page.png)



6) NewPost.js - Posting page for new posts.



![alt text](https://raw.githubusercontent.com/mariaradovanovic/blog_app/master/images/new_post_page.png)

























