import React from 'react';
import TestHook from './TestHook/index'
import TestContext from './Context/index'
import DeepContext from './DeepContext/index'


const Test = () => {
	return (
		<div>
			<TestHook></TestHook>
			<TestContext></TestContext>
			<DeepContext></DeepContext>
		</div>
	);
}

export default Test;