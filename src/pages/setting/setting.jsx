import React, { Component } from 'react';
import {
	Switch,
	InputNumber,
	Layout
} from 'antd';
import 'antd/dist/antd.css';
import { browserHistory } from 'react-router';
import './setting.css';
import { postData } from '../../config/axios';

const { Content } = Layout;

class Setting extends Component {
	componentWillMount() {
		postData('/auth', {}).then((response) => {
			console.log(response);
			if (response.result === false) {
				browserHistory.push('/usermain/login');
			}
		});
	}

	render() {
		return (
			<Content className="entire_setting_container">
				<div className="setting_container">
					<h2>每日背诵计划<InputNumber min={1} max={1000} defaultValue={100} size="large" />个</h2>
					<h2>是否开启四级背诵<Switch checkedChildren="开" unCheckedChildren="关" defaultChecked /></h2>
					<h2>是否开启六级背诵<Switch checkedChildren="开" unCheckedChildren="关" defaultChecked /></h2>
				</div>
			</Content>
		);
	}
}

export default Setting;
