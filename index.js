let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];



const generateDom = () => {
    let result = [];
    for (var i = 0; i < pronoun.length; i ++ ) {
        for (var j = 0; j < adj.length; j ++ ) {
        for (var k = 0; k < noun.length; k ++ ){
        
        
          result.push(pronoun[i] + adj[j] + noun[k] + ".com"); 
        }
        }
        }
        return result;
};
generateDom();
console.log(generateDom());


/*
let dom = generateDom ();
console.log(dom);
*/