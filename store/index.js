import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    // reject(new Error());
                    setTimeout(() => {
                        {
                            vuexContext.commit("setPosts", [
                                {
                                    id: "1",
                                    title: "First Post",
                                    previewText: "This is our first post!",
                                    thumbnail:
                                        "https://www.open-tec.com/wp-content/uploads/2019/12/2_multiexperience-600x258.jpeg"
                                },
                                {
                                    id: "2",
                                    title: "Second Post",
                                    previewText: "This is our second post!",
                                    thumbnail:
                                        "https://www.open-tec.com/wp-content/uploads/2019/12/2_multiexperience-600x258.jpeg"
                                },
                                {
                                    id: "3",
                                    title: "Third Post",
                                    previewText: "This is our third post!",
                                    thumbnail:
                                        "https://www.open-tec.com/wp-content/uploads/2019/12/2_multiexperience-600x258.jpeg"
                                }
                            ])

                        }
                        resolve()
                    }, 1000);
                })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore
