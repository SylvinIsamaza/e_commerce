import axios from "axios";
import {
  deleteEventFail,
  deleteEventRequest,
  deleteEventSuccess,
  getAllEventFail,
  getAllEventRequest,
  getAllEventSuccess,
  eventCreateFail,
  eventCreateRequest,
  eventCreateSuccess,
} from "../reducer/event";
import { server } from "../../server";

export const createEvent = (newForm) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    dispatch(eventCreateRequest());
    const { data } = await axios.post(
      `${server}/api/v2/event/create-event`,
      newForm,
      config
    );
    if (data) {
      dispatch(eventCreateSuccess(data.event));
    } else {
      dispatch(eventCreateFail(data.error.message));
    }
  } catch (error) {
    dispatch(eventCreateFail(error.message));
  }
};
export const getAllEvents = (id) => async (dispatch) => {
  try {
    dispatch(getAllEventRequest());
    const { data } = await axios.get(`${server}/api/v2/event/all-events/${id}`);
    console.log(data.events);

    if (data) {
      dispatch(getAllEventSuccess(data.events));
    } else {
      dispatch(getAllEventFail("no events found"));
    }
  } catch (error) {
    dispatch(getAllEventFail(error.message));
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch(deleteEventRequest());
    await axios
      .delete(`${server}/api/v2/event/${id}`, { withCredentials: true })
      .then((response) => {
        dispatch(deleteEventSuccess(response.data.message));
        console.log(response.data.message);
      })
      .catch((error) => dispatch(deleteEventFail(error)));
  } catch (error) {}
};
export const getEvents = (id) => async (dispatch) => {
  try {
    dispatch(getAllEventRequest());
    const { data } = await axios.get(`${server}/api/v2/event/`);
    console.log(data.events);

    if (data) {
      dispatch(getAllEventSuccess(data.events));
    } else {
      dispatch(getAllEventFail("no events found"));
    }
  } catch (error) {
    dispatch(getAllEventFail(error.message));
  }
};