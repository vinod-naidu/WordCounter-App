<script>
let textareaele=document.getElementById('text-content')
let wordcountele=document.getElementById('word-count')
let charcountele=document.getElementById('char-count')
let content='';
 textareaele.addEventListener(
    'input' ,() => {
        content=textareaele.value;
        charcountele.innerHTML=content.length;
        let text=content.trim()
        let words=text.split(/\s/).length;
        wordcountele.innerHTML=words;

    }
)
</script>
