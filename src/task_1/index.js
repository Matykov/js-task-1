/** Задача 1 - Сумма цифр числа
Требуется написать функцию numeralSum, которая
принимает число,
требуется вернуть сумму цифр этого числа
@param {number} number - Исходное число
@return {number} Сумма цифр числа
 */

function numeralSum(number) {

  if (isNaN(number)){
    return 0;
  }

  if (!isFinite(number)) {
    return Infinity;
  }

  let res = 0;
  let tmp = number.toString();

  for(let i=0; i < tmp.length; i++){
    let symb = tmp.charAt(i);
    if(!isNaN(symb)){
      res += parseInt(symb);
    }
  }

  return Math.abs(res);
}
numeralSum(1010);
module.exports.numeralSum = numeralSum;