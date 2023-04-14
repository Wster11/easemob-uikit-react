// import { Button } from '../../dist/ChatUI.esm.js';
import Button from '../../src/button/index';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import '../../dist/style.css';
import './index.scss';
import {
	ConfigContext,
	ConfigProvider,
	ConfigConsumer,
} from '../../src/config/index';

const TestButton = () => {
	return (
		<ConfigConsumer>
			{(data) => {
				console.log('data, value', data);
				return (
					<>
						<div className="white">
							<Button
								size={'large'}
								type="default"
								className="button"
							>
								default
							</Button>
							<Button
								size={'large'}
								type="primary"
								className="button"
							>
								primary
							</Button>
							<Button
								size={'large'}
								type="primary"
								disabled
								className="button"
							>
								primary-disabled
							</Button>

							<Button
								size={'large'}
								type="ghost"
								className="button"
							>
								ghost
							</Button>

							<Button
								size={'large'}
								type="primary"
								className="button"
								shape="round"
							>
								round
							</Button>

							<Button
								type="primary"
								className="button"
								shape="round"
							>
								round
							</Button>

							<Button
								size={'large'}
								type="primary"
								className="button"
								shape="circle"
							>
								C
							</Button>
							<Button
								size={'small'}
								type="primary"
								className="button"
								shape="circle"
							>
								Cs
							</Button>
							<Button
								type="primary"
								className="button"
								shape="circle"
							>
								C
							</Button>
						</div>
						<div className="black">
							<Button
								size={'large'}
								type="default"
								className="button"
							>
								default
							</Button>
							<Button
								size={'large'}
								type="primary"
								className="button"
							>
								primary
							</Button>
							<Button
								size={'large'}
								type="primary"
								disabled
								className="button"
							>
								primary-disabled
							</Button>

							<Button
								size={'large'}
								type="ghost"
								className="button"
							>
								ghost
							</Button>

							<Button
								size={'large'}
								type="primary"
								className="button"
								shape="round"
							>
								round
							</Button>

							<Button
								type="primary"
								className="button"
								shape="round"
							>
								round
							</Button>

							<Button
								size={'large'}
								type="primary"
								className="button"
								shape="circle"
							>
								C
							</Button>
							<Button
								size={'small'}
								type="primary"
								className="button"
								shape="circle"
							>
								Cs
							</Button>
							<Button
								type="primary"
								className="button"
								shape="circle"
							>
								C
							</Button>
						</div>
					</>
				);
			}}
		</ConfigConsumer>
	);
};

ReactDOM.createRoot(document.getElementById('buttonRoot') as Element).render(
	<div className="container">
		{/* <ConfigProvider
			value={{
				getPrefixCls: () => {
					return 'qqq';
				},
				iconPrefixCls: 'bamboo',
			}}
		> */}
		<TestButton></TestButton>
		{/* </ConfigProvider> */}
	</div>
);
