import getData from "./index.js";

(async () => {
  getData(1).then((data) => console.log(data));
})();
