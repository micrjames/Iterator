# Iterator
An implementation of an Iterator to add to your project to create an array-like class.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
Like so many projects before, this project is written to facilitate the creation of other projects. Since so many of my projects rely on *Iterator*s, I decided to create an *Iterator* class on which to base those projects. As JavaScript/Typescript is so object-centric these days, especially since es6, I decided to create this project as an array-like object with an iterator to implement data container projects.

## Technologies Used
Only plain, vanilla Typescript is used with no libraries or other packages.

## Features
* Create an object that can *iterate* through any container of data.
* *Iterate* through the container of data piecemeal.
* Operate on the entire container of data as a whole.
    * Use the spread operator to create an array of the data.
    * Loop through the data using an *array-like* *iterator* method.
* Once the data has been *iterate*d by either method, it is used up.
* *Reset* the *iterator* to the beginning or by an *offset*. So that the data can be *iterate*d again.
* Find the *size* of the Iterator.

## Setup
Simply extend the *Iterator* class into the project in the usual way.

## Usage
Extend the *Iterator* class.
```
    class <project_identifier> extends Iterator<T> {
        ...
    }
```
We can add a *constructor* to the subclass that provides:
    * the *data* upon which we will *iterate*.
    * a *callback* function that will define how operate on that *data* in the point above.
    * an *endpoint* value that limits the number of *iterat*ions performed.
So, within the the subclass we must provide:
```
   super(data, (data, it) => {}
        // define how to operate on the *data* using the *it* variable
    , endpoint)
```
In the above example, we have the *data* and the *it* variable as arguments in the *callback* function. The use of the *data* variable in the callback should be obvious. However, the *it* argument requires a small amount of explanation. Within the *Iterator* class, the value of *it* will be updated on every call of the *next* function or the *iterate*d object itself. Here, we just need to define how the *data* will be operated on for the *next* function or the *iterate*d object itself. 

Once the *data* has been completely *iterate*d through, we will need to *reset* the *Iterator* so that we can do so again.

We can also *reset* the iterator. Once the iterator has been used up, the iterator will stop and it will be past the last available value. Either *reset* the iterator back to the beginning by invoking the *reset* method with no argument. Supply an *offset* to set where to revert the iterator. If the *offset* causes the iterator to move out of the range of values, an error is thrown.
 

## Project Status
As this code is intended to be a part of a project in itself, this project is still in progress and will be until that project is completed. 
 
## Room for Improvement
The areas where there may be some room for improvement are those where some properties may be better suited to be public and thereby a couple functions should be removed.
 
## Contact
Feel free to contact me @michaelrjamesjr on twitter.  
