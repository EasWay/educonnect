import React from 'react'
import { Home, MessageCircle, BookOpen, Users, User, Bell, Search } from 'lucide-react'

const Sidebar = ({ activeTab, setActiveTab, user }) => {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', path: '/' },
    { id: 'messages', icon: MessageCircle, label: 'Messages', path: '/messages', badge: 3 },
    { id: 'courses', icon: BookOpen, label: 'Courses', path: '/courses' },
    { id: 'study-groups', icon: Users, label: 'Study Groups', path: '/study-groups', badge: 1 },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' }
  ]

  return (
    <div className="sidebar-nav w-64 p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary">EduConnect</h1>
        <p className="text-sm text-muted-foreground">Academic Social Platform</p>
      </div>

      <div className="mb-6">
        <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
          <img 
            src={user.avatar} 
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className="font-medium truncate">{user.name}</p>
            <p className="text-sm text-muted-foreground truncate">{user.role}</p>
          </div>
          <div className="online-indicator"></div>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="notification-badge">{item.badge}</span>
              )}
            </button>
          )
        })}
      </nav>

      <div className="mt-8 p-3 bg-primary/10 rounded-lg">
        <h3 className="font-medium text-sm mb-2">Quick Stats</h3>
        <div className="space-y-1 text-sm text-muted-foreground">
          <div className="flex justify-between">
            <span>Active Courses</span>
            <span>5</span>
          </div>
          <div className="flex justify-between">
            <span>Study Groups</span>
            <span>3</span>
          </div>
          <div className="flex justify-between">
            <span>Assignments Due</span>
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

