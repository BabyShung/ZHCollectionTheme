# ZHCollectionTheme

Ghost theme for my website: http://www.babyshung.com

#Modules need to setup manually

**1.Turn on Labs feature**

In your admin page, go to 'Labs' and turn on features 'Public API' and 'Subscribers'

**2.About me setup**

If you have a post for 'About me', just turn it into a static page in the post 'Post Settings' and also set the 'Post URL' to 'about'.

If you don't, just create a post and do the above steps.

**3.Blog**

You need to setup the below before you goto http://[yourSite]/blog

Since the page for showing all the posts is not in index.hbs, I moved it to a static page.

We just need to create a new post and turn it to a static page in the post 'Post Settings' and set the 'Post URL' to 'blog'.

**4.BookList**
There is actually a booklist section.
What you want to do first is to make sure you included dashboard_books.hbs in index.hbs.
And when you create your first "book" post, add a new tag "Booklist".

#Others
In the index.hbs, you can arrange the dashboard cards based on what you need.

In the nav_bar.hbs, you can customize what icons you want to show.
