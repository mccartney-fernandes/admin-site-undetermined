
const autenticated = () => {
    const userKey = sessionStorage.getItem('userKeyAdmUndetermined');

    if (userKey) {
        return true;
    }

    return false;
}

export default autenticated;