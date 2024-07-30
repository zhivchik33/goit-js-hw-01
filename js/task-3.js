
function getElementWidth(content, padding, border) {
    const contentSize = parseFloat(content);
    const paddingSize = parseFloat(padding);
    const borderSize = parseFloat(border);
    const totalSize = contentSize + 2 * paddingSize + 2 * borderSize;
    
    return totalSize;
};

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
