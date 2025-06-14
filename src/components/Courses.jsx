import React from 'react'
import { Clock, Users, BookOpen, Calendar } from 'lucide-react'

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Data Structures & Algorithms',
      code: 'CS301',
      instructor: 'Prof. Sarah Smith',
      schedule: 'Mon, Wed, Fri - 10:00 AM',
      progress: 75,
      nextClass: 'Today, 10:00 AM',
      assignments: 2,
      students: 45,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Database Management Systems',
      code: 'CS302',
      instructor: 'Prof. Michael Brown',
      schedule: 'Tue, Thu - 2:00 PM',
      progress: 60,
      nextClass: 'Tomorrow, 2:00 PM',
      assignments: 1,
      students: 38,
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'Software Engineering',
      code: 'CS303',
      instructor: 'Prof. Emily Davis',
      schedule: 'Mon, Wed - 3:00 PM',
      progress: 80,
      nextClass: 'Monday, 3:00 PM',
      assignments: 3,
      students: 42,
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Computer Networks',
      code: 'CS304',
      instructor: 'Prof. James Wilson',
      schedule: 'Tue, Thu - 11:00 AM',
      progress: 45,
      nextClass: 'Thursday, 11:00 AM',
      assignments: 1,
      students: 35,
      color: 'bg-orange-500'
    },
    {
      id: 5,
      title: 'Machine Learning',
      code: 'CS305',
      instructor: 'Prof. Lisa Chen',
      schedule: 'Wed, Fri - 1:00 PM',
      progress: 30,
      nextClass: 'Friday, 1:00 PM',
      assignments: 2,
      students: 28,
      color: 'bg-red-500'
    }
  ]

  const recentAssignments = [
    {
      id: 1,
      title: 'Binary Search Tree Implementation',
      course: 'CS301',
      dueDate: 'Tomorrow, 11:59 PM',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Database Design Project',
      course: 'CS302',
      dueDate: 'Friday, 11:59 PM',
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Software Requirements Document',
      course: 'CS303',
      dueDate: 'Next Monday, 11:59 PM',
      status: 'not-started'
    }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Courses</h1>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
          Browse All Courses
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="flex items-start justify-between mb-4">
              <div className={`${course.color} p-3 rounded-lg`}>
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-muted-foreground">{course.code}</span>
            </div>

            <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{course.instructor}</p>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-2" />
                {course.schedule}
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Next: {course.nextClass}
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Users className="w-4 h-4 mr-1" />
                  {course.students} students
                </div>
                <span className="text-orange-500 font-medium">
                  {course.assignments} assignments due
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`${course.color} h-2 rounded-full transition-all`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <button className="w-full py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors">
                View Course Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Assignments</h2>
        <div className="space-y-4">
          {recentAssignments.map((assignment) => (
            <div key={assignment.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex-1">
                <h3 className="font-medium">{assignment.title}</h3>
                <p className="text-sm text-muted-foreground">{assignment.course}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{assignment.dueDate}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  assignment.status === 'pending' ? 'bg-orange-100 text-orange-800' :
                  assignment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {assignment.status.replace('-', ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses

