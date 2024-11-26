---
slug: python-tuple-unpacking-in-es6
date: 2017-07-09
title: 'Python Tuple Unpacking in ES6'
description: 'In this post I describe the process of unpacking iterables in ES6'
published: true
banner: './banner.jpg'
---

<p class="lead">Python developers often get to use a really cool feature called tuple unpacking. They(We) can return more than one values, assign to two variables simultaneously etc.</p>

### Tuple and Tuple Unpacking

Just in case if you don’t know what tuple and tuple unpacking means.
Tuple is a data type of Python programming language. It has a lot of similarities with lists/Arrays but the main difference that we should keep in mind is that tuple is an immutable data type. Which means, once constructed you can’t change the elements of a tuple.

Tuple Unpacking basically works with lists too in Python but it is kind of common to use tuples instead.
Let’s say you want to declare two variables with their initial value of 11 and 22. How would you do it? Basically, you can do it in the simple way or the cool way.

```python
# Simple way
a = 11
b = 22

# Cool way
a, b = 11, 22
```

The second way is where I am using tuple unpacking. Tuple unpacking just works like that. When you are assigning to more than one variables at once python checks the right side of the assignment operator for an iterable object like tuples or lists. If it can’t find one it raises an error. The next thing python looks at is the size or length of the object and number of variables. If they don’t match Python raises an error. Finally if none of the above errors are raised then python takes the variables and values inside the object one by one and assigns the values to the variables respectively.

Let me show an example how tuple unpacking might make your life easier.

```python
# Swapping two variables

# Boring...
a = 22
b = 44
t = a
a = b
b = t

# Cool Way
a, b = 22, 44
a, b = b, a
```

### JavaScript Object Destructuring

JavaScript is an awesome language. In fact, my second favorite language to be exact. JavaScript used to be kind of messy to work with before but with time it has overcome many of its limitations. And I think it is a really good thing that now JavaScript has come out of its browser window and letting us use this awesome language for various kind of projects.

Well let’s not get carried away here. As I was saying, now because of ES6 we can use many new features. This update has introduced many new things to us and most browsers might not support the new features just yet. We might have to use a transpiler like babel or something like that to convert our ES6 code to ES5 to make our code more browser friendly. One of the new features that ES6 has introduced us is Object-Destructuring. It almost works like Python’s tuple unpacking. But instead of using tuples we use arrays in JavaScript. And what works here differently is that we also enclose the variables inside square brackets. Maybe I should just show you some code and you will see how this works.

```javascript
var [a, b] = [22, 44]
console.log(a) // 22
console.log(b) // 44
```

But JavaScript Object-Destructuring works a little differently than Python tuple unpacking. When assigning to multiple variables at the same time if the given values array is smaller in length than the variables array it does not raise any error. It just keeps assigning till it reaches the smallest length.

```javascript
var [a, b] = [22]
console.log(a) // 22
console.log(b) // undefined

var [c, d] = [11, 22, 33]
console.log(c) // 11
console.log(d) // 22
// 33 does not get assigned
```

So, after getting that out of the way I think we can write the previous variable swapping Python tuple unpacking example in JavaScript now.

```javascript
var [a, b] = [22, 44]
console.log(a, b)[(a, b)] = [b, a] // 22 44
console.log(a, b) // 44 22
```

This feature now works natively in Chrome 51+ and Firefox 47+. So, I think its fair to say that this feature is almost available to use. But to be safe we should always use transpilers for these new ES6 codes.

This is the first blog post that I have ever written. So there are bound to be some mistakes. I am a human and I don’t know everything. I’d love to hear from you about other features or techniques you like to use on your code. Let me know if this post helped you in any way. :)
