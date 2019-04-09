const PubSub = require('../helpers/pub_sub.js');

const FormView = function(element){
  this.element = element;
};

FormView.prototype.bindEvents = function(){
  PubSub.subscribe('all-instrument-families-ready', (evt) => {
    const allInstrumentFamilies = evt.detail;
    this.populate(allInstrumentFamilies);
  });

this.element.addEventListener('change', (evt)=>{
    const selectedInstrumentFamily = evt.target.value;
    PubSub.publish('selected-instrument', selectedInstrumentFamily);
  });
};

FormView.prototype.populate = function(instrumentFamData){
  instrumentFamData.forEach((instrumentFam, index)=>{
    const option = document.createElement('option');
    option.textContent = instrumentFam.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = FormView;
