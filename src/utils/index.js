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
    `When I put together a video for Earth Day on Friday, I made sure to use some footage of jellyfish taken on a recent visit to the Monterey Bay Aquarium. A group of jellyfish is also called a 'bloom' and watching them move through water is mesmerizing.\nI always feel calmer after standing in front of tank full of sea jellies. I've been thinking of my own nervous system a lot of late in this pandemic transition-zone/threatened democracy / climate-change stew of existence we're all living in these days. "We're having to adjust our social nervous systems," a somatic therapist I work with reminded me. "It's a thing right now." That got us talking about the vagus nerve, which is the main nerve system of the parasympathetic nervous system , which controls specific body functions such as digestion, heart rate and immune system, and can have an effect on our mental health.\nStimulating the nervous system can lead not only to better health overall, but a better state of mind. Fortunately, there are a lot of simple ways to do this, including singing, chanting and humming. After our talk, I went looking for images of the vagus nerve and something about the diagram of the vagus nerve reminded me of these pulsating jellyfish, which led me to read more about sea jellies. It turns out jellyfish have radially distributed nervous systems instead of brains. Hmm, maybe it wasn't just their beauty that inspired a sense of calm and wonder. Speaking (and singing) of Earth Day, it was Fridayâ¦ but really earth day is every day.\nFellow San Francisco musician Pete Kronowit tipped me off to Music Declares Emergency last year, "a group of artists, music industry professionals and organizations that stand together to declare a climate and ecological emergency and call for an immediate governmental response to protect all life on Earth." Fellow musicians who'd like to get involved can learn up and sign the declaration HERE. And there are many, many other ways to take action on behalf of the climate, be it with your voice, presence or dollars. Climate Action Network is another great resource. REI also has a clearAction Network on their site HERE. `,
    `Ready to explore one of the most beautiful waterfalls in the Green Mountain National Forest? Not only is Texas Falls one of Vermont's most stunning waterfalls , but this lovely area also includes a riverside picnic area and a short, easy nature trail through the woods. Texas Falls began to form at the close of the ice age approximately 12,000 years ago when melting glacier ice began to cut through the glacial till and bedrock. During the thousands of years that followed, high volumes of water enlarged weak points in the bedrock. These points were further enlarged and smoothed by the swirling of rocks and debris to form the potholes that are now visible along the river. A footbridge crosses what remains of a large glacial pothole. Texas Falls is located on the Hancock Branch, which drains east into the White River and eventually into the Connecticut River. The falls are actually a series of plunges flowing through a narrow, steep gorge. This is a glacial pothole! A visit to Texas Falls makes a great Vermont day trip or picnic outing, and if you're driving Route 100, they're just a short detour from the town of Rochester. The falls are easy to view from the footbridge, as well as several viewing areas along the river. Swimming is not permitted near the falls for safety reasons, but there are spots for wading near the picnic area, which is located upstream.\nQuick Facts: Texas Falls Nature Trail Length: 1.2 miles Difficulty : Easy. The falls can be viewed from the footbridge near the parking area Estimated time: 30 minutes Elevation Range: 1,299 ft. -1,316 ft Elevation Change: 70 feet Dogs: Yes, on-leash Cost: Free Maps: US Forest Service Directions to Trailhead (Google Maps) Read Next: Highlights of the Green Mountain National Forest in Vermont Walking the Texas Falls Nature Trail The Texas Falls Nature Trail is an easy hike through a mature forest. We often bring elderly relatives here for a walk followed by a picnic. The elevation gain is minimal, but there are spots where you have to watch your footing. For an even easier walk in the area, visit the Robert Frost Interpretive Trail in Ripton (7 miles west), which is a universally accessible loop suitable for those with mobility impairments.\nFrom the parking area on the left side of Forest Road 39, cross over the road and walk back along the road for a short distance to the footbridge. This is an excellent viewing area to view the largest of the waterfalls. Texas Falls from the footbridge If you just want to view Texas Falls, you can easily see them from this spot and some of the viewing areas along the river for different vantage points. Viewing the falls will take all of five minutes. If you want to stretch your legs a bit, take the loop trail into the woods, which is marked by blue blazes. Turn left, following signs for the nature trail. This is a mixed forest with lots of beech, cherry, and birch trees, with a few interspersed hemlocks. Ferns, hobble bush, winterberry, and spring wildflowers carpet the forest floor.\nA wide, well-trodden trail follows the stream for a bit before turning right and entering deeper into the woods and onto a low ridge that runs parallel to the forest road. A spur trail to the left leads to the picnic area. Continue around the right, leaving the stream behind. Jack-in-the-pulpit The trail narrows and climbs gently. If you are visiting in spring or early summer, look for numerous jack-in-the-pulpit plants with their three leaves and hooded flowers. Cross several bog bridges, which will keep your feet dry over muddy spots in the trail. As you wrap your way around the loop, the trail will descend gently. It's very quiet, with the distant falls and birdsong the only sounds you're likely to hear. Texas Falls from below Cross a few small footbridges before popping out, once again, near Texas Falls. A spur trail descends below the falls for another vantage point of the glacial potholes in the river. Make your way back to the footbridge and the parking area. Insider tip: Vermont is notorious for its spotty cell service and GPS isn't always reliable. We recommend purchasing a copy of the Delorme New Hampshire/Vermont Atlas & Gazetteer . This awesome atlas includes every road and trail in Vermont and is indispensable for exploring Vermont's back roads and best-kept secrets! Instagram Facebook Pinterest Tara Schatz is a freelance writer and the founder and editor-in-chief of Vermont Explored and Back Road Ramblers , an American road trip blog. She is also the co-author of the 3rd edition of AMC's Best Day Hikes in Vermont (pre-order your copy for the 2023 release date in May).`,
    `Ask me the "must-see" attraction in my neck of the woods, and I'll tell you it's Amicalola Falls . Amicalola Falls is a popular state park and is part of the Georgia State Parks system with the highest cascading waterfall east of the Mississippi River. It's located in the North Georgia mountains within the Chattahoochee National Forest and is where the Appalachian Trail begins. HIKE AMICALOLA FALLS STATE PARK WITH YOUNG CHILDREN You can start at the bottom, the top, or the middle. If you have little ones (like me) then I recommend parking at the West Ridge Access Trail and making this middle section your starting point. You'll follow the paved path to the bridge overlooking the falls (it's only .3 miles to the bridge.) This is a fantastic view!\nIf you are up for it, take the blue blazed trail down 165 stairs, and a total of 1 mile; this trail leads to a reflection pool at the base of the falls. It will follow the creek almost the entire way, with great places to play in the water and see the beautiful view of rhododendron and other native flora. I did it with my 5 yr old and the toddler in a sling. I'm not going to say that was "easy," but it was very doable. I'd do it again without hesitation. With older kids, this is a no-brainer. You might even venture UP from the middle bridge. A little over 400 stairs takes you to the top of the falls where you'll find the Amicalola Falls Lodge where you cool off in the heat of the summer. The faint-of-heart (or faint-of-breath) can also drive to the top for gorgeous views. Don't have young kids? Read on for Sue's experience with tweens and teens. HIKE AMICALOLA FALLS STATE PARK WITH TWEENS AND TEENS Sue tackled the entire climb from bottom to top with tweens. They conquered the 620 steps to the summit   175 to the viewing area and then another 445 to the top. The hiking trails aren't too bad and there were lots of places to rest along the way if needed. The tumbling water of the falls are beautiful and look like icicles falling down the mountain. The top affords a gorgeous view of the valley below. AMICALOLA FALLS STATE PARK LODGE While you are at the top of the mountain, stop into the Amicalola Lodge for a view of the enormous fireplace and vista view through the picture window. The porch out back has wooden rocking chairs that call your name! There is also the Maple Restaurant , a full-service restaurant at the Amicalola Falls State Park Lodge that is known for its Sunday brunch. Have lunch at the lodge, or take a picnic at the reflection pool at the base of the falls. The Visitor Center is a fun stop for kids, with various live and taxidermy'd animals. AMICALOLA FALLS CAMPING AND COTTAGES There is also camping and cottages (2 of which are dog friendly) Sue visited the park with her older boys and camped, enjoying a typical evening of roasted hot dogs, s'mores and enough extra toasted marshmallows to build a Stay Puff Marshmallow Man. There are 25 camping sites at Amicalola Falls State Park and 14 cottages, plus some very special accommodations. LEN FOOTE HIKE INN In addition to camping and rooms at the Amicalola Lodge, there is another unique lodging option called the Len Foote Hike Inn . The only way to reach the Inn is on foot. It's five miles of great hiking to Len Foote Inn, which is fairly rustic, but stunningly beautiful. Read about our trip (with LOTS of pictures) here .\nAlso, the first bit of the trail is both a trail for the Hike Inn, and the Appalachian connector approach trail that leads to Springer Mountain, the southern terminus of the AT. Kinda cool. JUNIOR RANGER PROGRAMS AT AMICALOLA STATE PARK Be sure to check the calendar before heading out to Amicalola Falls to see what Ranger programs are available during your visit. We attended a ranger talk once, featuring several owls. It was informative and fun, and the kids loved it. They also have programs on hiking, snakes, and more. In addition to the ranger program, there is a playground, and geocaching. Enough to keep you busy all day! Sue's trip included a Ranger led creek walk. Before the walk they explored the snakes in the visitor's center, even touching one slithering through a volunteer's shirt before grabbing the nets provided and heading to the creek. Nets are a great thing to bring with you on a trip to any of the state parks in Ga. Kids love splashing around in the water and trying to catch little critters. Another tip for Amicalola State Park   bring a few extra dollars, the visitor's center has an ice cream machine:) As soon as Sue's group reached the creek, they noticed a native snake sunning on a log. Not to disturb him, the group moved a bit farther down the creek. A Park Ranger accompanied the group and immediately sent everyone out to find crawfish, water sliders and a number a creepy crawly things whose names I have purposely forgotten. All the kids (and adults) had a blast getting wet and dirty and seeing who could find the biggest crawfish. Be sure to bring your Junior Ranger books , to get a few criteria marked off.\nWANT TO HIKE MORE? We mentioned that Amicalola Falls State Park & Lodge is where the Appalachian Trails Stone Archway marks the start of the Appalachian Trail. Hike from the crest of Amicalola Falls Park to Springer Mountain . This 15.5-mile roundtrip makes for a challenging day hike, an even better overnight backpacking adventure, or the ultimate start to a thru-hike on the Appalachian Trail to Maine. FUN NEAR THE LODGE AT AMICALOLA FALLS One great thing about Amicalola Falls State Park & Lodge is its location. It's only about two hours from Atlanta. If you want to visit other popular North Georgia towns within the Appalachian Mountains like Dahlonega , Helen , Blue Ridge, Hiawassee or Ellijay , they are all within an hour of Amicalola Falls. Another fun place to go near Amicalola is Unicoi State Park & Lodge , which offers zip-lining through the North Georgia mountain tops.`
    `I love wearing dresses. As soon as the weather is warm, I try to wear them as much as I can. I'm always interested in the trends for each season whether they are midi , maxi or mini dresses. This spring season get ready to see dresses that are super easy to throw on and to dresses with chic silhouettes.\nKeep reading on to find out what the sustainable spring dress trends are for this year. Sustainable Spring Dress Trends Midi Sweetheart Necklines Midi dresses are a great length especially for when we've been stuck inside for so long. Add in a sweetheart neckline can definitely add some excitement. Bust Details I have already mentioned bust detailing when talking about the prettiest spring trends . It is a very romantic trend and will be a very popular spring dress trend. Ruched Ruched dresses create an amazing sculptural, beautiful silhouette. Mesh Mesh dresses definitely remind me of the 90's, especially with the prints . They are also super comfortable. Since I only share sustainable options, I was only able to find 2 dresses. Ribbed Ribbed dresses are great because they look flattering on the petite frame and even taller ones. These dresses can also be worn multiple different ways. Cutout I've mentioned open back dresses in the past for this season. Get ready to see an even bigger emphasis on that and cut out dresses this spring season. What are some of your sustainable spring dress trends? I would love to try cutout, ribbed and bust detailing! Mesh is probably one I will stay away from personally, since it's not really my style. The post Sustainable Spring Dress Trends appeared first on Curated by Jennifer . `,
    `It's so crazy to think that Easter is just a couple weeks away. The weather here in Michigan has been nice. I'm hoping spring weather is here to stay! And with the nice weather, means I want to wear dresses. I have rounded up lots of sustainable spring dresses that can get you through the season and for even Easter! Do any of you have plans for Easter? I know it won't be like last year since things are opening up but I don't think it people will be doing anything big for it. I know I won't be. Trisha Leaf Print Dress | Get Obsessed Maxi Dress | Milos Midi Dress | Valencia Bustier | Evie Linen Shirt Dress | Ross Washable Shirt Dress | Norma Dress | Evangeline Shirt Dress | Roberta Jersey Dress | Brooklyn Dress | Parma Dress | Mendoza Dress | Loretta Wrap Dress | Lucille Swing Dress | Inspiration Ahead Mini Floral | When picking the dresses I went this seasons spring colour trends . Think fun bright and pastel colours that are perfect for this season. I also tried to pick a variety of styles- mini, midi and maxi.\nSince I'm short, I usually opt for minis and the occasional midi (which looks like a maxi on me ). But I know not everyone is as short as I am so I had to include maxi's as well. I'm really a fan of a lot of these floral print dresses. Granted some are in colours that I don't wear since I'm more of a neutrals girl but I'm considering buying, like this Milos midi dress . The pink magenta colour is gorgeous. Love how bright it is. Same with the Inspiration ahead mini and Brooklyn dress . And I love the Ross shirt dress and the Loretta wrap dress. Those 2 dresses would definitely fit in my wardrobe. Another dress I really like is the Lucille swing dress . I used to wear coral a lot because it went well with my skin tone. And I think this dress is light enough since I do wear light shades of blush/pink. What are your favourite sustainable spring dresses? Turn on your JavaScript to view content Turn on your JavaScript to view content The post Sustainable Spring Dresses appeared first on Curated by Jennifer . `
]
export const newsLetterList = [
    {
        title: "Ownership",
        subTitle: "Fully control of contents and subscribers",
        img: "audience0",
        description: [
            "Create what you want and what your audience loves. You don't have to conform to popular taste",
            "Make your audience the private property"
        ]
    },
    {
        title: "Grow",
        subTitle: "Grow audience with global Microsoft users",
        img: "audience1",
        description: [
            "Promote your content and grow your audience on Microsoft surfaces, Windows, Outlook, Edge, Bing. Be prepared for your global fans!"
        ]
    },
    {
        title: "Free",
        subTitle: "Free to use with extra bonus on your growth",
        img: "audience2",
        description: [
            "Free to use before you gain first $100,000",
            "$100 bonus on your growth milestones"
        ]
    },
    {
        title: "Income",
        subTitle: "Reoccurring income on subscription",
        img: "audience3",
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
        img: "audience4",
        description: [
            "Migrate your followers to de-centralized and democratic web where you have more control with little platforms intervene"
        ]
    },
    {
        title: "Paid community",
        subTitle: "Build your paid Discord server",
        img: "audience5",
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