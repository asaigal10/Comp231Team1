let linkBuilder = {};
linkBuilder.zoom = (id) => {
    return `https://e.centennialcollege.ca/d2l/common/dialogs/quickLink/quickLink.d2l?ou=${id}&type=lti&rcode=CENCOL-4893909&srcou=6606&launchFramed=1&framedName=Zoom`
}
linkBuilder.home = (id) => {
    return `https://e.centennialcollege.ca/d2l/home/${id}`
}
linkBuilder.tableOfContent = (id) => {
    return `https://e.centennialcollege.ca/d2l/le/content/${id}/Home`
}
linkBuilder.assignment = (id) => {
    return `https://e.centennialcollege.ca/d2l/lms/dropbox/user/folders_list.d2l?ou=${id}&isprv=0`
}
linkBuilder.quizzes = (id) => {
    return `https://e.centennialcollege.ca/d2l/lms/quizzing/user/quizzes_list.d2l?ou=${id}`
}

export {linkBuilder}