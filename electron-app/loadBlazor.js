
function addScript(value, element, prop){
    var el = document.createElement(element);
    el[prop] = value;
    document.getElementsByTagName('head')[0].appendChild(el);
    return el;
}

let url = document.baseURI.replace("index.html","")

addScript(url, "base", "href")
addScript(url + "_framework/blazor.webassembly.js", "script", "src")

setTimeout(()=>{
    addScript(url, "a", "href").click()
},1000)
