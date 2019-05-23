import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCalculation, clearCalculation } from './action';
import CButton from './button';

class Calculator extends Component {
	componentDidMount() {
		this.forceScrollOnDisplay();
	}

	componentDidUpdate() {
		this.forceScrollOnDisplay();
	}

	forceScrollOnDisplay() {
		this.refs.calculationDisplay.scrollLeft = 10000;
		this.refs.resultDisplay.srollLeft= 10000;
	}

	replaceChars(value) {
		value=value.join("");
		value=value.replace(/\//g, '<span class="operatorStyle">÷</span>');
		value=value.replace(/\*/g, '<span class="operatorStyle">×</span>');
		value=value.replace(/-/g, '<span class="operatorStyle">-</span>');
		value=value.replace(/\+/g, '<span class="operatorStyle">+</span>');
		return value;
	}

	render() {
		return (
			<div className='calculator'>
				<div className='calculatorResult'>
					<div ref='calculationDisplay' className='calculationDisplay' 
					dangerouslySetInnerHTML={{__html:this.props.calculation.length ? 
						this.replaceChars(this.props.calculation) : 0 }} />
					<div ref='resultDisplay' className='resultDisplay'>{this.props.result}</div>
				</div>

				<button className='clear' onClick={()=>this.props.clearCalculation()}>C</button>
				<div className='input'>
					<CButton value={7} />
					<CButton value={8} />
					<CButton value={9} />
					<CButton value="/" htmlCode="247" additionalClass="operator" />
				</div>

				<div className='input'>
					<CButton value={4} />
					<CButton value={5} />
					<CButton value={6} />
					<CButton value="*" htmlCode="215" additionalClass="operator" />
				</div>

				<div className='input'>
					<CButton value={1} />
					<CButton value={2} />
					<CButton value={3} />
					<CButton value="-" htmlCode="8722" additionalClass="operator" />
				</div>

				<div className='input'>
					<CButton value={0} additionalClass="zero" />
					<CButton value="+" htmlCode="43" additionalClass="operator" />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps=(dispatch) => ({
	updateCalculation: (inputValue, currentState, currentResult)=>
	dispatch(updateCalculation(inputValue, currentState,currentResult)),
	clearCalculation: () => dispatch(clearCalculation())
});

const mapStateToProps = (state) => ({
	calculation: state.calculation,
	result: state.result
});
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);