export const sendRequest = () => {
    const getSendRequest = async(url) => {
        const result = await fetch(url)
        const jsonRes = await result.json()
        return jsonRes
    }
    return {getSendRequest}
}