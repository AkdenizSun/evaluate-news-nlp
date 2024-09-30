function checkUrl(url) {
    const urlRegex = /^(?:(?:https?):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i;
    return urlRegex.test(url);
}

export { checkUrl };

