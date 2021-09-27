import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        gCoinList: [],
    },
    mutations: {
        setCoinList(state, aCoinList) {
            state.gCoinList = aCoinList;
        }
    },
    actions: {
        getCoinList({ commit }) {
            // upbit Open api Get All coin list
            axios
            .get(`market/all`)
            .then(aRespones => {
                console.log("getCoinList Success");

                commit('setCoinList', aRespones.data);
            })
            .catch(aError => {
                console.log("getCoinList Error : ", aError);
            }) 
        }
    },
    modules: {
    }
})
