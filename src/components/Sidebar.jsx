import React, { Component, createContext } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import logo from '../assets/du_logo_old.png';

export const SidebarContext = createContext()

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: true, // Set the value for default Sidebar
    }
    this.toggleExpanded = this.toggleExpanded.bind(this)
  }

  toggleExpanded() {
    this.setState((prevState) => ({ expanded: !prevState.expanded }))
  }

  render() {
    const { expanded } = this.state
    const { children } = this.props

    return (
      <aside className="h-auto">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src={logo}
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
              alt="logo"
            />
            <button
              onClick={this.toggleExpanded}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? <ChevronLeft /> : <ChevronRight />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>
        </nav>
      </aside>
    )
  }
}

export default Sidebar
