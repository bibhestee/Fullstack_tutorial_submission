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

module.exports = {
    dummy, totalLikes, favoriteBlog
}
