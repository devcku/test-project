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
            ],
            artists: [
                'Rema', 'Seafret', 'Knucks', 'Koyote Theory', 'Rocky'
            ],
            presongs: [
                { to: '/', title: 'Jo', artist: 0, src: 'jo' },
                { to: '/', title: 'Nice and Good', artist: 2, src: 'niceandgood' },
                { to: '/', title: 'Part girl', artist: 4, src: 'partygirl' },
                { to: '/', title: 'Atlantis', artist: 1, src: 'seafret' },
                { to: '/', title: 'This Side of Paradise', artist: 3, src: 'thissideofparadise' },
                { to: '/', title: 'Oroma Baby', artist: 0, src: 'oroma' }
            ],

        }
    },
    getters: {
        playlists(state) {
            for (let i = 0; i < state.lists.length; i++) {
                state.lists[i].img = new URL(`../assets/img/playlists/img${i + 1}.jpg`,
                    import.meta.url);
            }
            return state.lists
        },
        songs(state) {
            for (let i = 0; i < state.presongs.length; i++) {

                // images
                state.presongs[i].img = new URL(`../assets/img/songs/img${i + 1}.jpg`,
                    import.meta.url);

                // musics
                state.presongs[i].src = new URL(`../assets/audio/${state.presongs[i].src}.mp3`,
                    import.meta.url);

                // artists
                state.presongs[i].artist = state.artists[state.presongs[i].artist];
            }
            return state.presongs
        }
    }
})

export default store