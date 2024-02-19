import { defineStore } from 'pinia';
import { getAreaApi } from '~/api/area';
import { Area, City, District } from '~/types/area'


export const useArea = defineStore('area', {
    state: () => ({
        area: <Area[]>[],
        districts: <District[]>[]
    }),
    actions: {
        async getArea() {
            const data = await getAreaApi()
            this.area = data.result
        },
        getDistrict(payload: City) {
            const selelctedCity = this.area.find(a => {
                return a.id === payload.id
            })
            if(selelctedCity){
                this.districts = selelctedCity.districts
            }
        }
    },
    getters: {
        cities: (state) => state.area.map(a => {
            return { id: a.id, name: a.name }
        }),
    }
});
