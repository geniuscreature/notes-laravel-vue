let actions = {
    createPost({commit}, post) {
        axios.post('/posts', post)
            .then(res => {
                commit('CREATE_POST', res.data)
            }).catch(err => {
            console.log(err)
        })

    },
    fetchPosts({commit}) {
        axios.get('/posts')
            .then(res => {
                commit('FETCH_POSTS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deletePost({commit}, post) {
        axios.delete(`/posts/${post.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_POST', post)
            }).catch(err => {
            console.log(err)
        })
    }
}

export default actions
