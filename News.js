import React, { Component } from 'react'
import Newscomp from './Newscomp'
import "./Newscss.css"
export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "NASA got double the amount of asteroid Bennu sample it hoped for - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/technology/science/nasa-asteroid-bennu-sample-9166261/",
            "urlToImage": null,
            "publishedAt": "2024-02-17T06:29:04Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Abplive.com"
            },
            "author": "ABP News Bureau",
            "title": "Garena Free Fire Max: Exclusive Redeem Codes Unveiled For February 17. Here's How To Use - ABP Live",
            "description": "Garena Free Fire Max redeem codes can unlock a handful of goodies, including weapons and skins.",
            "url": "https://news.abplive.com/gaming/garena-free-fire-max-redeem-codes-feb-17-february-2024-daily-free-rewards-1665174",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2024/01/22/e4a5fdf8709661285ad9ed2263070dc01705899530343402_original.jpg?impolicy=abp_cdn&imwidth=1200",
            "publishedAt": "2024-02-17T06:17:36Z",
            "content": "In the ever-evolving realm of Garena Free Fire Max, a highly anticipated event unfolded on February 17, 2024. During this momentous occasion, redemption codes were unveiled, offering players the oppo… [+2613 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Sandeshkhali: Who is TMC's Sheikh Shahjahan targeted by BJP over sexual abuse? - Hindustan Times",
            "description": "Sheikh Shahjahan is charged with a host of offences ranging from money laundering to harassment. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/sandeshkhali-who-is-tmcs-sheikh-shahjahan-targeted-by-bjp-over-sexual-abuse-101708141254483.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/17/1600x900/Shahjahan_Sheikh_1704530716715_1708143655953.jpeg",
            "publishedAt": "2024-02-17T05:51:29Z",
            "content": "Tensions remain high in Sandeshkhali, an assembly constituency in West Bengal's North 24 Parganas district, over allegations of harassment and exploitation by local Trinamool Congress leaders.\r\nLocaL… [+3652 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Who Is Sunetra Pawar? Buzz Over Ajit Pawar's Wife In Maharashtra Politics - NDTV",
            "description": "Speculation is rife that Sunetra Pawar, the wife of Maharashtra Deputy Chief Minister and NCP leader Ajit Pawar, could fight the upcoming Lok Sabha elections.",
            "url": "https://www.ndtv.com/india-news/sunetra-pawar-ajit-pawar-supriya-sule-baramati-who-is-sunetra-pawar-buzz-over-ajit-pawars-wife-in-maharashtra-politics-5074102",
            "urlToImage": "https://c.ndtvimg.com/2024-02/rak5meh8_sunetra-pawar-sharad-pawar_625x300_17_February_24.jpeg?ver-20240117.06",
            "publishedAt": "2024-02-17T05:34:34Z",
            "content": "Sunetra Pawar can be fielded from the Baramati Lok Sabha constituency\r\nNew Delhi: Speculation is rife that Sunetra Pawar, the wife of Maharashtra Deputy Chief Minister and NCP leader Ajit Pawar, coul… [+1164 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI Lifestyle Desk",
            "title": "Vitamins and supplements you should NEVER combine - Times of India",
            "description": "Discover the vitamins and supplements you should never combine to optimize their effectiveness and prevent potential health risks. Learn more on our website.",
            "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/vitamins-and-supplements-you-should-never-combine/articleshow/107760866.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-107761035,width-1070,height-580,imgsize-866210,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-17T05:30:00Z",
            "content": "Heart disease in young Indians: Causes, prevention and some critical insights by Dr. Ramakanta Panda"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Here's Why Indian Players Are Sporting Black Armbands On Day 3 Of 3rd Test vs England | Cricket News - NDTV Sports",
            "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
            "url": "https://news.google.com/rss/articles/CBMiigFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9pbmRpYS12cy1lbmdsYW5kLTIwMjQvaGVyZXMtd2h5LWluZGlhbi1wbGF5ZXJzLWFyZS1zcG9ydGluZy1ibGFjay1hcm1iYW5kcy1vbi1kYXktMy1vZi0zcmQtdGVzdC12cy1lbmdsYW5kLTUwNzM3ODnSAQA",
            "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
            "publishedAt": "2024-02-17T05:17:03Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Paytm FASTag: Can I continue to use it to pay toll? RBI issues FAQs | Details - Hindustan Times",
            "description": "The RBI, in its frequently asked questions (FAQs), said one can continue to use FASTags to pay the toll up to the available balance.",
            "url": "https://www.hindustantimes.com/business/paytm-fastag-can-i-continue-to-use-it-to-pay-toll-rbi-issues-faqs-for-customers-details-101708143422618.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/17/1600x900/paytm_fastaqs_1708144406679_1708144414256.jpeg",
            "publishedAt": "2024-02-17T04:36:01Z",
            "content": "The Indian Highways Management Company Ltd (IHMCL), toll collecting arm of state-owned NHAI, has advised highway users to buy FASTags from 32 authorised banks without Paytm Payments Bank (PPBL) for h… [+3226 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Affiliate Desk",
            "title": "Best Philips mixer grinder in India: Reviews and buyer’s guide, 10 picks - Hindustan Times",
            "description": "Looking for the best Philips mixer grinder in India? Read our detailed reviews and buyer's guide to find the perfect one that suits your needs and budget.",
            "url": "https://www.hindustantimes.com/technology/best-philips-mixer-grinder-in-india-reviews-and-buyer-s-guide-10-picks-101708061847504.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/16/1600x900/10_best_philips_mixer_grinder_1708062217306_1708062231415.jpg",
            "publishedAt": "2024-02-17T04:30:00Z",
            "content": "If you're in the market for a new mixer grinder, Philips is a brand that is known for its quality and reliability. With a wide range of options available, choosing the right one can be overwhelming. … [+11203 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "SpaceX launches NASA’s private Nova-C lander to the moon - Times of India",
            "description": "SpaceX has successfully launched the first private lunar lander to the moon, as part of NASA’s Commercial Lunar Payload Services (CLPS) initiative and the Artemis campaign.",
            "url": "https://timesofindia.indiatimes.com/etimes/trending/spacex-launches-nasas-private-nova-c-lander-to-the-moon/articleshow/107764512.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-107764515,width-1070,height-580,imgsize-27704,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-17T04:30:00Z",
            "content": "Going into worlds market in a big way ISRO official decodes ISROs plan to enter global business"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "India vs England Live Score, 3rd Test Day 3: Kuldeep Yadav picks Jonny Bairstow, ENG 226/4 for in Rajkot - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/sports/cricket/india-vs-england-live-score-3rd-test-day-3-ind-vs-eng-latest-scorecard-updates-saurashtra-9165744/",
            "urlToImage": null,
            "publishedAt": "2024-02-17T04:22:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Arvind Kejriwal's Court Date Today As He Seeks Trust Vote In Assembly - NDTV",
            "description": "Delhi Assembly will today discuss the motion of confidence moved by Chief Minister Arvind Kejriwal in a show of strength amid allegations by his party that the BJP was trying to \"poach\" AAP MLAs.",
            "url": "https://www.ndtv.com/india-news/arvind-kejriwal-may-appear-in-court-today-after-calling-for-trust-vote-5073285",
            "urlToImage": "https://c.ndtvimg.com/2024-02/64mm8jj8_arvind-kejriwal_625x300_16_February_24.jpg",
            "publishedAt": "2024-02-17T04:17:00Z",
            "content": "This is the second time when the Arvind Kejriwal government has sought a trust vote\r\nNew Delhi: The Delhi Assembly will today take up the motion of confidence moved by Chief Minister Arvind Kejriwal … [+2925 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Rakesh Patil",
            "title": "Nifty closes the week above 22,000; smallcaps give double digit return despite index ending flat - Moneycontrol",
            "description": "Nifty need to sustain above 22,150 to end the consolidation and march towards the 22,500+ zone else profit taking may resume, says expert.",
            "url": "https://www.moneycontrol.com/news/business/stocks/nifty-closes-the-week-above-22000-smallcaps-give-double-digit-return-despite-index-ending-flat-12293651.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/02/stocks5-770x433.jpg",
            "publishedAt": "2024-02-17T04:03:46Z",
            "content": "Bulls marched Dalal Street pushing benchmark indices higher by 1 percent each. Despite starting on a weaker note, the Nifty closed above 22,000 comfortably.\r\nNifty, this week, added 258.2 points or 1… [+4507 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Gaurav Gupta",
            "title": "People doubted my Test credentials: Ravichandran Ashwin - Times of India",
            "description": "Cricket News: Ravichandran Ashwin talks about his Test credentials and reaching the milestone of 500 Test wickets.",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/england-in-india/people-doubted-my-test-credentials-ravichandran-ashwin/articleshow/107768421.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-107768363,width-1070,height-580,imgsize-34632,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2024-02-17T03:11:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Asit Manohar",
            "title": "Karnataka Budget 2024: Why brewery stocks will be in focus next week? | Mint - Mint",
            "description": "The duty hike in the Karnataka Budget 2024 proposal is expected to impact companies manufacturing and distributing beer more than those focused on spirits.",
            "url": "https://www.livemint.com/market/stock-market-news/karnataka-budget-2024-why-brewery-stocks-will-be-in-focus-next-week-11708136697845.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2024/02/17/1600x900/Karnataka_Budget_2024_Stocks_in_focus_Stock_market_1708137385739_1708137386008.jpg",
            "publishedAt": "2024-02-17T02:37:30Z",
            "content": "Karnataka Budget 2024: The recent announcement made by the Karnataka government to raise excise duty on alcohol, particularly beer, has put the spotlight on brewery stocks in the upcoming week. Accor… [+3373 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Massive Fire Engulfs Houses In Mumbai, Locals Use Buckets To Put It Off - NDTV",
            "description": "At least ten to fifteen houses were damaged in a fire that broke out in Mumbai today morning, an official said.",
            "url": "https://www.ndtv.com/mumbai-news/massive-fire-breaks-out-in-mumbai-15-houses-damaged-5073428",
            "urlToImage": "https://c.ndtvimg.com/2024-02/k6o7bmv8_mumbai-fire_625x300_17_February_24.jpg",
            "publishedAt": "2024-02-17T02:34:47Z",
            "content": "Mumbai: At least 15 shops and houses were damaged in a massive fire that broke out in Mumbai early this morning. The fire erupted around 4 am in Govandi's Baiganwadi. No injuries have been reported s… [+551 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "123telugu.com"
            },
            "author": null,
            "title": "Ooru Peru Bhairavakona to make decent numbers on day one - 123telugu",
            "description": "Ooru Peru Bhairavakona is Sundeep Kishan's latest film which has caught the attention of one and all. Though word of mouth has been mixed, the occupancy of",
            "url": "https://www.123telugu.com/mnews/ooru-peru-bhairavakona-to-make-decent-numbers-on-day-one.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2024-02-17T02:30:26Z",
            "content": "Ooru Peru Bhairavakona is Sundeep Kishan’s latest film which has caught the attention of one and all. Though word of mouth has been mixed, the occupancy of the film is good.\r\nThe trade is expecting a… [+441 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ThePrint"
            },
            "author": "Shekhar Gupta",
            "title": "Pakistanis voted against their army for the first time. The democracy is both dead and alive - ThePrint",
            "description": "This is the first time in its history that Pakistan’s people have risen to vote against Army & defeat it. If this isn’t a win for democracy, how would you describe it?",
            "url": "https://theprint.in/national-interest/pakistanis-voted-against-their-army-for-the-first-time-the-democracy-is-both-dead-and-alive/1969403/",
            "urlToImage": "https://static.theprint.in/wp-content/uploads/2024/02/NI-17.02.jpg",
            "publishedAt": "2024-02-17T02:06:32Z",
            "content": "This is a Pakistani innovation in which dictators stage a facade of elections to give themselves legitimacy and bestow upon themselves the right to claim: but I am no dictator. See, in my referendum,… [+6045 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Tuhin Das Mahapatra",
            "title": "Donald Trump's New York City fraud trial: Here are five key moments - Hindustan Times",
            "description": "Step inside the courtroom drama as Donald Trump faces a $354.9m fine and a three-year ban by a New York judge.",
            "url": "https://www.hindustantimes.com/world-news/us-news/donald-trumps-new-york-city-fraud-trial-here-are-five-key-moments-101708132672804.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/17/1600x900/Election-2024-Trump-34_1708133580794_1708133618805.jpg",
            "publishedAt": "2024-02-17T01:39:21Z",
            "content": "The former president, Donald Trumps art of the deal, was exposed as a fraud in a New York court over the last three months.\r\nRepublican presidential candidate former President Donald Trump speaks at … [+4290 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": "Arunesh Kumar Sharma",
            "title": "Horoscope Today, February 17, 2024: Check here Astrological prediction for all zodiac signs - India Today",
            "description": "Today Horoscope Astrological prediction for February 17 2024 Find out answers to your deepest burning questions related to love health money career in this daily horoscope for Aries Taurus Gemini Cancer Leo Virgo Libra Scorpio Sagittarius Capricorn Aquarius a…",
            "url": "https://www.indiatoday.in/horoscopes/story/horoscope-today-february-17-2024-aries-taurus-gemini-cancer-leo-virgo-libra-scorpio-sagittarius-capricorn-aquarius-pisces-2503062-2024-02-17",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/main-tarot-311458-16x9_13.jpg?VersionId=8P2pNnjwYT5EVI_7PBqnRrZva9lt7bcy",
            "publishedAt": "2024-02-17T01:00:59Z",
            "content": "Are you expecting a job offer or communication with your romantic partner? Look for your Sun sign in the daily horoscope below and find out.\r\nAries Daily Horoscope\r\nYou will move forward with confide… [+8016 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": "India Today News Desk",
            "title": "Jaishankar, Canadian Foreign Minister discuss bilateral ties amid diplomatic row - India Today",
            "description": "External Affairs Minister S Jaishankar and his Canadian counterpart Melanie Joly discussed bilateral ties and exchanged views on the global situation on Friday",
            "url": "https://www.indiatoday.in/world/story/external-affairs-minister-s-jaishankar-and-his-canadian-counterpart-melanie-joly-meeting-2503319-2024-02-17",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/s-jaishankar-175841299-16x9_0.png?VersionId=CZvTdts3BJ0uISeWU2O3DGGnCgopxM0k",
            "publishedAt": "2024-02-17T01:00:17Z",
            "content": "External Affairs Minister S Jaishankar met his Canadian counterpart Mélanie Joly on the sidelines of the Munich Security Conference.\r\n\"Our conversation understandably focused on the present state of … [+560 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    async componentDidMount() {
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=009b99792ebd4e45915644adf74aa3a3";
        let data=await fetch(url);
        let parsedData=await data.json()
        this.setState({articles:parsedData.articles})
    }
    render() {
        return (
            <div>
                <p>Top Headlines</p>
                <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-sm-3 c1" key={element.url}>
                                <Newscomp title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} imgurl={element.urlToImage} news={element.url} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default News
