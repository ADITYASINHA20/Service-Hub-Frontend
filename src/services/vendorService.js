import API from "./api";

export const getVendorBookings = async () => {

  return await API.get(
    "/bookings/vendor"
  );

};

export const acceptBooking = async (id) => {

  return await API.put(
    `/bookings/accept/${id}`
  );

};

export const deliveredBooking = async (id) => {

  return await API.put(
    `/bookings/delivered/${id}`
  );

};