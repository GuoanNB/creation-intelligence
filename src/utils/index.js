import axios from "axios";
const baseUrl = "https://intelligencedemo.azurewebsites.net"
export const getSuggestionTitle = (data = {}) => {
    return axios({
        method: "post",
        url: `${baseUrl}/api/HeadlineGeneraor?code=s0kIXpnDLu6eF2xHRdOrnlqRcTAh1ebQ8B8jiClHGwoGAzFuwG9cZg==`,
        data,
    })
}