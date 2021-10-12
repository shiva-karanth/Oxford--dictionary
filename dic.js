async function word() {
    var srch = document.getElementById('searchBox').value;
    var meaning = document.getElementById('definition');
    var wrd = document.getElementById('word');
    var eg = document.getElementById('example');
    var speaker = document.getElementById('speaker');
    var data= await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+srch,
    {
        method :"GET",
        header : {
        'Access-Control-Allow-Origin': '*'
        }

    });
  
    var dat = await data.json()
play(dat)
 function play(dat)
    {
        sound="";
    var sound=new Audio('https:'+dat[0].phonetics[0].audio);
    dat=""
   sound.play();

    }

    speaker.addEventListener('click',()=>
    {
       
play(dat)

    })


    console.log(dat[0].meanings[0].partOfSpeech);
    wrd.innerHTML = "<h1>Word</h1>" + dat[0].word +"<br>"+dat[0].phonetic;
    
    meaning.innerHTML = " <h1>Definition</h1>" + dat[0].meanings[0].definitions[0].definition+","+dat[0].meanings[0].partOfSpeech;

    if (dat[0].meanings[0].definitions[0].example == undefined) {

    } else {
        eg.innerHTML = "  <h1>Example</h1>" + dat[0].meanings[0].definitions[0].example;

    }

    

}


document.getElementById('searchBox').addEventListener('keyup', function(event) {
      
        if (event.code === 'Enter')
        {
            word()
        }
    });

function reloadPage()
    {
location.reload()
document.getElementById('searchBox').value=""

    }