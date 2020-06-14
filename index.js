import data from './data.js';

(function () {
    
  let localNode = null,counter = 1;

  const createElement = (ele) => {
      const element = document.createElement(ele);
      if(ele === 'div'){
        element.className = "masonry__container--block";
      }else if(ele === 'img' && counter < 13){
        element.src = `./images/${counter}.jpg`;
        counter++;
      }else {
        element.textContent = data[counter];
      }
      
      return element;
      
  }

  const domStructure = (item) => {
    if (typeof item === "string") {
       return createElement(item);
    } else {
      return createDom(item);
    }
  };
  const createDom = function () {
    const domElementList = arguments[0];
    let currentDom = domElementList.map(domStructure);
    return currentDom;
  };

  const createDomStructure = function (item, index) {
    const getType = typeof item;

    if (!Array.isArray(item)) {
        console.log(localNode)
      localNode = item;
    } else {
      item.forEach((internalItem) => {
        localNode.appendChild(internalItem);
      });
    }
  };
  const handleAfterLoad = function () {
      for(let i = 1; i < 13; i++){
          const domList = createDom(["div", ["img", "p"]]);
          domList.forEach(createDomStructure);
          document.getElementById('masonry').appendChild(localNode);
      }
    
  };
  window.onload = handleAfterLoad;
})();
