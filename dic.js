
async function word()
{
    document.getElementById('searchResult').style.visibility = 'visible';

    var srch=document.getElementById('searchBox').value;
var meaning=document.getElementById('definition');
var wrd=document.getElementById('word');
var eg=document.getElementById('example');
    var data= await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+srch,
    {
        // headers : [
        // [Access-Control-Allow-Origin: *]
        // ]

    });
    

    var dat=await data.json();
    // console.log(dat);
    // console.log(dat[0].word);
    // console.log(dat[1].meanings[0].definitions[0].definition);
    console.log(dat[0].meanings[0].definitions[0].definition);
    wrd.innerText=dat[0].word;
    meaning.innerText=dat[0].meanings[0].definitions[0].definition;
    eg.innerText=dat[0].meanings[0].definitions[0].example;

}

