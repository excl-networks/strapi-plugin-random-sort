# Archived
I have archived this plugin because its 15 lines of code you should implement yourself instead of depending on a plugin.


# Strapi plugin random-sort

Simple plugin to randomly sort the data of a request.

## Installation

`npm install strapi-plugin-random-sort`

or

`yarn add strapi-plugin-random-sort`

## Config

```
  'random-sort': {
    enabled: true,
  },
```

## Usage

Add a `?randomSort=true` as a query parameter

## Example

`http://localhost:1337/api/blogs?populate=*&randomSort=true`

## ⭐️Did you find this helpful?
If you found this plugin helpful give it a star?
