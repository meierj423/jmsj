const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);
const testTitle = "bojack";

const settings = {
  async: true,
  crossDomain: true,
  url:
    "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" +
    testTitle +
    "&country=us",
  method: "GET",
  headers: {
    "x-rapidapi-host":
      "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    "x-rapidapi-key": process.env.X_RAPID_API_KEY
  }
};
$.ajax(settings).done(response => {
  const title = response.results[0];
  const platform = title.locations[0].display_name;
  const data = [
    {
      title: title.name,
      picture: title.picture,
      id: title.id,
      platform: platform
    }
  ];
  console.log(data);
});
