import './weekSchedule.css'
/* TODO: take a hook and set its value to week-number&day-name */
/* TODO: take a hook for current week-number&day-name to be highlighted */
/* author: Mohammad Aljelmawi */
export default function WeekSchedule({ weeksCount, days }) {
    const numbers = Array.from({ length: weeksCount }, (_, index) => index + 1);
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
                            {numbers.map((number) => (
                                <div className='a-link'>{number}</div>
                            ))}
                        </div>
                    </div>
                    {/* days-list */}
                    <div className='width-50 margin-right'>
                        <div className='table-head'>Days</div>
                        {
                            days.map((dayName, index) => (
                                <div className='a-link width-100 margin-right'>{dayName}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}