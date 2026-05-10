import api from "./api";

// CREATE BOOKING
export const createBooking = (data) => {

  return api.post(
    "/bookings",
    data
  );

};

// GET BOOKINGS
export const getBookings = () => {

  return api.get(
    "/bookings"
  );

};

// ACCEPT BOOKING
export const acceptBooking = (id) => {

  return api.put(
    `/bookings/accept/${id}`
  );

};

// DELIVER BOOKING
export const deliverBooking = (id) => {

  return api.put(
    `/bookings/deliver/${id}`
  );

};