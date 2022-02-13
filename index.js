function filterPares(arr){
	return arr.filter(callBack)
}

//trazendo os pares
function callBack(item){
	return item % 2 === 0;
}

const Array = [2,55,7,89,34,55,74,15,48,22,42,69];

console.log(filterPares(Array));
;