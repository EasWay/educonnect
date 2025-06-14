import React from 'react'
import { Mail, Phone, MapPin, Calendar, Award, BookOpen } from 'lucide-react'

const Profile = ({ user }) => {
  const achievements = [
    {
      id: 1,
      title: 'Dean\'s List',
      description: 'Achieved GPA above 3.5 for 3 consecutive semesters',
      icon: Award,
      color: 'text-yellow-500'
    },
    {
      id: 2,
      title: 'Study Group Leader',
      description: 'Successfully led 5 study groups',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      id: 3,
      title: 'Perfect Attendance',
      description: 'No missed classes this semester',
      icon: Calendar,
      color: 'text-green-500'
    }
  ]

  const courses = [
    { name: 'Data Structures & Algorithms', grade: 'A', credits: 3 },
    { name: 'Database Management Systems', grade: 'A-', credits: 3 },
    { name: 'Software Engineering', grade: 'A', credits: 4 },
    { name: 'Computer Networks', grade: 'B+', credits: 3 },
    { name: 'Machine Learning', grade: 'In Progress', credits: 3 }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-start space-x-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-full"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-lg text-muted-foreground">{user.role}</p>
            <p className="text-muted-foreground">{user.grade}</p>
            <p className="text-muted-foreground">{user.school}</p>
            
            <div className="mt-4 flex space-x-4">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
                Edit Profile
              </button>
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <span>alex.johnson@techuni.edu</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span>Dormitory Building A, Room 205</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Academic Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-primary">3.8</p>
                <p className="text-sm text-muted-foreground">Current GPA</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-green-500">16</p>
                <p className="text-sm text-muted-foreground">Credits This Semester</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-blue-500">5</p>
                <p className="text-sm text-muted-foreground">Active Courses</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold text-purple-500">3</p>
                <p className="text-sm text-muted-foreground">Study Groups</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement) => {
                const Icon = achievement.icon
                return (
                  <div key={achievement.id} className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg bg-muted ${achievement.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Current Courses</h2>
            <div className="space-y-3">
              {courses.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">{course.name}</p>
                      <p className="text-sm text-muted-foreground">{course.credits} credits</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-sm font-medium ${
                    course.grade === 'A' ? 'bg-green-100 text-green-800' :
                    course.grade === 'A-' ? 'bg-green-100 text-green-700' :
                    course.grade === 'B+' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {course.grade}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Submitted assignment</p>
                  <p className="text-sm text-muted-foreground">Data Structures - Binary Tree Implementation</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Joined study group</p>
                  <p className="text-sm text-muted-foreground">Algorithm Study Group</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium">Attended lecture</p>
                  <p className="text-sm text-muted-foreground">Software Engineering - Agile Methodologies</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <h3 className="font-semibold text-primary mb-2">Academic Goals</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Maintain GPA above 3.5</span>
                <span className="text-green-600">✓ On track</span>
              </div>
              <div className="flex justify-between">
                <span>Complete all assignments on time</span>
                <span className="text-green-600">✓ On track</span>
              </div>
              <div className="flex justify-between">
                <span>Join 2 more study groups</span>
                <span className="text-orange-600">In progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

