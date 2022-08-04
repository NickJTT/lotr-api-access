# Lotr API Access

> This is a simple NPM package to get information about Lord Of The Rings books and movies

## Installation

To install the package you need to use NPM

npm install nikita-zdrabov-sdk

## Getting Started

This package provides you with the LotrService class which allows you to get info of books and movies based on J. R. Tolkien's writings

## Example usage

import LotrService from 'nikita-zdrabov-sdk';

// getting all books:
const result = await LotrService.getAllBooks();

// getting book by id:

const result = await LotrService.getBookById('5cf5805fb53e011a64671582');

// getting movie quotes and setting limit, offset and page using filterObject. Each can be set independently and is not required:

const result = await LotrService.getAllMovieQuotes('5cd95395de30eff6ebccde5d', { limit: 3, page: 2, offset: 10 });
