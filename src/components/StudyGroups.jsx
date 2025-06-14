import React from 'react'
import { Users, Calendar, MapPin, Clock } from 'lucide-react'

const StudyGroups = () => {
  const studyGroups = [
    {
      id: 1,
      name: 'Algorithm Study Group',
      course: 'CS301 - Data Structures',
      members: 8,
      maxMembers: 10,
      nextMeeting: 'Today, 4:00 PM',
      location: 'Library Room B',
      description: 'Weekly study sessions focusing on algorithm design and analysis.',
      isJoined: true,
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'Database Project Team',
      course: 'CS302 - Database Systems',
      members: 5,
      maxMembers: 6,
      nextMeeting: 'Tomorrow, 2:00 PM',
      location: 'Computer Lab 3',
      description: 'Collaborative project work on database design and implementation.',
      isJoined: true,
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 3,
      name: 'Software Engineering Workshop',
      course: 'CS303 - Software Engineering',
      members: 12,
      maxMembers: 15,
      nextMeeting: 'Friday, 3:00 PM',
      location: 'Room 205',
      description: 'Hands-on workshops covering software development methodologies.',
      isJoined: false,
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 4,
      name: 'ML Study Circle',
      course: 'CS305 - Machine Learning',
      members: 6,
      maxMembers: 8,
      nextMeeting: 'Monday, 5:00 PM',
      location: 'Online (Zoom)',
      description: 'Deep dive into machine learning concepts and practical applications.',
      isJoined: false,
      avatar: '/api/placeholder/60/60'
    }
  ]

  const upcomingMeetings = [
    {
      id: 1,
      group: 'Algorithm Study Group',
      time: 'Today, 4:00 PM',
      location: 'Library Room B',
      topic: 'Dynamic Programming Techniques'
    },
    {
      id: 2,
      group: 'Database Project Team',
      time: 'Tomorrow, 2:00 PM',
      location: 'Computer Lab 3',
      topic: 'Project Milestone Review'
    },
    {
      id: 3,
      group: 'Software Engineering Workshop',
      time: 'Friday, 3:00 PM',
      location: 'Room 205',
      topic: 'Agile Development Practices'
    }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Study Groups</h1>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
          Create New Group
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Available Groups</h2>
          {studyGroups.map((group) => (
            <div key={group.id} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={group.avatar}
                  alt={group.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{group.name}</h3>
                      <p className="text-sm text-muted-foreground">{group.course}</p>
                    </div>
                    {group.isJoined && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Joined
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mt-2 mb-4">
                    {group.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {group.members}/{group.maxMembers} members
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      Next: {group.nextMeeting}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {group.location}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    {group.isJoined ? (
                      <div className="flex space-x-2">
                        <button className="flex-1 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors">
                          View Details
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          Leave
                        </button>
                      </div>
                    ) : (
                      <button className="w-full py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                        Join Group
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Upcoming Meetings</h2>
            <div className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <div key={meeting.id} className="p-4 bg-muted rounded-lg">
                  <h3 className="font-medium">{meeting.group}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{meeting.topic}</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {meeting.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {meeting.location}
                    </div>
                  </div>
                  <button className="mt-3 w-full py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors">
                    Join Meeting
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Groups Joined</span>
                <span className="font-semibold">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Meetings This Week</span>
                <span className="font-semibold">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Study Hours</span>
                <span className="font-semibold">12h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Collaboration Score</span>
                <span className="font-semibold text-green-600">Excellent</span>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <h3 className="font-semibold text-primary mb-2">Create Your Own Group</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Start a study group for your course and invite classmates to join collaborative learning sessions.
            </p>
            <button className="w-full py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudyGroups

