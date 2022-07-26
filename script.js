var outputTextElement = document.querySelector('#app');
var inputTextElement = document.querySelector('#textInput');
var targetLanguageSelector = document.querySelector('#lang');

async function translate(word, target) {
   var res = await fetch('https://libretranslate.de/translate', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            q: word,
            source: "en",
            target: target,
            format: "text"
        })
    });

    var json = await res.json()
    return json.translatedText;
}

async function translationButtonClick(){
    const i = inputTextElement.value;
    const tr = targetLanguageSelector.value;
    const result = await translate(i, tr);
    outputTextElement.textContent = result;
    outputTextElement.className = "alert alert-secondary"
}