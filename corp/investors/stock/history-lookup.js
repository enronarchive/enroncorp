(function () {
  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function getSelectValue(select) {
    if (!select || !select.options || select.selectedIndex < 0) {
      return '';
    }
    var opt = select.options[select.selectedIndex];
    return opt.value || opt.text;
  }

  function setText(id, text) {
    var el = document.getElementById(id);
    if (!el) {
      return;
    }
    if (typeof el.innerText !== 'undefined') {
      el.innerText = text;
    } else {
      el.innerHTML = text;
    }
  }

  function formatDateDisplay(key) {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var y = key.substring(0, 4);
    var m = parseInt(key.substring(4, 6), 10) - 1;
    var d = parseInt(key.substring(6, 8), 10);
    return d + '-' + months[m] + '-' + y;
  }

  function formatPrice(n) {
    if (n === null || typeof n === 'undefined' || isNaN(n)) {
      return 'N/A';
    }
    return n.toFixed(2);
  }

  function formatVolume(n) {
    if (n === null || typeof n === 'undefined' || isNaN(n)) {
      return 'N/A';
    }
    var s = String(n);
    var out = '';
    var i = s.length;
    var c = 0;
    while (i > 0) {
      i--;
      out = s.charAt(i) + out;
      c++;
      if (c % 3 === 0 && i > 0) {
        out = ',' + out;
      }
    }
    return out + ' shares';
  }

  function getClosestKey(targetKey) {
    if (typeof ENRON_STOCK_DATES === 'undefined' || !ENRON_STOCK_DATES.length) {
      return null;
    }
    var i = ENRON_STOCK_DATES.length - 1;
    for (; i >= 0; i--) {
      if (ENRON_STOCK_DATES[i] <= targetKey) {
        return ENRON_STOCK_DATES[i];
      }
    }
    return ENRON_STOCK_DATES[0];
  }

  function updateDisplay(key) {
    if (!key || typeof ENRON_STOCK_DATA === 'undefined') {
      setText('dateRequested', 'N/A');
      setText('closePrice', 'N/A');
      setText('changeValue', 'N/A');
      setText('changeText', 'N/A');
      setText('dayHigh', 'N/A');
      setText('dayLow', 'N/A');
      setText('dayVolume', 'N/A');
      return;
    }

    var data = ENRON_STOCK_DATA[key];
    if (!data) {
      setText('dateRequested', formatDateDisplay(key));
      setText('closePrice', 'N/A');
      setText('changeValue', 'N/A');
      setText('changeText', 'N/A');
      setText('dayHigh', 'N/A');
      setText('dayLow', 'N/A');
      setText('dayVolume', 'N/A');
      return;
    }

    var close = data.c;
    var high = data.h;
    var low = data.l;
    var volume = data.v;
    var prevClose = data.p;

    var change = (prevClose === null || typeof prevClose === 'undefined') ? 0 : (close - prevClose);
    var percent = (prevClose === null || prevClose === 0 || typeof prevClose === 'undefined') ? 0 : (change / prevClose) * 100;
    var direction = (change >= 0) ? 'up' : 'down';
    var changeAbs = Math.abs(change);
    var percentAbs = Math.abs(percent);

    setText('dateRequested', formatDateDisplay(key));
    setText('closePrice', formatPrice(close));
    setText('changeValue', formatPrice(changeAbs));
    setText('changeText', direction + ' ' + percentAbs.toFixed(2) + '%');
    setText('dayHigh', formatPrice(high));
    setText('dayLow', formatPrice(low));
    setText('dayVolume', formatVolume(volume));
    setText('lastTrade', formatDateDisplay(key) + ' 4:00 PM');

    var changeColor = document.getElementById('changeColor');
    if (changeColor) {
      changeColor.color = (change >= 0) ? '#008000' : '#FF0000';
      if (changeColor.style) {
        changeColor.style.color = (change >= 0) ? '#008000' : '#FF0000';
      }
    }
  }

  function handleLookup() {
    var form = document.getElementById('historyForm') || document.forms[0];
    if (!form) {
      return false;
    }

    var month = parseInt(getSelectValue(form.selected_month), 10);
    var day = parseInt(getSelectValue(form.selected_day), 10);
    var year = parseInt(getSelectValue(form.selected_year), 10);

    if (!year || !month || !day) {
      return false;
    }

    var key = '' + year + pad2(month) + pad2(day);
    updateDisplay(key);

    return false;
  }

  function init() {
    var form = document.getElementById('historyForm') || document.forms[0];
    if (form) {
      form.onsubmit = handleLookup;
    }
    handleLookup();
  }

  if (window.attachEvent) {
    window.attachEvent('onload', init);
  } else {
    window.onload = init;
  }
})();
