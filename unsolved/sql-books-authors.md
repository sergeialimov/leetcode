# Books and authors

## Requirements

There're books and authors.
Books can be written by multiple authors.

1. In one query return books and count of authors
2. In one query, display data on books and authors with a counter, which books have how many authors. The original also had filtering requirements
Вывести одним запросом данные по книгам и авторам с счетчиком, у каких книг сколько авторов. В оригинале были еще требования по фильтрации









## sql draft
```sql
select *, count(book.id) from book_authors
join books on book.id = book_authors.book_id
join authors on book_authors.author_id = authors.id
group_by book.id
```