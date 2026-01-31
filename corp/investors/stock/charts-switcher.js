// IE5-compatible chart switcher for charts.html
(function() {
  function getSelectValue(select) {
    if (!select || !select.options || select.selectedIndex < 0) {
      return '';
    }
    var opt = select.options[select.selectedIndex];
    return opt.value || opt.text;
  }

  function updateChart() {
    var form = document.forms[0];
    if (!form) {
      return false;
    }

    var time = getSelectValue(form.time);
    var freq = getSelectValue(form.freq);
    var comp = getSelectValue(form.comp);

    // Validate selections
    if (!time || !freq) {
      return false;
    }

    // Map comparison values
    var compMap = {
      '': 'none',
      'nya': 'NYSE',
      'nasdaq': 'NASDAQ',
      'djia': 'DJIA',
      'rut': 'RUSSELL2000',
      'sp500': 'SP500',
      'xmi': 'AMEX'
    };

    var compareKey = compMap[comp] || 'none';

    // Build filename: ENE_{time}_{freq}_{compare}.jpg
    var filename = 'ENE_' + time + '_' + freq + '_' + compareKey + '.jpg';
    var chartPath = '/src/img/charts/' + filename;

    // Update the chart image
    var chartImg = document.getElementById('stockChart');
    if (chartImg) {
      chartImg.onerror = function() {
        this.onerror = null;
        this.src = '/src/img/charts/ENE_unavailable.jpg';
        this.alt = 'Chart unavailable';
        this.title = 'Chart unavailable';
      };
      chartImg.alt = 'Click for historical price lookup';
      chartImg.title = 'Click for historical price lookup';
      chartImg.src = chartPath;
    }

    return false; // Prevent form submission
  }

  function init() {
    var form = document.forms[0];
    if (form) {
      form.onsubmit = updateChart;
      
      // Initial load with default values
      updateChart();
    }
  }

  // IE5-compatible initialization
  if (window.attachEvent) {
    window.attachEvent('onload', init);
  } else {
    window.onload = init;
  }
})();
