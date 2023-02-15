function delay(ms) {
    ms = ms || 2000;
    return new Promise(done => setTimeout(() => done(), ms));
}

export default delay