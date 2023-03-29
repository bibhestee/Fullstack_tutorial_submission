const { countBy } = require('lodash');

const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {
    const sumAllLikes = (blogs) => {
        let total = 0;
        blogs.map((blog) => {
            total += blog.likes;
        })
        return total;
    }


    return blogs.length > 0
    ?  sumAllLikes(blogs)
    :  0
}

const favoriteBlog = (blogs) => {
    if (blogs.length > 0) {
        let i = 0
        blogs.map(blog => {
            i = blog.likes > i ? blog.likes : i
        })
        return blogs.find(blog => {
            return blog.likes === i
        })
    }
    return {}
}

const mostBlog = (blogs) => {
    
    if (blogs.length > 0) {
        // count the array of objects by author name 
        const group = countBy(blogs, blog => {return blog.author})
        // Get the keys and values as an array 
        const authors = Object.keys(group)
        const blogCount = Object.values(group)
        // Max blog count
        const max = Math.max(...blogCount)
        // Author with max blog count
        const author = authors.find(item => group[item] === max)
        return {
            "author": author,
            "blogs": max
        }
    }
    return {}
}

const mostLikes = (blogs) => {   
    if (blogs.length > 0) {
        authorLikes = {}
        blogs.map((blog) => {
            if (blog.author in authorLikes) {
                authorLikes[blog.author] = authorLikes[blog.author] + blog.likes
            } else {
                authorLikes[blog.author] = blog.likes
            }     
        })
        const authors = Object.keys(authorLikes)
        const totalLikes = Object.values(authorLikes)
        // Max likes
        const max = Math.max(...totalLikes)
        // Author with max likes
        const author = authors.find(author => authorLikes[author] === max)
        return {
            "author": author,
            "likes": max
        }
    }
    return {}
}
module.exports = {
    dummy, totalLikes, favoriteBlog, mostBlog, mostLikes
}
