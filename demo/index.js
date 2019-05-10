import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var DemoArray = [{"example":<Demo1 />,"title":" 温度计、液位计","code":"/**\n *\n * @title 温度计、液位计\n * @description 包含温度计组件三种、液位计组件三种 用于智能工厂\n *\n */\n\nimport React, { Component } from 'react';\nimport { Col, Row } from 'tinper-bee';\nimport  Thermometer, ContentGage  from \"ac-thermometer\";\n\nclass Demo1 extends Component {\n    constructor() {\n        super();\n        this.state = {\n            num: 0\n        }\n    }\n    componentDidMount = () => {\n        setInterval(() => {\n            let num = Math.floor(Math.random() * (100 - 0 + 1) + 0);\n            this.setState({ num });\n        }, 3000);\n    }\n    render() {\n        let { num } = this.state;\n        return (\n            <div>\n                <Row style={{ \"paddingTop\": \"30px\", \"paddingBottom\": \"30px\" }}>\n                    <Col md={2}>\n                        <Thermometer\n                            theme=\"light\"\n                            value={num}\n                            max=\"100\"\n                            steps=\"5\"\n                            format=\"°C\"\n                            size=\"small\"\n                            height=\"400\"\n                        />\n                    </Col>\n                    <Col md={2}>\n                        <Thermometer\n                            theme=\"light\"\n                            value={num}\n                            max=\"100\"\n                            steps=\"5\"\n                            format=\"°C\"\n                            size=\"normal\"\n                            height=\"400\"\n                        />\n                    </Col>\n                    <Col md={2}>\n                        <Thermometer\n                            theme=\"light\"\n                            value={num}\n                            max=\"100\"\n                            steps=\"5\"\n                            format=\"°C\"\n                            size=\"large\"\n                            height=\"400\"\n                        />\n                    </Col>\n                    <Col md={2}>\n                        <ContentGage\n                            theme=\"light\"\n                            value={num}\n                            max=\"100\"\n                            steps=\"5\"\n                            format=\"L\"\n                            size=\"small\"\n                            height=\"400\"\n                        />\n                    </Col>\n                    <Col md={2}>\n                        <ContentGage\n                            theme=\"light\"\n                            value={num}\n                            max=\"100\"\n                            steps=\"5\"\n                            format=\"L\"\n                            size=\"normal\"\n                            height=\"400\"\n                        />\n                    </Col>\n                    <Col md={2}>\n                        <ContentGage\n                            theme=\"light\"\n                            value={num}\n                            max=\"100\"\n                            steps=\"5\"\n                            format=\"L\"\n                            size=\"large\"\n                            height=\"400\"\n                        />\n                    </Col>\n                </Row>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 包含温度计组件三种、液位计组件三种 用于智能工厂"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
