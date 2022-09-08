import axios from "axios";
import { useEffect, useState, useCallback } from 'react'

const baseUrl = "https://intelligencedemo.azurewebsites.net"

export const getTopHeadlines = () => {
    return axios({
        method: "GET",
        url: `${baseUrl}/api/TopHeadlines?code=vc8imPqI41TNXbJbTJy6XfPZFfkMvB9MAcedxGXAk_7rAzFuNBb6mQ==`,
    })
}

export const getSuggestionTitle = (data = {}) => {
    return axios({
        method: "post",
        url: `${baseUrl}/api/HeadlineGenerator?code=nVpizfE_LmVSq-PttSHSePTy-Vu0edcgu-kY46AODWyNAzFudG5aGw==`,
        data,
    })
}

export const getTredingTopics = (data = {}) => {
    return axios.get(`${baseUrl}/api/TrendTopic?code=JOxznCL1isopyfZnUCgYrtD7H79Qe_58rBeS5XctdL6PAzFu_yjkNw==`, {
        params: data,
    })
}

export const getRecently7days = () => {
    let days = [];
    for(let i = 1; i < 8; i++) {
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
    if(num === 1) {
        displayDate = 'Today'
    } else if(num === 2) {
        displayDate = 'Yesterday'
    } else {
        displayDate = displayMonth + '/' + displayDay
    }
    return { yDate, displayDate }
}
export const useSyncCallback = callback => {
    const [proxyState, setProxyState] = useState({ current: false })

    const Func = useCallback(() => {
        setProxyState({ current: true })
    }, [proxyState])

    useEffect(() => {
        if (proxyState.current === true) setProxyState({ current: false })
    }, [proxyState])

    useEffect(() => {
        proxyState.current && callback()
    })

    return Func
}
export const sampleContentList = ["123", "456"]
export const newsLetterList = [
    {
        title: "Ownership",
        subTitle: "Fully control of contents and subscribers",
        description: [
            "Create what you want and what your audience loves. You don’t have to conform to popular taste",
            "Make your audience the private property"
        ]
    },
    {
        title: "Grow",
        subTitle: "Grow audience with global Microsoft users",
        description: [
            "Promote your content and grow your audience on Microsoft surfaces, Windows, Outlook, Edge, Bing. Be prepared for your global fans!"
        ]
    },
    {
        title: "Free",
        subTitle: "Free to use with extra bonus on your growth",
        description: [
            "Free to use before you gain first $100,000",
            "$100 bonus on your growth milestones"
        ]
    },
    {
        title: "Income",
        subTitle: "Reoccurring income on subscription",
        description: [
            "Stop rolling the dice of ad revenue and per-stream payouts. Get recurring income through monthly payments from your subscribers",
            "Supporting 16 currencies across 108 regions"
        ]
    }
]
export const discordList = [
    {
        title: "Secure",
        subTitle: "Secure your followers into private property",
        description: [
            "Migrate your followers to de-centralized and democratic web where you have more control with little platforms intervene"
        ]
    },
    {
        title: "Paid community",
        subTitle: "Build your paid Discord server",
        description: [
            "Set up a price for your private Discord servers, you make income and make your audience happier.",
            "NFT payment tap your business early to Web3"
        ]
    }
]
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
        "Topic": "Family Day",
        "SearchVolumn": {
            "Score": 600000,
            "Signal": "Down" //Enum: Up, Down, New, None
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
        "Topic": "Family Day",
        "SearchVolumn": {
            "Score": 600000,
            "Signal": "None" //Enum: Up, Down, New, None
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
    }
]