import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import moment from "moment";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import momentPlugin from "@fullcalendar/moment";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { headerSetting, buttonTexts } from "../FullcalendarSetting";
import { current, cerrentDate, currenttime, dayWork } from "../Current";

const handleDateClick = (arg) => {
  console.log(arg.dateStr);
};

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

const TileContent = styled.div`
  height: 8px;
  width: 8px;
  background-color: #f87171;
  border-radius: 50%;
  display: flex;
  margin-left: 1px;
`;

export default function CalendarTimeline() {
  return (
    <>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          momentPlugin,
          interactionPlugin,
          timeGridPlugin,
          listPlugin,
        ]}
        headerToolbar={headerSetting}
        // titleFormat={"YYYY-MM-DD"}
        titleFormat={"YYYY.M.D"}
        buttonText={buttonTexts}
        initialView="dayGridMonth"
        events={dayWork}
        dateClick={(date) => handleDateClick(date)}
        eventContent={(e) => renderEventContent(e)}
        editable={true}
        /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
      />
    </>
  );
}
