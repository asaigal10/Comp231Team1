import React from 'react';
import ListedCourse from '../schedule/ListedCourse'; // Assuming this component exists
import { generateUniqueId } from '../../commonJs/UniqueId'; // Assuming this utility function exists
import './daySchedule.css'
export default function DaySchedule({ sharedHooks }) {
    const currentDay = new Date().getDay(); // Get the current day index (0 for Sunday, 1 for Monday, etc.)
    const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDay]; // Get the name of the current day

    // Filter courses for the current day
    const dayCourses = sharedHooks.coursesList.filter(course => {
        const courseTable = course.table[sharedHooks.selectedWeek]; // Assuming table is structured like: { 1: { 0: [[startTime, endTime], ...], ... }, ... }
        return courseTable && courseTable[currentDay] && courseTable[currentDay].length > 0;
    });

    // Generate hours from 8 am to 10 pm
    const hours = [];
    for (let i = 8; i <= 22; i++) {
        hours.push(i < 10 ? `0${i}:00` : `${i}:00`);
    }

    return (
        <div className="day-schedule">
            <div className="table-head">Day Schedule - {dayName}</div>
            <div className="hours-range">
                {hours.map(hour => (
                    <div key={hour} className="hour">{hour}</div>
                ))}
            </div>
            <div className="display-table schedule-table">
                {dayCourses.map(course => (
                    <div key={generateUniqueId()}>
                        <ListedCourse courseInfo={course} sharedHooks={sharedHooks} />
                    </div>
                ))}
            </div>
        </div>
    );
}