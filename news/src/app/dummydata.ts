import {Injectable} from '@angular/core'

@Injectable ({
    providedIn : 'root'
    })

export class dummydata 
{
    constructor() {}

   public getTestData() {
    return Promise.resolve({politics: this.politics,
            sports: this.sports });
   }

public politics: Array<any> = [
    {
        id: 'abc-news',
        name: 'ABC News',
        description:
            'Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.',
        url: 'https://abcnews.go.com',
        category: 'general',
        language: 'en',
        country: 'us',
    },
    {
        id: 'abc-news-au',
        name: 'ABC News (AU)',
        description:
            "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
        url: 'http://www.abc.net.au/news',
        category: 'general',
        language: 'en',
        country: 'au',
    },
    {
        id: 'al-jazeera-english',
        name: 'Al Jazeera English',
        description:
            'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
        url: 'http://www.aljazeera.com',
        category: 'general',
        language: 'en',
        country: 'us',
    },
    {
        id: 'ars-technica',
        name: 'Ars Technica',
        description:
            "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
        url: 'http://arstechnica.com',
        category: 'technology',
        language: 'en',
        country: 'us',
    },
   
];
;

public sports: Array<any> =
    [
        {
            source: {
                id: "abc-news",
                name: "ABC News"
            },
            author: "SCOTT SMITH Associated Press",
            title: "Iranian ships approach Venezuela with no sign of US threat",
            description: "",
            url: "https://abcnews.go.com/International/wireStory/iranian-ships-approach-venezuela-sign-us-threat-70853937",
            urlToImage: "https://s.abcnews.com/images/International/WireAP_39d0732bfedd44dd933a10c064ba2596_16x9_992.jpg",
            publishedAt: "2020-05-24T00:14:00Z",
            content: "CARACAS, Venezuela -- The first of five tankers loaded with gasoline sent from Iran approached Venezuelan waters late Saturday, expected to temporarily ease the South American nations fuel crunch w… [+4966 chars]"
        },
        {
            source: {
                id: "abc-news",
                name: "ABC News"
            },
            author: "The Associated Press",
            title: "Former NFL quarterback Ryan Leaf arrested in California",
            description: "",
            url: "https://abcnews.go.com/Sports/wireStory/nfl-quarterback-ryan-leaf-arrested-california-70853393",
            urlToImage: "https://s.abcnews.com/images/Sports/WireAP_38f2b5e4448c4b75aa62510a02d38667_16x9_992.jpg",
            publishedAt: "2020-05-23T21:14:00Z",
            content: "PALM DESERT, Calif. -- Former NFL quarterback Ryan Leaf was arrested in Southern California on Friday. Leaf, 44, was arrested on a domestic battery charge in Palm Desert, which is about 110 miles … [+955 chars]"
        },
        {
            source: {
                id: "abc-news",
                name: "ABC News"
            },
            author: "GEIR MOULSON, YURI KAGEYAMA and ANGELA CHARLTON Associated Press",
            title: "Zero cases in China as virus surges in Latin America, India",
            description: "",
            url: "https://abcnews.go.com/Health/wireStory/virus-cases-drop-china-surge-latin-america-70846485",
            urlToImage: "https://s.abcnews.com/images/Health/WireAP_7c7a310fd54a4650b9eba9baaf0f4c8a_16x9_992.jpg",
            publishedAt: "2020-05-23T13:25:48Z",
            content: "BERLIN -- New coronavirus cases in China fell to zero on Saturday for the first time but surged in India and overwhelmed hospitals across Latin America both in countries lax about lockdowns and tho… [+5968 chars]"
        },
        {
            source: {
                id: "abc-news",
                name: "ABC News"
            },
            author: "Brittany Borer",
            title: "Severe weather kills 2 in Carolinas, tornado threat possible in Midwest Saturday",
            description: "",
            url: "https://abcnews.go.com/US/severe-weather-kills-carolinas-tornado-threat-midwest-saturday/story?id=70845707",
            urlToImage: "https://s.abcnews.com/images/US/Pennsylvania_Weather_200523_hpMain_20200523-062018_16x9_992.jpg",
            publishedAt: "2020-05-23T10:50:50Z",
            content: "Severe storms moved across the southern Plains to the Southeast on Friday, leaving a variety of storm damage in their wake, including two deaths in the Carolinas. The storms produced four tornadoes a… [+1937 chars]"
        },
        
    ];

}