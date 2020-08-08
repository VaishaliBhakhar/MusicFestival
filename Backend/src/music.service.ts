import http from 'http';
import axios from 'axios';
import _ from 'lodash';    


export const getAllFestivalData = async () => {
    return new Promise((resolve, reject) => {
        axios.get('http://eacodingtest.digital.energyaustralia.com.au/api/v1/festivals')
        .then(response => {
            resolve(response.data)
        })
        .catch(error => {
            console.log(error);
        });
    })
    
};

export const manipulateFestivalData = async () => {
    let datas:any = await getAllFestivalData();
    
    let musicData:string[] = [];
    _.each(datas, v => {
        _.map(v.bands, v1 => {
                v1.festival = v.name;
                musicData.push(v1);
        });
    });

    let finalMusicData= _.chain(musicData)
        .groupBy("recordLabel")
        .map((value, key) => ({ recordLabel: key, bands: _.map(value, _.partialRight(_.pick, ['name', 'festival'])) }))
        .value();

    return finalMusicData;
};
