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

module.exports = {
    dummy, totalLikes
}
