import React, { Component } from 'react'
import youtube from '../images/youtube.svg'
import me from '../../content/images/me.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <p>
            Hai, saya adalah blogger amatir dari pinggiran desa wilayah Kabupaten Gunungkidul. Senang menulis dan mempelajari hal² baru seputar dunia IT.
            </p>
            <a href="https://www.twitter.com/burhansyam_" className="donate-button" target="_blank">
              Follow Me
              {' '}
            <img src={youtube} className="coffee-icon" />
            </a>
          </div>
          <div className="flex-avatar">
            <img className="avatar" src={me} />
          </div>
        </div>
      </aside>
    )
  }
}