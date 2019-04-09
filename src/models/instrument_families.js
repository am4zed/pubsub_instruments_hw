const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('all-instrument-families-ready', this.data);
  PubSub.subscribe('selected-instrument', (evt)=>{
    const selectedIndex = evt.detail;
    this.publishInstrumentFamilyDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishInstrumentFamilyDetail = function(index){
  const selectedInstrumentFamily = this.data[index];
  PubSub.publish('selected-instrument-family-object', selectedInstrumentFamily)
};

module.exports = InstrumentFamilies;
