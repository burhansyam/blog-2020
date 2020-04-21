import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
          <strong>Burhan Syam</strong>
          {' '}
          /
          {' '}
          <a href="https://twitter.com/burhansyam_" target="_blank">
            Twitter
          </a>
          {' '}
          /
          {' '}
          <a href="https://github.com/burhansyam" target="_blank">
            GitHub
          </a>
          {' '}
          /
          {' '}
          <a href="https://www.instagram.com/burhansyam_" target="_blank">
            Instagram
          </a>
          {' '}
        </div>
      </footer>
    )
  }
}