const listHelper = require('../utils/list_helper')

// Load lodash full build.
// const lodash = require('lodash')
// Load the core build.
// const _ = require('lodash/core')
// Load method categories.
// const array = require('lodash/array')
const object = require('lodash/fp/object')

const blogs = [
        {
            _id: "5a422a851b54a676234d17f7",
            title: "React patterns",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7,
            __v: 0
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Edsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 5,
            __v: 0
        },
        {
            _id: "5a422b3a1b54a676234d17f9",
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
            likes: 12,
            __v: 0
        },
        {
            _id: "5a422b891b54a676234d17fa",
            title: "First class tests",
            author: "Robert C. Martin",
            url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
            likes: 10,
            __v: 0
        },
        {
            _id: "5a422ba71b54a676234d17fb",
            title: "TDD harms architecture",
            author: "Robert C. Martin",
            url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
            likes: 0,
            __v: 0
        },
        {
            _id: "5a422bc61b54a676234d17fc",
            title: "Type wars",
            author: "Robert C. Martin",
            url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
            likes: 2,
            __v: 0
        }  
] 

test('dummy returns one', () => {
    const result = listHelper.dummy([])
    const expected = 1

    expect(result).toBe(expected)
})

/* 
 To run a single test( or describe block) is to specify the name of the test
 to run with the -t flag

 npm test -- -t 'when list has only one blog, equals the likes of that'
*/
describe('total likes', () => {
    const listWithOneBlog = [
        {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
        }
    ]  

    test('of empty list is zero', () => {
        const result = listHelper.totalLikes([])
        expect(result).toBe(0)
    })
    
    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })

    test('of a bigger list is calculated right', () => {
        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(36)
    })
})

describe('favorite blog', () => {

    test('of empty list is empty object', () => {
        const result = listHelper.favoriteBlog([])
        expect(result).toEqual({})
    })

    test('of a non empty list', () => {
        const result = listHelper.favoriteBlog(blogs)
        const expected = {
            _id: "5a422b3a1b54a676234d17f9",
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
            likes: 12,
            __v: 0
        }
        expect(result).toEqual(expected)
    })
})

describe('most blog', () => {
    test('of empty list is empty object', () => {
        const result = listHelper.mostBlog([])
        expect(result).toEqual({})
    })

    test('of an author in a blog list', () => {
        const result = listHelper.mostBlog(blogs)
        const expected = {
            author: "Robert C. Martin",
            blogs: 3
        }
        expect(result).toEqual(expected)
    })
})

describe('most likes', () => {
    test('of empty list is an empty object', () => {
        const result = listHelper.favoriteBlog([])
        expect(result).toEqual({})
    })

    test('of a filled list should return an object', () => {
        const result = listHelper.mostLikes(blogs)
        const expected = {
            author: "Edsger W. Dijkstra",
            likes: 17
        }
        expect(result).toEqual(expected)
    })
})