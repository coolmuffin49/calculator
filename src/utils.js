export const calculation = (calcArray, currentResult) => {
	if(isNaN(calcArray[calcArray.length-1])) {
		return currentResult;
	}

	const operatorFunction ={
		'+': (a, b) => {
		return a+b;
		},
		'-': (a, b) => {
			return a-b;
		},
		'*': (a, b) => {
			return a*b;
		},
		'/': (a, b) => {
			return a/b;
		}
	};

	let calcString= calcArray.join('');
	let calcArrayUpdated= calcString.split(/(\+|-|\*|\/)/g);
	let result= 0;
	let operator ='+';

	for(let i=0; i<calcArrayUpdated.length; i++) {
		let item=calcArrayUpdated[i];
		let isOperator=/(\+|-|\*|\/)/.test(item);

		if(isOperator) {
			operator =item;
		} else {
			result = operatorFunction[operator](result,parseInt(item));
		}
	}

	return result;
}

export const addValueToCalculation=(value, currentState) => {
	currentState=[...currentState];

	let operatorValues= ['*','/','+','-'];
	if (typeof value !=='number' && !operatorValues.includes(value)) {
		return currentState;
	}

	if (operatorValues.includes(value)&& !currentState.length) {
		return currentState;
	}

	let lastValue = currentState[currentState.length-1];
	let lastValueIsOperator= operatorValues.includes(lastValue);
	let currentValuesIsOperator= operatorValues.includes(value);

	if(lastValueIsOperator && currentValuesIsOperator) {
		currentState[currentState.length-1]= value;
		return currentState;
	}

	return [...currentState,value];
}