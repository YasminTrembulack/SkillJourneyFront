export const getHeaders = () => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('@TOKEN')}`
    }

    return headers;
}