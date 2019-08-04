const axios = require("axios");

const getInfo = async request => {
  request.replace(/( )/gm, "%20");

  let output = {};

  try {
    const res = await axios(
      `https://kitsu.io/api/edge/anime?filter[text]=${request}`
    );

    output.name_en = res.data.data[0].attributes.titles.en;
    output.name_en_jp = res.data.data[0].attributes.titles.en_jp;
    output.name_jp = res.data.data[0].attributes.titles.ja_jp;
    output.type = res.data.data[0].type;
    output.synopsis = res.data.data[0].attributes.synopsis;
    output.startDate = res.data.data[0].attributes.startDate;
    output.endDate = res.data.data[0].attributes.endDate;
    output.ageRating = res.data.data[0].attributes.ageRating;
    output.status = res.data.data[0].attributes.status;
    output.img = res.data.data[0].attributes.posterImage.original;
  } catch (error) {
    console.log(error);
  }

  return output;
};

module.exports = getInfo;
