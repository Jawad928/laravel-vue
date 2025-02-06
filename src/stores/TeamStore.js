
import { defineStore } from "pinia";


export let useTeamStore = defineStore('team', {
    state: () => ({

        name: "",
        spots: 0,
        members: []

    }),
    // state() {
    //     return {
    //         name: "",
    //         spots: 0,
    //         members: []
    //     }
    // },

    actions: {
        async fill() {
            let r = await import('@/team.json');
            //way3
            console.log(r.default);
            this.$state = r.default;



            // import('@/team.json').then(r => {
            // console.log(r.default);

            // let data = r.default;
            //way 1
            // this.name = data.name;
            // this.spots = data.spots;
            // this.members = data.members

            //way2
            // this.$patch({
            //     name: data.name,
            //     spots: data.spots,
            //     members: data.members
            // })
        },

        grow(spots) {
            this.spots = spots;
        }
    },
    getters: {
        spotsRemainings() {
            return this.spots - this.members.length;
        }

    }

})