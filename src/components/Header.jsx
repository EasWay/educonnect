import React from 'react'
import { Bell, Search, Settings } from 'lucide-react'

const Header = ({ user }) => {
  return (
    <header className="header-bar flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h2 className="text-xl font-semibold">Welcome back, {user.name.split(' ')[0]}!</h2>
        <span className="text-sm text-muted-foreground">{user.school}</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search courses, people, or content..."
            className="pl-10 pr-4 py-2 bg-muted rounded-lg border-0 focus:ring-2 focus:ring-primary w-64"
          />
        </div>

        <button className="relative p-2 hover:bg-muted rounded-lg">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 notification-badge">2</span>
        </button>

        <button className="p-2 hover:bg-muted rounded-lg">
          <Settings className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2">
          <img 
            src={user.avatar} 
            alt={user.name}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">{user.name}</span>
        </div>
      </div>
    </header>
  )
}

export default Header

