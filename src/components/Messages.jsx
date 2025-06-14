import React, { useState } from 'react'
import { Send, Paperclip, Smile, Phone, Video, MoreVertical } from 'lucide-react'

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1)
  const [newMessage, setNewMessage] = useState('')

  const conversations = [
    {
      id: 1,
      name: 'Prof. Sarah Smith',
      lastMessage: 'Great work on your assignment!',
      time: '2:30 PM',
      unread: 0,
      avatar: '/api/placeholder/40/40',
      online: true
    },
    {
      id: 2,
      name: 'Study Group - CS301',
      lastMessage: 'Meeting tomorrow at 4 PM',
      time: '1:15 PM',
      unread: 3,
      avatar: '/api/placeholder/40/40',
      online: false
    },
    {
      id: 3,
      name: 'Mike Johnson',
      lastMessage: 'Can you help with the database project?',
      time: '11:45 AM',
      unread: 1,
      avatar: '/api/placeholder/40/40',
      online: true
    },
    {
      id: 4,
      name: 'Emma Wilson',
      lastMessage: 'Thanks for the notes!',
      time: 'Yesterday',
      unread: 0,
      avatar: '/api/placeholder/40/40',
      online: false
    }
  ]

  const messages = [
    {
      id: 1,
      sender: 'Prof. Sarah Smith',
      content: 'Hi Alex, I reviewed your latest assignment submission.',
      time: '2:25 PM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Thank you for the quick review, Professor!',
      time: '2:27 PM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Prof. Sarah Smith',
      content: 'Great work on your assignment! Your analysis of the algorithm complexity was particularly insightful.',
      time: '2:30 PM',
      isOwn: false
    },
    {
      id: 4,
      sender: 'You',
      content: 'I really appreciate the feedback. Should I prepare anything specific for next week\'s lecture?',
      time: '2:32 PM',
      isOwn: true
    }
  ]

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage('')
    }
  }

  return (
    <div className="flex h-full">
      {/* Conversations List */}
      <div className="w-80 border-r border-border bg-card">
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold">Messages</h2>
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full mt-2 px-3 py-2 bg-muted rounded-lg border-0 focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="overflow-y-auto">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setSelectedChat(conversation.id)}
              className={`w-full p-4 flex items-center space-x-3 hover:bg-muted transition-colors ${
                selectedChat === conversation.id ? 'bg-muted' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={conversation.avatar}
                  alt={conversation.name}
                  className="w-12 h-12 rounded-full"
                />
                {conversation.online && (
                  <div className="absolute -bottom-1 -right-1 online-indicator"></div>
                )}
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center justify-between">
                  <p className="font-medium truncate">{conversation.name}</p>
                  <span className="text-xs text-muted-foreground">{conversation.time}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
              </div>
              {conversation.unread > 0 && (
                <span className="notification-badge">{conversation.unread}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-border bg-card flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/api/placeholder/40/40"
              alt="Prof. Sarah Smith"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-medium">Prof. Sarah Smith</h3>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-muted rounded-lg">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg">
              <Video className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs lg:max-w-md ${
                message.isOwn 
                  ? 'chat-bubble' 
                  : 'chat-bubble received'
              }`}>
                <p>{message.content}</p>
                <p className="text-xs opacity-70 mt-1">{message.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-border bg-card">
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-muted rounded-lg">
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="w-full px-4 py-2 bg-muted rounded-lg border-0 focus:ring-2 focus:ring-primary"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-background rounded">
                <Smile className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleSendMessage}
              className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages

