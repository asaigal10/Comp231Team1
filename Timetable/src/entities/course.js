const course = {
    id: '',
    webAccessId: '',
    title: '',
    code: '',
    section: '',
    type: '',
    state: '', // ENROLLED, DROPPED
    // course['table'][week:0|default][day:0|sun]=[[startTime,endTime],]
    // course['table'][week:1        ][day:1|mon]=[[startTime,endTime],]
    table: [[],],
    assignments: [],
    quizzes: [],
    notes: [],
    links: [], // additional links e.g. discord, ms-teams, ...etc
}
export { course }