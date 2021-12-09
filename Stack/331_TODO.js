/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
    const nodes = preorder.split(',')
    const stack = []
    nodes.forEach(n => {
        if(n !== '#'){
            stack.push(n)
        }else {
                  
        }
    })
};
