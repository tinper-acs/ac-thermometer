/**
 * 液位计组件
 */

import React, { Component } from 'react';


class ContentGage extends Component {
  render() {
    this.options = this._generateOptions()
    const theme = `contentgage--theme-${this.options.theme()}`
    const size = `contentgage--${this.options.size()}`
    const height = { height: `${this.options.height}px` }
    const heightPercent = { height: `${this.options.percent()}%` }
    const heightBgColor = { height: `calc(${this.options.height}px - 57px)` }
    const valstr = this.options.valstr()
    this._createIntervals()
    const stepIntervals = this._createIntervalsUI(this.options.intervals)

    return (
      <div style={height} className={`contentgage ${size} ${theme}`}>
        <div className="contentgage__draw-a"></div>
        <div className="contentgage__draw-b"></div>
        <div className="contentgage__meter">
          <ul className="contentgage__statistics">{stepIntervals}</ul>
          <div style={heightPercent} className="contentgage__mercury">
            <div className="contentgage__percent-current">{valstr}</div>
            <div className="contentgage__mask">
              <div className="contentgage__bg-color" style={heightBgColor}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  _generateOptions() {
    return {
      theme: () => this.props.theme === 'light' || this.props.theme === 'dark' ? this.props.theme : 'light',
      value: this.props.value || 0, //default 0
      max: this.props.max || 100, //default 100
      steps: this.props.steps,
      format: this.props.format || '',
      size: () => this.props.size === 'small' || this.props.size === 'normal' || this.props.size === 'large' ? this.props.size : 'normal',
      height: this.props.height || 200, //default 200
      valstr: () => this.options.value + this.options.format,
      percent: () => this.options.value / this.options.max * 100,
      intervals: []
    }
  }

  _createIntervals() {
    if (this.options.steps) {
      for (let step = 0; step <= this.options.steps; step++) {
        let val = ((this.options.max / this.options.steps) * step).toFixed(2)
        let percent = (val / this.options.max) * 100
        let interval = { percent: percent, label: val + this.options.format }
        this.options.intervals.push(interval)
      }
    }
  }

  _createIntervalsUI(intervals) {
    return intervals.map((step, i) => {
      return (
        <li key={i} style={{ bottom: `calc(${step.percent}% - 1px)` }}>
          {step.label}
        </li>
      )
    })
  }

}

export default ContentGage;
