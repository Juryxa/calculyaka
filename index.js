let a = '';
let b = '';
let strA ='';
let strB ='';
let strS ='';
let sign = '';
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['÷','×','+','−'];

const out = document.querySelector('.calc-screen p');

function clearAll() {
  a = '';
  b = '';
  strA ='';
  strB ='';
  strS ='';
  sign = '';
  finish = false;
  out.textContent = '0';
}
document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
  if (!event.target.classList.contains('btn') || event.target.classList.contains('ac')){
    return;
  }
  out.textContent = '';
  const key = event.target.textContent;

  if (digit.includes(key)){
    if (b==='' && sign === ''){
      a+=key;
      strA=a;
      out.textContent = strA;
    }
    else if (a!=='' && b!=='' && finish){
      b = key;
      finish = false;
      out.textContent = b;
    }
    else{
      b+=key;
      strB=b;
      out.textContent = strA + strS + strB;
    }
  }
  if (action.includes(key) && a!==''){
    sign = key;
    strS=sign;
    out.textContent = strA + strS;
  }
  if ((action.includes(key) && a==='')||(key==='=' && a==='')){
    out.textContent = '0';
  }
  if (key === '='){
    if (a!=='' && sign===''){
      out.textContent = a;
    }
    if (b==='') b = a;
    switch (sign){
      case "+":
        a = (+a) + (+b);
        break;
      case "−":
        a = a - b;
        break;
      case "×":
        a = a * b;
        break;
      case "÷":
        if (b === '0'){
          out.textContent = 'Ошибка';
          a = '';
          b = '';
          sign = '';
          return;
        }
        a = a/b;
        break;
    }
    finish = true;

    out.textContent = a.toFixed(3);
  }
}


