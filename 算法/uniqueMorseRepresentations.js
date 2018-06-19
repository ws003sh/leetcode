//leetcode 804 uniqueMorseRepresentations
var words = ["gin", "zen", "gig", "msg"]
var morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
var uniqueMorseRepresentations = function(words) {
    var d = [];
    function getWords(words){
        let wordsLen = words.length;
        for(let i = 0;i<wordsLen;i++){
            word2U(words[i])
        }
    }
    getWords(words)

    function word2U(word){
        let wordsLen = word.length;
        let a = [];
        for(let i = 0;i<wordsLen + 1;i++){
            if(i == wordsLen ){
                u2m(a)
            }else{
                //转化为数字
                a.push(word[i].charCodeAt() - 97 )
            }
        }
    }

    function u2m(resoult){
        let a = [];
        let wordsLen = resoult.length;
        for(let i = 0;i<wordsLen + 1;i++){
            if(i == wordsLen ){
                let b = a.join("");
                d.push(b)
                if(d.length == words.length){
                    checkArry(d)
                }
            }else{
                a[i] = morse[resoult[i]];
            }
        }
    }
    function checkArry(d){
        let dfg = d.filter(function (element, index, array) {
            return array.indexOf(element) === index;
        });
       return dfg
    }
    return checkArry(d);
};

console.log(uniqueMorseRepresentations(words))