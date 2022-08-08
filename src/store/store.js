import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      songindex: 0,
      playlists: [
        { to: "/playlists/liked", title: "Liked Songs" },
        { to: "/playlists/Rema", title: "Rave and Roses" },
        { to: "/", title: "Naija top 10" },
        { to: "/", title: "Lofi Bops" },
        { to: "/", title: "86 Soundtracks" },
        { to: "/", title: "UK drill" },
      ],
      artists: ["Rema", "Seafret", "Knucks", "Coyote Theory", "Rocky"],
      songs: [
        { to: "/", title: "Jo", artistindex: 0, srcindex: "jo" },
        {
          to: "/",
          title: "Nice and Good",
          artistindex: 2,
          srcindex: "niceandgood",
        },
        { to: "/", title: "Part girl", artistindex: 4, srcindex: "partygirl" },
        { to: "/", title: "Atlantis", artistindex: 1, srcindex: "seafret" },
        {
          to: "/",
          title: "This Side of Paradise",
          artistindex: 3,
          srcindex: "thissideofparadise",
        },
        { to: "/", title: "Oroma Baby", artistindex: 0, srcindex: "oroma" },
      ],
      activesong: null,
      currentsongs: [],
    };
  },
  getters: {},
  mutations: {
    startup(state) {
      // playlists mutation
      for (let i = 0; i < state.playlists.length; i++) {
        state.playlists[i].img = new URL(
          `../assets/img/playlists/img${i + 1}.jpg`,
          import.meta.url
        );
      }

      // songs mutations
      for (let i = 0; i < state.songs.length; i++) {
        // images
        state.songs[i].img = new URL(
          `../assets/img/songs/img${i + 1}.jpg`,
          import.meta.url
        );

        // musics
        state.songs[i].src = new URL(
          `../assets/audio/${state.songs[i].srcindex}.mp3`,
          import.meta.url
        );

        // artists
        state.songs[i].artist = state.artists[state.songs[i].artistindex];
      }

      // active song mutation
      if (state.activesong == null) {
        state.activesong = state.songs[0];
      }
    },
    next(state) {
      if (state.songindex < state.currentsongs.length - 1) {
        state.songindex++;
        state.activesong = state.currentsongs[state.songindex];
      }
    },
    prev(state) {
      if (state.songindex > 0) {
        state.songindex--;
        state.activesong = state.currentsongs[state.songindex];
      }
    },
    fetchsongs(state, id) {
      state.currentsongs = state.songs.filter((song) => song.artist === id);
    },
  },
});

export default store;
