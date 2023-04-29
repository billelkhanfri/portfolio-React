import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp } from "react-icons/io5";
import timelineData from "../timeline.json";

const Timeline = () => {
  let schoolStyle = { background: "var(--primary-color)" };
  return (
    <VerticalTimeline>
      {timelineData.map((event) => (
        <VerticalTimelineElement
          key={event.id}
          date={event.date}
          icon={<IoSchoolSharp className="icon" />}
          iconStyle={schoolStyle}
        >
          <h3 className="vertical-timeline-element-title">{event.title}</h3>
          <p>{event.description}</p>
          <div>
            <a href="#" className="btn btn-primary ">
              {event.buttonText}
            </a>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
