export const getHeaders = () => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('@TOKEN')}`
    }

    return headers;
}