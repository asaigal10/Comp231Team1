function generateUniqueId(length = 16) {
    const timestamp = Date.now().toString();
    const randomPart = Math.random().toString(36).substr(2, length - timestamp.length);
    return timestamp + randomPart;
}
export { generateUniqueId }