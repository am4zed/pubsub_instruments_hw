const intrumentFamilyData = require('./data/instrument_family_data.js');
const instrumentFamilies = require('./models/instrument_families.js');
const formView = require('./views/form_view.js');
const resultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.bindEvents();

  const selectElement = document.querySelector('#instrument-families');
  const formView = new FormView(selectElement);
  formView.bindEvents();

  const infoDiv = document.querySelector('#instrument-family-detail');
  const resultView = new ResultView(infoDiv);
  resultView.bindEvents();


});
