---
slug: never-use-list-inside-tuples
date: 2017-07-15
title: 'Never Use Lists Inside Tuples'
description: 'Here I discuss why we should not include lists inside a tuple'
published: true
banner: './banner.png'
---

<p class="lead">
  List and Tuple are really common and frequently used data-types of Python.
  Although both of these store values in quite similar fashion there's one
  main difference between these two data types. The list data-type is mutable,
  which means the values inside a list object can be changed. However, the tuple
  data-type is immutable, meaning the values inside a tuple object cannot be changed
  once its been initialized. To modify the values of a tuple Python Interpreter must
  create another instance of tuple with the modified values.
</p>

Once we create a tuple we want the values inside the tuples to never change.
That is one of the main reasons we use tuples instead of lists. But when we
add a list as an element of a tuple it creates a possibility that the tuple
we declare might get modified(even if it's immutable).

Let's look at this example:

```python
a = (['a', 'b'], 'c')
print(a)
# (['a', 'b'], 'c')

a[0].append('d')
print(a)
# (['a', 'b', 'd'], 'c')
```

We can clearly see that even though tuple is immutable we can modify the list element
inside of the tuple. This clearly violates the pythonic data structure. That's why
tuples should never contain list as its element.
