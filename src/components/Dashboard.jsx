import React from 'react'
import { Calendar, Clock, TrendingUp, Users, BookOpen, MessageSquare } from 'lucide-react'

const Dashboard = () => {
  const recentActivity = [
    {
      id: 1,
      type: 'assignment',
      title: 'Data Structures Assignment submitted',
      time: '2 hours ago',
      icon: BookOpen,
      color: 'text-blue-500'
    },
    {
      id: 2,
      type: 'message',
      title: 'New message from Prof. Smith',
      time: '4 hours ago',
      icon: MessageSquare,
      color: 'text-green-500'
    },
    {
      id: 3,
      type: 'group',
      title: 'Study group meeting scheduled',
      time: '1 day ago',
      icon: Users,
      color: 'text-purple-500'
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'Algorithm Design Lecture',
      time: 'Today, 2:00 PM',
      location: 'Room 301'
    },
    {
      id: 2,
      title: 'Database Project Due',
      time: 'Tomorrow, 11:59 PM',
      location: 'Online Submission'
    },
    {
      id: 3,
      title: 'Study Group Meeting',
      time: 'Friday, 4:00 PM',
      location: 'Library Room B'
    }
  ]

  const stats = [
    {
      title: 'Active Courses',
      value: '5',
      icon: BookOpen,
      color: 'bg-blue-500'
    },
    {
      title: 'Study Groups',
      value: '3',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Assignments Due',
      value: '2',
      icon: Clock,
      color: 'bg-orange-500'
    },
    {
      title: 'GPA',
      value: '3.8',
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.title} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => {
              const Icon = activity.icon
              return (
                <div key={activity.id} className="activity-item">
                  <div className={`p-2 rounded-lg bg-muted ${activity.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="activity-item">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-muted-foreground">{event.time}</p>
                  <p className="text-xs text-muted-foreground">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors">
            <MessageSquare className="w-6 h-6 text-primary mx-auto mb-2" />
            <span className="text-sm font-medium">Start Chat</span>
          </button>
          <button className="p-4 bg-green-500/10 hover:bg-green-500/20 rounded-lg transition-colors">
            <Users className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <span className="text-sm font-medium">Join Study Group</span>
          </button>
          <button className="p-4 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg transition-colors">
            <BookOpen className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <span className="text-sm font-medium">Browse Courses</span>
          </button>
          <button className="p-4 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg transition-colors">
            <Calendar className="w-6 h-6 text-purple-500 mx-auto mb-2" />
            <span className="text-sm font-medium">Schedule Event</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

