/**
 *
 * @title 温度计、液位计
 * @description 包含温度计组件三种、液位计组件三种 用于智能工厂
 *
 */

import React, { Component } from 'react';
import { Col, Row } from 'tinper-bee';
import { Thermometer, ContentGage } from '../../src/index';

class Demo1 extends Component {
    constructor() {
        super();
        this.state = {
            num: 0
        }
    }
    componentDidMount = () => {
        setInterval(() => {
            let num = Math.floor(Math.random() * (100 - 0 + 1) + 0);
            this.setState({ num });
        }, 3000);
    }
    render() {
        let { num } = this.state;
        return (
            <div>
                <Row style={{ "paddingTop": "30px", "paddingBottom": "30px" }}>
                    <Col md={2}>
                        <Thermometer
                            theme="light"
                            value={num}
                            max="100"
                            steps="5"
                            format="°C"
                            size="small"
                            height="400"
                        />
                    </Col>
                    <Col md={2}>
                        <Thermometer
                            theme="light"
                            value={num}
                            max="100"
                            steps="5"
                            format="°C"
                            size="normal"
                            height="400"
                        />
                    </Col>
                    <Col md={2}>
                        <Thermometer
                            theme="light"
                            value={num}
                            max="100"
                            steps="5"
                            format="°C"
                            size="large"
                            height="400"
                        />
                    </Col>
                    <Col md={2}>
                        <ContentGage
                            theme="light"
                            value={num}
                            max="100"
                            steps="5"
                            format="L"
                            size="small"
                            height="400"
                        />
                    </Col>
                    <Col md={2}>
                        <ContentGage
                            theme="light"
                            value={num}
                            max="100"
                            steps="5"
                            format="L"
                            size="normal"
                            height="400"
                        />
                    </Col>
                    <Col md={2}>
                        <ContentGage
                            theme="light"
                            value={num}
                            max="100"
                            steps="5"
                            format="L"
                            size="large"
                            height="400"
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Demo1;
