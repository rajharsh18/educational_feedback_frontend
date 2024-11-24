import React, { Component } from "react"
import { Link } from "react-router-dom"
import { SidebarContext } from "./Sidebar"

class SidebarItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseEnter() {
    this.setState({ hover: true })
  }

  handleMouseLeave() {
    this.setState({ hover: false })
  }

  render() {
    return (
      <SidebarContext.Consumer>
        {({ expanded }) => {
          const { icon, text, to, active, alert, subitems } = this.props
          const { hover } = this.state

          return (
            <li
              className="relative"
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <div>
                <Link
                  to={to}
                  className={`
                    flex items-center py-2 px-3 my-1
                    font-medium rounded-md cursor-pointer
                    transition-colors group
                    ${active
                      ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                      : "hover:bg-indigo-50 text-gray-600"}
                  `}
                  onClick={subitems ? null : undefined} // Prevent click on header if subitems exist
                >
                  {icon}
                  <span
                    className={`overflow-hidden transition-all ${
                      expanded ? "w-52 ml-3" : "w-0"
                    }`}
                  >
                    {text}
                  </span>
                  {alert && (
                    <div
                      className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                        expanded ? "" : "top-2"
                      }`}
                    />
                  )}
                  {!expanded && (
                    <div
                      className={`
                        absolute left-full rounded-md px-2 py-1 ml-6
                        bg-indigo-100 text-indigo-800 text-sm
                        invisible opacity-20 -translate-x-3 transition-all
                        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                      `}
                    >
                      {text}
                    </div>
                  )}
                </Link>
                {subitems && (
                  <ul className={`transition-all ${hover ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
                    {subitems.map((item, index) => (
                      <li key={index} className="pl-6">
                        <Link
                          to={item.to}
                          className="flex items-center py-2 px-3 my-1 font-medium rounded-md text-gray-600 hover:bg-indigo-50"
                        >
                          {item.icon}
                          <span className={`ml-3 ${expanded ? 'block' : 'hidden'}`}>
                            {item.text}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          )
        }}
      </SidebarContext.Consumer>
    )
  }
}

export default SidebarItem
