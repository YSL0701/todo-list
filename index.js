var btnAdd = document.querySelector('.add');
var btnEdit = document.querySelector('.edit');
var btnDel = document.querySelector('.del');
var tb = document.querySelector('.table tbody');

btnAdd.addEventListener('click', function (e) {
  var lastNo =
    parseInt(tb.querySelector('tr:last-child .no')?.textContent) || 0;
  var newRow = document.createElement('tr');

  newRow.innerHTML = `<tr>
      <td class="no">${lastNo + 1}</td>
      <td class="content"><input /></td>
      <td class="btnEtr"><button class="editComp">Enter</button></td>
    </tr>`;

  tb.appendChild(newRow);
});

btnDel.addEventListener('click', function (e) {
  var ckList = tb.querySelectorAll('input');
  var ckListCk = [];

  ckList.forEach(function (el) {
    if (el.checked) {
      ckListCk.push(el.parentNode.parentNode);
    }
  });

  ckListCk.forEach(function (el) {
    tb.removeChild(el);
  });
});

tb.addEventListener('click', function (e) {
  //console.log(e.target,e.currentTarget);
  if (e.target.classList.contains('editComp')) {
    var currentEnterRow = e.target.parentNode.parentNode;
    var etrTd = currentEnterRow.querySelector('td.btnEtr');
    var editTd = currentEnterRow.querySelector('td.content');
    var editInput = currentEnterRow.querySelector('td.content input');
    var editTxt = editInput.value;
    //  var new
    editTd.innerHTML = editTxt;
    etrTd.innerHTML = `<input type="checkbox" id="" />`;
    etrTd.classList.replace('btnEtr', 'ck');
  }
});

btnEdit.addEventListener('click', function (e) {
  var ckList = tb.querySelectorAll('input');
  var ckListCk = [];

  ckList.forEach(function (el) {
    if (el.checked) {
      var ckTr = el.parentNode.parentNode;
      var contentTd = ckTr.querySelector('td.content');
      ckListCk.push(contentTd);
    }
  });

  ckListCk.forEach(function (el) {
    var oringinalTxt = el.textContent;
    var ckTd = el.parentNode.querySelector('td.ck');
    el.innerHTML = `<input value=${oringinalTxt} />`;
    ckTd.innerHTML = `<button class="editComp">Enter</button>`;
    ckTd.classList.replace('ck', 'btnEtr');
  });
});
