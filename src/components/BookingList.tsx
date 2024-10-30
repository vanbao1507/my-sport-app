import React from "react";

interface Booking {
  id: number;
  name: string;
  court: string;
  date: string;
  time: string;
}

const bookings: Booking[] = [
  {
    id: 1,
    name: "John Doe",
    court: "Sân A",
    date: "2024-03-15",
    time: "14:00-15:00",
  },
  {
    id: 2,
    name: "Jane Smith",
    court: "Sân B",
    date: "2024-03-15",
    time: "15:00-16:00",
  },
  {
    id: 3,
    name: "Mike Johnson",
    court: "Sân C",
    date: "2024-03-16",
    time: "10:00-11:00",
  },
  {
    id: 4,
    name: "Emily Brown",
    court: "Sân A",
    date: "2024-03-16",
    time: "11:00-12:00",
  },
  {
    id: 5,
    name: "David Lee",
    court: "Sân B",
    date: "2024-03-17",
    time: "09:00-10:00",
  },
];

function BookingList() {
  return (
    <div className="booking-list">
      <h2>Recent Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Court</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.name}</td>
              <td>{booking.court}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingList;
