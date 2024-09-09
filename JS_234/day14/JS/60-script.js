import { countries } from "../../day14/data/countries.js";
console.log(countries.length);
console.log(countries[227].name.common);//Turkiye

const setOptions = () => {
    let options = "<option> --Bir Ulke Seciniz--</option><option>" + countries[227].name.common + "</option>";
      for (let country of countries) {
    console.log(country.name.common);
    options += `<option >${country.name.common}</option>`;
  }
  selectCountries.innerHTML = options;
};
setOptions();
