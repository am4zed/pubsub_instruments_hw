const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container){
  this.container = container;
};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('selected-instrument-family-object', (evt)=>{
    const instrumentFamily = evt.detail;
    this.render(instrumentFamily);
  });
};

ResultView.prototype.render = function(){
  const heading = document.createElement('h2');
  const infoParagraph = document.createElement('p');
  const instrumentsHeading = document.createElement('h3');
  const instrumentList = document.createElement('ul');
  heading.textContent = `${instrumentFamily.name}`;
  this.container.appendChild(heading);
  infoParagraph.textContent = ``
};
