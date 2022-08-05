import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            lists: [
                { to: '/', title: 'Twin Impact' },
                { to: '/', title: 'Random Vibes' },
                { to: '/', title: 'Naija top 10' },
                { to: '/', title: 'Lofi Bops' },
                { to: '/', title: '86 Soundtracks' },
                { to: '/', title: 'UK drill' }
            ]
        }
    },
    getters: {
        playlists(state) {
        for (let i = 0; i < state.lists.length; i++) {
            state.lists[i].img = new URL(`../assets/img${i+1}.jpg`,
                import.meta.url);
        }
        return state.lists
        }
    }
})

export default store