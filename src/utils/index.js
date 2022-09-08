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
    for(let i = 1; i < 7; i++) {
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
export const sampleContentList = [
    `When I put together a video for Earth Day on Friday, I made sure to use some footage of jellyfish taken on a recent visit to the Monterey Bay Aquarium. A group of jellyfish is also called a 'bloom' and watching them move through water is mesmerizing. I always feel calmer after standing in front of tank full of sea jellies. I've been thinking of my own nervous system a lot of late in this pandemic transition-zone/threatened democracy / climate-change stew of existence we're all living in these days. "We're having to adjust our social nervous systems," a somatic therapist I work with reminded me. "It's a thing right now." That got us talking about the vagus nerve, which is the main nerve system of the parasympathetic nervous system , which controls specific body functions such as digestion, heart rate and immune system, and can have an effect on our mental health. Stimulating the nervous system can lead not only to better health overall, but a better state of mind. Fortunately, there are a lot of simple ways to do this, including singing, chanting and humming. After our talk, I went looking for images of the vagus nerve and something about the diagram of the vagus nerve reminded me of these pulsating jellyfish, which led me to read more about sea jellies. It turns out jellyfish have radially distributed nervous systems instead of brains. Hmm, maybe it wasn't just their beauty that inspired a sense of calm and wonder. Speaking (and singing) of Earth Day, it was Fridayâ¦ but really earth day is every day. Fellow San Francisco musician Pete Kronowit tipped me off to Music Declares Emergency last year, "a group of artists, music industry professionals and organizations that stand together to declare a climate and ecological emergency and call for an immediate governmental response to protect all life on Earth." Fellow musicians who'd like to get involved can learn up and sign the declaration HERE. And there are many, many other ways to take action on behalf of the climate, be it with your voice, presence or dollars. Climate Action Network is another great resource. REI also has a clearAction Network on their site HERE. `,
    `Ready to explore one of the most beautiful waterfalls in the Green Mountain National Forest? Not only is Texas Falls one of Vermont's most stunning waterfalls , but this lovely area also includes a riverside picnic area and a short, easy nature trail through the woods. Texas Falls began to form at the close of the ice age approximately 12,000 years ago when melting glacier ice began to cut through the glacial till and bedrock. During the thousands of years that followed, high volumes of water enlarged weak points in the bedrock. These points were further enlarged and smoothed by the swirling of rocks and debris to form the potholes that are now visible along the river. A footbridge crosses what remains of a large glacial pothole. Texas Falls is located on the Hancock Branch, which drains east into the White River and eventually into the Connecticut River. The falls are actually a series of plunges flowing through a narrow, steep gorge. This is a glacial pothole! A visit to Texas Falls makes a great Vermont day trip or picnic outing, and if you're driving Route 100, they're just a short detour from the town of Rochester. The falls are easy to view from the footbridge, as well as several viewing areas along the river. Swimming is not permitted near the falls for safety reasons, but there are spots for wading near the picnic area, which is located upstream. Quick Facts: Texas Falls Nature Trail Length: 1.2 miles Difficulty : Easy. The falls can be viewed from the footbridge near the parking area Estimated time: 30 minutes Elevation Range: 1,299 ft. -1,316 ft Elevation Change: 70 feet Dogs: Yes, on-leash Cost: Free Maps: US Forest Service Directions to Trailhead (Google Maps) Read Next: Highlights of the Green Mountain National Forest in Vermont Walking the Texas Falls Nature Trail The Texas Falls Nature Trail is an easy hike through a mature forest. We often bring elderly relatives here for a walk followed by a picnic. The elevation gain is minimal, but there are spots where you have to watch your footing. For an even easier walk in the area, visit the Robert Frost Interpretive Trail in Ripton (7 miles west), which is a universally accessible loop suitable for those with mobility impairments. From the parking area on the left side of Forest Road 39, cross over the road and walk back along the road for a short distance to the footbridge. This is an excellent viewing area to view the largest of the waterfalls. Texas Falls from the footbridge If you just want to view Texas Falls, you can easily see them from this spot and some of the viewing areas along the river for different vantage points. Viewing the falls will take all of five minutes. If you want to stretch your legs a bit, take the loop trail into the woods, which is marked by blue blazes. Turn left, following signs for the nature trail. This is a mixed forest with lots of beech, cherry, and birch trees, with a few interspersed hemlocks. Ferns, hobble bush, winterberry, and spring wildflowers carpet the forest floor. A wide, well-trodden trail follows the stream for a bit before turning right and entering deeper into the woods and onto a low ridge that runs parallel to the forest road. A spur trail to the left leads to the picnic area. Continue around the right, leaving the stream behind. Jack-in-the-pulpit The trail narrows and climbs gently. If you are visiting in spring or early summer, look for numerous jack-in-the-pulpit plants with their three leaves and hooded flowers. Cross several bog bridges, which will keep your feet dry over muddy spots in the trail. As you wrap your way around the loop, the trail will descend gently. It's very quiet, with the distant falls and birdsong the only sounds you're likely to hear. Texas Falls from below Cross a few small footbridges before popping out, once again, near Texas Falls. A spur trail descends below the falls for another vantage point of the glacial potholes in the river. Make your way back to the footbridge and the parking area. Insider tip: Vermont is notorious for its spotty cell service and GPS isn't always reliable. We recommend purchasing a copy of the Delorme New Hampshire/Vermont Atlas & Gazetteer . This awesome atlas includes every road and trail in Vermont and is indispensable for exploring Vermont's back roads and best-kept secrets! Instagram Facebook Pinterest Tara Schatz is a freelance writer and the founder and editor-in-chief of Vermont Explored and Back Road Ramblers , an American road trip blog. She is also the co-author of the 3rd edition of AMC's Best Day Hikes in Vermont (pre-order your copy for the 2023 release date in May).`,
    `Whether exploring the secluded beaches of the Mediterranean lining or voyaging the turquoise waters of Italy, charter cruises are always ideal since they are magnificently tailored to cater to each traveler's requirements and pave the way to reach the undiscovered lands. While planning your next vacation, you can always take a sailing ship to the crystal clear waters of the Caribbean. Or you can choose to explore the wild and rugged adventures of the Southwest Pacific. Whatever cruising destination you choose, it's always best to explore these places on a private cruise . We have collated our all-time favorite cruising destinations to make things easier for your upcoming vacation planning. We are sure that exploring these picturesque locations will be highly delightful for travelers. Let's go through and explore more about it. 1. Sicily, Italy Situated across the stretch of the Mediterranean Coast, Sicily attracts tourists for its mind-blowingly picturesque beaches. If you are a sucker for serenity and fishing, then this cruising destination is an ideal choice. Besides, you can witness history by visiting the port of Palermo and exploring some fantastic architecture and historic squares. If your taste buds are keen on exploring some exquisite delicacies, you'll encounter plenty of impressive cuisines within Sicily , which differ slightly from the dishes of mainland. You'll find more of a mixed Mediterranean style, with flavors inspired by Spanish, Greek, and Arab cuisines. Touring Sicily lets you traverse some volcanic islands and breathtaking landscapes. You can also visit Catania and get captivating Trapani, Mount Etna, and Marsala views. 2. Anambas Islands, Indonesia Located across the northernmost stretch of Indonesia, Anambas belongs to the beautiful Riau archipelago. While cruising in the Anambas cluster, you will encounter two beautiful lagoons   Pulau Rongkat and Pulau Bawah. The white sand beaches and the contrasting cyanic water will surely make you fall in love with the location. Touring this destination in a smaller charter cruise will help you explore the hidden gems of the Anambas. The magnificent sandy turf of the Selat Rangsang Beach will let you spend some private and romantic time with your partner. And if you are up for some adventure, you can always explore some shipwreck spots through snorkeling and scuba diving. Beside the wrecks, you will also encounter the ocean's gentle giants   whale sharks, live corals, and the vessel Igara . 3. Croatia, Balkan Peninsula Regarded as the most significant hidden gem of the Mediterranean islands, Croatia is home to more than 1000 picturesque islands. Without any doubt, this getaway cruising destination serves as a paradise for all tourists and sailors. If you're keen on exploring historical villages and pristine beaches, you should not miss out on the Dalmatian Islands. Exploring Croatia as a solo traveler is best during the early spring. The place remains less crowded, and you can always enjoy your privacy in seclusion. If you look forward to exploring the local culture, wine, and cuisine, you must visit West and South Istria. And lastly, if you own a yacht, you can keep them in Croatia as the tax is exempt. 4. Greece, Balkan Peninsula Boasting over 3000 islets and islands, Greece is undoubtedly the best destination for cruise chartering. The compilation of ancient mythology, archeology, rich culture, and stunning landscapes draws the attention of tourists and sailors. Greece's best islands to explore include Mykonos, Santorini, and Crete. While exploring Mykonos, you will witness the busy lifestyle of Greek locals. Besides, you will also explore the epic nightlife and how the beaches remain packed. Sailing under the glorious Mediterranean sun towards Santorini will let you explore the white-washed houses. The hillside towns and sunset are bound to take your breath away. Lastly, Crete offers travelers the opportunity to devour exceptional Greek delicacies. And the enormously magnificent archaeological sites make you go back in time and explore history. 5. Fiji, Oceania Situated amongst the stunning islands of the Southwest Pacific, Fiji is surrounded by abundant sea life and spectacular lagoons and reefs. This island's specific remote characteristics make it ideal for charter cruise sailors to explore this place. The tropical rainforests, fantastic deep blue beaches, underwater adventures, and coconut plantations make this place stand out. If you think that the language barrier will become a troubling issue for communication, then you are wrong. All locals and travelers widely speak the English language across the island. If you wish to explore the ideal sea life with coral reefs and palm trees, Macanua Islands is a must-visit. Lastly, Yasawa Islands lets you witness the otherwise traditional lifestyle of the Fiji locals. This picturesque destination offers you to experience crystal clear lagoons with an entirely laid-back lifestyle. Choose Your Favorite Destination! Missing out on these luxurious cruising destinations is an ultimate loss. So, while you plan for your next vacation with your friends and family, make sure you choose charter cruising. Until then, happy exploring! `,
    `I love wearing dresses. As soon as the weather is warm, I try to wear them as much as I can. I'm always interested in the trends for each season whether they are midi , maxi or mini dresses. This spring season get ready to see dresses that are super easy to throw on and to dresses with chic silhouettes. Keep reading on to find out what the sustainable spring dress trends are for this year. Sustainable Spring Dress Trends Midi Sweetheart Necklines Midi dresses are a great length especially for when we've been stuck inside for so long. Add in a sweetheart neckline can definitely add some excitement. Bust Details I have already mentioned bust detailing when talking about the prettiest spring trends . It is a very romantic trend and will be a very popular spring dress trend. Ruched Ruched dresses create an amazing sculptural, beautiful silhouette. Mesh Mesh dresses definitely remind me of the 90's, especially with the prints . They are also super comfortable. Since I only share sustainable options, I was only able to find 2 dresses. Ribbed Ribbed dresses are great because they look flattering on the petite frame and even taller ones. These dresses can also be worn multiple different ways. Cutout I've mentioned open back dresses in the past for this season. Get ready to see an even bigger emphasis on that and cut out dresses this spring season. What are some of your sustainable spring dress trends? I would love to try cutout, ribbed and bust detailing! Mesh is probably one I will stay away from personally, since it's not really my style. The post Sustainable Spring Dress Trends appeared first on Curated by Jennifer . `,
    `It's so crazy to think that Easter is just a couple weeks away. The weather here in Michigan has been nice. I'm hoping spring weather is here to stay! And with the nice weather, means I want to wear dresses. I have rounded up lots of sustainable spring dresses that can get you through the season and for even Easter! Do any of you have plans for Easter? I know it won't be like last year since things are opening up but I don't think it people will be doing anything big for it. I know I won't be. Trisha Leaf Print Dress | Get Obsessed Maxi Dress | Milos Midi Dress | Valencia Bustier | Evie Linen Shirt Dress | Ross Washable Shirt Dress | Norma Dress | Evangeline Shirt Dress | Roberta Jersey Dress | Brooklyn Dress | Parma Dress | Mendoza Dress | Loretta Wrap Dress | Lucille Swing Dress | Inspiration Ahead Mini Floral | When picking the dresses I went this seasons spring colour trends . Think fun bright and pastel colours that are perfect for this season. I also tried to pick a variety of styles- mini, midi and maxi. Since I'm short, I usually opt for minis and the occasional midi (which looks like a maxi on me ). But I know not everyone is as short as I am so I had to include maxi's as well. I'm really a fan of a lot of these floral print dresses. Granted some are in colours that I don't wear since I'm more of a neutrals girl but I'm considering buying, like this Milos midi dress . The pink magenta colour is gorgeous. Love how bright it is. Same with the Inspiration ahead mini and Brooklyn dress . And I love the Ross shirt dress and the Loretta wrap dress. Those 2 dresses would definitely fit in my wardrobe. Another dress I really like is the Lucille swing dress . I used to wear coral a lot because it went well with my skin tone. And I think this dress is light enough since I do wear light shades of blush/pink. What are your favourite sustainable spring dresses? Turn on your JavaScript to view content Turn on your JavaScript to view content The post Sustainable Spring Dresses appeared first on Curated by Jennifer . `
]
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