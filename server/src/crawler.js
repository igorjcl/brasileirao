const axios = require("axios");
const cheerio = require("cheerio");

const urlBase =
  "https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a/2020";

const fetchData = async (url) => await axios.get(url);

module.exports.getSerieATable = async () => {
  const { data } = await fetchData(urlBase);
  const $ = cheerio.load(data);

  let times = [];

  $($("body").find("table")[0])
    .find("tbody > tr")
    .each((index, tr) => {
      const position = $($(tr).find("td > b").eq(0)).text().split("º")[0];
      const name = $($(tr).find("td > span").eq(1)).text().split("-")[0];
      const points = $($(tr).find("th")).text();
      const defeats = $($(tr).find("td").eq(4)).text();
      const victories = $($(tr).find("td").eq(2)).text();
      const imagePath = $($($(tr).find("td > img"))).attr("src");
      const matches = $($(tr).find("td").eq(1)).text();
      const tie = $($(tr).find("td").eq(3)).text();

      const time = {
        position,
        name,
        points,
        defeats,
        victories,
        imagePath,
        matches,
        tie,
      };

      if (time.name) {
        times.push(time);
      }
    });
  return times;
};

module.exports.getConfrontationToday = async () => {
  const { data } = await fetchData(urlBase);
  const $ = cheerio.load(data);

  let confrontatio = [];
  $($('body').find('.aside-rodadas .swiper-wrapper > .active > .aside-content ul li')).each((i, e) => {
    const home_team = $($($(e).find('li div').eq(1)).find('a > .pull-left > img')).attr("src");
    const visited_team = $($($(e).find('li div').eq(1)).find('a > .pull-right > img')).attr("src");
    const result = $($($(e).find('li div').eq(1)).find('a > .partida-horario').eq(0)).text().trim();
    
    confrontatio.push({
      home_team,
      visited_team,
      result
    })
  })

  return confrontatio;
}

