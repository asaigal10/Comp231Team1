import './weekSchedule.css'
import {generateUniqueId} from '../../commonJs/UniqueId'

/** */
export default function WeekSchedule({ sharedHooks }) {
    const studyWeeksCountNumbersList = Array.from({ length: sharedHooks.studyWeeksCount }, (_, index) => index + 1);
    const getWeekDayName = (WeekDayNumber) => {
        return ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][WeekDayNumber]
    }
    const changeDay = (index) =>{
        sharedHooks.setSelectedDay(index);
    }
    const changeWeek = (weekNumber) => {
        sharedHooks.setSelectedWeek(weekNumber)
    }
    return (
        <>
            <div className='week-schedule'>
                {/* header */}
                <div className='table-head'>
                    Week Schedule
                </div>
                {/* body */}
                <div className='flex-row'>
                    {/* weeks list */}
                    <div className='width-50'>
                        <div className='table-head'>Week Number</div>
                        <div className='grid-3x4'>
                            {studyWeeksCountNumbersList.map((weekNumber) => (
                                <div key={generateUniqueId()} className={'a-link' + ' ' + (weekNumber == sharedHooks.selectedWeek? 'selected-week-number':'')} onClick={() => changeWeek(weekNumber)}>{weekNumber}</div>
                            ))}
                        </div>
                    </div>
                    {/* studyDaysList-list */}
                    <div className='width-50 margin-right'>
                        <div className='table-head'>Study Days</div>
                        {
                            sharedHooks.studyDaysList.map((weekDayNumber) => (
                                <div key={generateUniqueId()} className={'a-link width-100 margin-right' + ' ' + (weekDayNumber == sharedHooks.selectedDay? "selected-week-number":"")} onClick={() => changeDay(weekDayNumber)}>{getWeekDayName(weekDayNumber)}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}