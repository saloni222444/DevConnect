import { useState } from 'react'
import { Calendar, MapPin, Users } from 'lucide-react'

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  attendees: number
  maxAttendees: number
  organizer: string
  imageUrl?: string
}

const mockEvents: Event[] = [
  {
    id: 1,
    title: "React Workshop 2024",
    description: "Learn the latest React features and best practices in this hands-on workshop.",
    date: "2024-02-15",
    time: "10:00 AM",
    location: "Tech Hub, Downtown",
    attendees: 25,
    maxAttendees: 50,
    organizer: "DevConnect Team"
  },
  {
    id: 2,
    title: "JavaScript Meetup",
    description: "Monthly meetup for JavaScript developers to share knowledge and network.",
    date: "2024-02-20",
    time: "6:00 PM",
    location: "Community Center",
    attendees: 40,
    maxAttendees: 60,
    organizer: "JS Community"
  }
]

export default function EventsPage() {
  const [events] = useState<Event[]>(mockEvents)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Developer Events</h1>
        <a
          href="/events/create"
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
        >
          Create Event
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="group bg-white border border-gray-200 rounded-lg p-6 
                     hover:border-cyan-500 hover:shadow-lg transition-all duration-300
                     hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-700 transition-colors">
              {event.title}
            </h3>
            <p className="text-gray-600 mb-4">{event.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                {event.date} at {event.time}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-2" />
                {event.location}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-2" />
                <span className="font-medium text-gray-700">{event.attendees}</span>
                <span className="mx-1 text-gray-400">/</span>
                <span className="text-gray-600">{event.maxAttendees} attendees</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="text-sm text-gray-500">by {event.organizer}</span>
              <a
                href={`/events/${event.id}`}
                className="text-cyan-600 hover:text-cyan-700 text-sm font-medium 
                         group-hover:underline transition-colors"
              >
                View Details →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}