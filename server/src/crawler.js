const axios = require("axios");
const cheerio = require("cheerio");

const urlBase =
  "https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a/2020";

const fetchData = async (url) => await axios.get(url);

const getSerieATable = async () => {
  const { data } = await fetchData(urlBase);
  const $ = cheerio.load(data);

  let times = [];

  $($("body").find("table"))
    .find("tbody > tr")
    .each((index, tr) => {
      const position = $($(tr).find("td > b").eq(0)).text().split("º")[0];
      const name = $($(tr).find("td > span").eq(1)).text().split("-")[0];
      const points = $($(tr).find("th")).text();
      const defeats = $($(tr).find("td").eq(4)).text();
      const victories = $($(tr).find("td").eq(2)).text();
      const imagePath = $($($(tr).find("td > img"))).attr("src");
      const time = {
        position,
        name,
        points,
        defeats,
        victories,
        imagePath,
      };
      if (time.name) {
        times.push(time);
      }
    });
  return times;
};

module.exports = getSerieATable;
