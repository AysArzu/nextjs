import {countries} from "../../day14/data/countries.js";

const filterCountries = (searchText)=>{

    if(searchText == "") return [];

    searchText = searchText.toUpperCase();
    let filteredData = countries.filter((country)=> country.name.common.toUpperCase().includes(searchText));   

    return filteredData;
}

// console.log(filterCountries("ar"));

const setList = (countryList)=>{

    let list = document.getElementById("list");
    list.innerHTML = "";

    countryList.forEach((country, i)=>{
        let li = document.createElement("li");
        li.innerHTML = country.name.common;
        //li.innerHTML =i+1+". "+ country.name.common;
        list.appendChild(li);
    });
}

// setList(filterCountries("arg"));
let timer;
/* scope'tan dolayi burada tanimladik. basta degeri yok if e girmez clearTimeout calismaz cunku degeri yok. 
ilk arama icin harf yazinca 700ms sonra calisiyor bu saniye gecmeden ikinci harf girerse ulkeleri siralamiyor */
document.getElementById("searchBar").addEventListener("input", (event)=>{
    if(timer) clearTimeout(timer);

    timer = setTimeout(()=>{
        let countryList = filterCountries(event.target.value);
        setList(countryList);
        console.log(countryList);
    }, 700);
    
});