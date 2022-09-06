import axios from "axios";

const baseUrl = "https://intelligencedemo.azurewebsites.net"
export const getSuggestionTitle = (data = {}) => {
    return axios({
        method: "post",
        url: `${baseUrl}/api/HeadlineGenerator?code=nVpizfE_LmVSq-PttSHSePTy-Vu0edcgu-kY46AODWyNAzFudG5aGw==`,
        data,
    })
}

export const getTredingTopics = (data = {}) => {
    return axios({
        method: "get",
        url: `${baseUrl}/api/TrendTopic?code=JOxznCL1isopyfZnUCgYrtD7H79Qe_58rBeS5XctdL6PAzFu_yjkNw==&date=2022-09-05&vertical=All`,
        data,
    })
}

export const getRecently7days = () => {
    let days = [];
    for(let i = 0; i < 7; i++) {
        days.push(getFormatDay(i))
    }
    return days;
}

const getFormatDay = (num) => {
    let dateTime = new Date();
    dateTime = dateTime.setDate(dateTime.getDate() - num)
    const date = new Date(dateTime);
    const year = date.getFullYear();
    const month = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
    const displayMonth = date.getMonth()+1;
    const day = (date.getDate() + 1 < 10 ? '0' + (date.getDate()) : date.getDate());
    const displayDay = date.getDate() + ' ';
    const yDate = year + '-' + month + '-'+day
    let displayDate;
    if(num === 0) {
        displayDate = 'Today'
    } else if(num === 1) {
        displayDate = 'Yesterday'
    } else {
        displayDate = displayMonth + '/' + displayDay
    }
    return { yDate, displayDate }
}

export const tableData = [
    {
        "Topic": "Family Day",
        "SearchVolumn": {
            "Score": 600000,
            "Signal": "Up" //Enum: Up, Down, New, None
        },
        "MsnContentSupply": "Scarce", // Enum: Scarce, Moderate, Sarurated
        "Items": [{
            "Title": "How to Write Content About Your Photographs",
            "Source": "MSN",
            "ImgUrl": "https://intelligencedemo.azureedge.net/demo/4.png",
            "DocLink": "https://www.baidu.com"
        },
        {
            "Title": "How to Write Content About Your Photographs",
            "Source": "MSN",
            "ImgUrl": "https://intelligencedemo.azureedge.net/demo/4.png",
            "DocLink": "https://www.baidu.com"
        },
        {
            "Title": "How to Write Content About Your Photographs",
            "Source": "MSN",
            "ImgUrl": "https://intelligencedemo.azureedge.net/demo/4.png",
            "DocLink": "https://www.baidu.com"
        },{
            "Title": "How to Write Content About Your Photographs",
            "Source": "MSN",
            "ImgUrl": "https://intelligencedemo.azureedge.net/demo/4.png",
            "DocLink": "https://www.baidu.com"
        },
        {
            "Title": "How to Write Content About Your Photographs",
            "Source": "MSN",
            "ImgUrl": "https://intelligencedemo.azureedge.net/demo/4.png",
            "DocLink": "https://www.baidu.com"
        }
    ]
    },
    {
        "Topic": "US President Election Donald Trump lose",
        "SearchVolumn": {
            "Score": 513103,
            "Signal": "New" //Enum: Up, Down, New, None
        },
        "MsnContentSupply": "Moderate", // Enum: Scarce, Moderate, Sarurated
        "Items": [
            {
                "Title": "How to Write Content About Your Photographs",
                "Source": "MSN",
                "ImgUrl": "https://intelligencedemo.azureedge.net/demo/4.png",
                "DocLink": "https://www.baidu.com"
            },
            {
                "Title": "How to Write Content About Your Photographs",
                "Source": "MSN",
                "ImgUrl": "https://intelligencedemo.azureedge.net/demo/4.png",
                "DocLink": "https://www.baidu.com"
            }
    ]
    },
    {
        "Topic": "US President Election Donald Trump lose",
        "SearchVolumn": {
            "Score": 513103,
            "Signal": "Down" //Enum: Up, Down, New, None
        },
        "MsnContentSupply": "Saturated", // Enum: Scarce, Moderate, Sarurated
        "Items": [
            {
                "Title": "How to Write Content About Your Photographs",
                "Source": "MSN",
                "ImgUrl": "https://intelligencedemo.azureedge.net/demo/4.png",
                "DocLink": "https://www.baidu.com"
            },
            {
                "Title": "How to Write Content About Your Photographs",
                "Source": "MSN",
                "ImgUrl": "https://intelligencedemo.azureedge.net/demo/4.png",
                "DocLink": "https://www.baidu.com"
            }
    ]
    }
]