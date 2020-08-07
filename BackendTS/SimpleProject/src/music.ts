import * as musicService from './music.service';

export const getMusic = async(req:any, res:any) => {
    let datas = await musicService.manipulateFestivalData();
    res.send(datas);
}