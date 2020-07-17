/*

thegreatjogger.com 
thegreatracoon.com
 ourgreatjogger.com
 ourgreatracoon.com 
thebigjogger.com
thebigracoon.com
ourbigjogger.com
ourbigracoon.com

ourbigracoon.com ourbigracoon.com ourbigracoon.com ourbigracoon.com 
scripts.js:51 thegreatjogger.com thegreatjogger.com thegreatjogger.com thegreatjogger.com 
*/

// Add Your Scripts here



var pronoun = ['the','our']; 
var adj = ['great', 'big' ]; 
var noun = ['jogger','racoon'];
resutldomain =""

for (let pron of pronoun) {
    for (let ad of adj) {
        for( let no of noun){
            resutldomain +=`${pron}${ad}${no}.com \n`
        }
    }
}


document.getElementById("domain").innerHTML = resutldomain;
console.log(resutldomain)
