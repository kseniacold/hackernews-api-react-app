import Packery from 'packery';
import Draggabilly from 'draggabilly';

/**
 * pck Object literal has 2 methods
 * init() initializes draggable layout with provided packery object
 * 
 * getPackery() return a packery object iwth ".Stories" as grid 
 * and ".Story" as item
 */
const pck = {
  init: (packery) => {    
    let gridItems = document.querySelectorAll('.Story');
    // array of Draggabillies
    let draggies = []
    // init Draggabillies
    for ( let i = 0; i < gridItems.length; i++ ) {
      var draggie = new Draggabilly(gridItems[i]);
      draggies.push(draggie);
      packery.bindDraggabillyEvents(draggie);
    }    
  },

  getPackery: () => {
    let elem = document.querySelector('.Stories');
    return new Packery( elem, {
      // options
      itemSelector: '.Story',
      gutter: 20,
      percentPosition: true
    });
  }

};

export default pck;

