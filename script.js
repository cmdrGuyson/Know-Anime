const axios = require("axios");

const getInfo = async () => {
    try{
        let synopsis;
        const res = await axios("https://kitsu.io/api/edge/anime?filter[text]=your%20name");
        synopsis = res.data.data[0].attributes.synopsis;
        //console.log(synopsis);
    }catch(error){
        console.log(error);
    }
}

module.exports = getInfo;