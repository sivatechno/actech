import React from 'react'
import './Header.scss'
import * as AiIcons from 'react-icons/all'

export default function Header() {
    return (
        <div className="header">
          <div className="header-left">
 <a href="#default" className="User Manager">User Manager</a>
          </div>
  <div className="header-right">
    <a href="#chat">chat</a>
    <a href="#notification">notification</a>
    <a href="#profile">profile</a>
  </div>
</div>
    )
}
