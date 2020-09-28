import { NewsData } from "../types";

const data: NewsData = {
  loading: false,
  data: {
    status: "ok",
    totalResults: 70,
    articles: [
      {
        source: {
          id: null,
          name: "New York Times",
        },
        author: "Sui-Lee Wee",
        title:
          "China Gives Unproven Covid-19 Vaccines to Thousands, With Risks Unknown - The New York Times",
        description:
          "Drug company workers, government officials and others have been injected outside the usual testing process. More will be soon, bewildering experts who worry about potential ill effects.",
        url:
          "https://www.nytimes.com/2020/09/26/business/china-coronavirus-vaccine.html",
        urlToImage:
          "https://static01.nyt.com/images/2020/09/24/business/00china-vaccines-4/00china-vaccines-4-facebookJumbo.jpg",
        publishedAt: "2020-09-26T14:44:00Z",
        content:
          "Raina MacIntyre, who heads the biosecurity program at the Kirby Institute of the University of New South Wales in Sydney, Australia, said she would not recommend the emergency use of vaccines before … [+1703 chars]",
      },
      {
        source: {
          id: "the-wall-street-journal",
          name: "The Wall Street Journal",
        },
        author: "Dan Strumpf",
        title:
          "U.S. Sets Export Controls on China’s Top Chip Maker - The Wall Street Journal",
        description:
          "Commerce Department letter says exports to SMIC risk being used for Chinese military activities",
        url:
          "https://www.wsj.com/articles/u-s-sets-export-controls-on-chinas-top-chip-maker-11601118353",
        urlToImage: "https://images.wsj.net/im-237128/social",
        publishedAt: "2020-09-26T13:42:00Z",
        content:
          "The Commerce Department has told U.S. computer-chip companies that they must obtain licenses before exporting certain technology to Chinas largest manufacturer of semiconductors, a blow to Chinas eff… [+4277 chars]",
      },
      {
        source: {
          id: null,
          name: "Teslarati",
        },
        author: "https://www.facebook.com/sim.alva",
        title:
          "Tesla Model S Plaid may be required to use a parachute when racing in drag strips - Teslarati",
        description:
          "The Tesla Model S Plaid was officially launched on Battery Day, and the vehicle is now available for ordering. The specs of the Plaid Model S are no joke, with the vehicle being capable of going from 0 to 60 mph in less than 2 seconds before maxing out at 200…",
        url:
          "https://www.teslarati.com/tesla-model-s-plaid-needs-parachute-drag-race-video/",
        urlToImage:
          "https://www.teslarati.com/wp-content/uploads/2019/10/Tesla-Model-S-blue-Nrburgring-20.jpg",
        publishedAt: "2020-09-26T12:50:15Z",
        content:
          "The Tesla Model S Plaid was officially launched on Battery Day, and the vehicle is now available for ordering. The specs of the Plaid Model S are no joke, with the vehicle being capable of going from… [+2939 chars]",
      },
      {
        source: {
          id: null,
          name: "CNET",
        },
        author: "Megan Wollerton",
        title:
          "Amazon's new Ring camera is actually a flying drone -- for inside your home - CNET",
        description:
          "Ring announces the $250 Always Home Cam indoor drone and plans for end-to-end encryption.",
        url:
          "https://www.cnet.com/news/amazons-new-ring-camera-is-actually-a-flying-drone-for-inside-your-home/",
        urlToImage:
          "https://cnet2.cbsistatic.com/img/Yrr0cOLk6sAZPF3dLHx6m55vSSE=/1200x630/2020/09/24/0b2af454-94d0-4583-bb79-e7587bd1146e/1600816105-9-22-ring-always-home-cam.jpg",
        publishedAt: "2020-09-26T12:01:00Z",
        content:
          "Ring's Always Home Cam is an indoor security camera drone. Ring Ring on Thursday introduced a new product to its growing roster of smart home devices -- the Ring Always Home Cam. Unlike the Amazon … [+3188 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Andy Serwer with Max Zahn",
        title:
          "How Tesla, Nikola and Donald Trump are all connected - Yahoo Finance",
        description:
          "On January 9, 1943, two days after Nikola Tesla died destitute in a New York City hotel, the FBI called MIT professor and esteemed electrical engineer, John ...",
        url:
          "https://finance.yahoo.com/news/how-tesla-nikola-and-donald-trump-are-all-connected-115511618.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/0Yo_FWzB4uEK4cnYgs4xmA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyODA7aD05NDIuOTMzMzMzMzMzMzMzMw--/https://s.yimg.com/uu/api/res/1.2/gWYuAa039tJbIg.kYBkR4w--~B/aD0zMTU4O3c9NDI4NTtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-09/5008e010-ffd4-11ea-bfde-b27ea976509c",
        publishedAt: "2020-09-26T11:55:00Z",
        content:
          "On January 9, 1943, two days after Nikola Tesla died destitute in a New York City hotel, the FBI called MIT professor and esteemed electrical engineer, John G. Trump, to determine if any of the belon… [+12024 chars]",
      },
      {
        source: {
          id: "the-wall-street-journal",
          name: "The Wall Street Journal",
        },
        author: "The Wall Street Journal",
        title:
          "Inflation is already here -- for the stuff you actually want to buy - Fox Business",
        description:
          "Prices are rising for things people need in the pandemic, even if the overall inflation number remains subdued.",
        url:
          "https://www.wsj.com/articles/inflation-is-already-herefor-the-stuff-you-actually-want-to-buy-11601112630?mod=hp_lead_pos9",
        urlToImage:
          "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/08/0/0/cash-iStock.jpg?ve=1&tl=1",
        publishedAt: "2020-09-26T11:37:42Z",
        content:
          "If it feels like the price of everything you buy has been soaring, that's because it has -- even as central bankers everywhere worry about the danger of deflation. The gap between everyday experienc… [+6049 chars]",
      },
      {
        source: {
          id: null,
          name: "CarScoops",
        },
        author: null,
        title:
          "2021 Audi Q5 Sportback Debuts As The Regular Q5’s Trendier Sibling - CarScoops",
        description:
          "Audi’s Q5 Sportback will arrive in the US and Europe in the first half of 2021.",
        url:
          "https://www.carscoops.com/2020/09/2021-audi-q5-sportback-debuts-as-the-regular-q5s-trendier-sibling/",
        urlToImage:
          "https://www.carscoops.com/wp-content/uploads/2020/09/2021-Audi-Q5-Sportback-0.jpg",
        publishedAt: "2020-09-26T11:04:00Z",
        content:
          "Audi continues the rollout of coupe-like Sportback variants for its SUVs with the new Q5 Sportback. Set to join the standard Q5 SUV in the first half of 2021 in the U.S., Europe, and other markets, … [+3058 chars]",
      },
      {
        source: {
          id: "bloomberg",
          name: "Bloomberg",
        },
        author: "Sam Potter",
        title:
          "Every Day-Trader Dollar Is Worth Five in a New Theory on Stocks - Bloomberg",
        description: "",
        url:
          "https://www.bloomberg.com/news/articles/2020-09-26/every-day-trader-dollar-is-worth-five-in-a-new-theory-on-stocks",
        urlToImage:
          "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i5xDtcrQem4I/v1/1200x769.jpg",
        publishedAt: "2020-09-26T11:00:00Z",
        content:
          "Day traders claiming bragging rights for this year’s $9 trillion U.S. equity rebound can find some supporting evidence in the latest research. Even as retail trading has grown to represent 20% of … [+3403 chars]",
      },
      {
        source: {
          id: null,
          name: "CNBC",
        },
        author: "Evelyn Cheng",
        title:
          "Chinese electric car start-up Xpeng shows off new flying vehicle - CNBC",
        description:
          "With eight propellers and a capsule-like frame, the vehicle resembles a human-carrying drone more than a flying car.",
        url:
          "https://www.cnbc.com/2020/09/26/chinese-electric-car-start-up-xpeng-shows-off-new-flying-vehicle-.html",
        urlToImage:
          "https://image.cnbcfm.com/api/v1/image/106718464-1601114779985-Evelyn_cheng_flying_car_china.jpg?v=1601114938",
        publishedAt: "2020-09-26T10:13:00Z",
        content:
          "BEIJING Alibaba-backed Xpeng is putting money into flying car technology as part of the company's long-term strategy.  The electric automaker revealed Saturday at the Beijing Auto Show the first in … [+1519 chars]",
      },
      {
        source: {
          id: "cnn",
          name: "CNN",
        },
        author: null,
        title:
          "89-year-old Papa John's pizza delivery driver surprised with $12K tip thanks to 'TikTok Family' - msnNOW",
        description:
          'The tables quickly turned for an 89-year-old pizza delivery driver who received a surprise delivery of his own from "regulars" on his route -- a $12,000 tip.',
        url:
          "https://www.cnn.com/2020/09/25/us/delivery-driver-surprise-tip-trnd/index.html",
        urlToImage:
          "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB19qkdE.img?h=315&w=600&m=6&q=60&o=t&l=f&f=jpg&x=517&y=236",
        publishedAt: "2020-09-26T06:45:00Z",
        content:
          'The tables quickly turned for an 89-year-old pizza delivery driver who received a surprise delivery of his own from "regulars" on his route -- a $12,000 tip. © KSL Derlin Newey, a pizza delivery … [+2107 chars]',
      },
      {
        source: {
          id: null,
          name: "CNET",
        },
        author: "Steven Ewing",
        title: "Hyundai RM20e is the ultimate electric hot hatch - CNET",
        description:
          "This racing prototype packs 810 horsepower -- and it's electric.",
        url: "https://www.cnet.com/roadshow/news/hyundai-rm20e-debut/",
        urlToImage:
          "https://cnet3.cbsistatic.com/img/ewvfBFaHTmxDiStKRrM4eU-BmUY=/1200x630/2020/09/26/a83f7911-6e31-401c-9d00-28ce1a36e441/ogi1-hyundai-rm19-002.jpg",
        publishedAt: "2020-09-26T05:17:00Z",
        content:
          "Holy smokes is this thing cool. Hyundai Remember Hyundai's awesome little mid-engine RM19 concept that debuted at the 2019 Los Angeles Auto Show? I sure do; it's amazing. So how does Hyundai one-up… [+1716 chars]",
      },
      {
        source: {
          id: "associated-press",
          name: "Associated Press",
        },
        author: null,
        title:
          "Mushrooms linked to salmonella outbreaks in 10 states - The Associated Press",
        description:
          "LOS ANGELES (AP) — Federal officials are warning of salmonella cases in at least 10 states linked to dried mushrooms from a Southern California company. More than 40 people have gotten sick...",
        url:
          "https://apnews.com/article/los-angeles-california-1f953706884d92accab8252ffd1d3117",
        urlToImage: "https://apnews.com/images/ShareLogo2.png",
        publishedAt: "2020-09-26T05:06:20Z",
        content:
          "LOS ANGELES (AP) Federal officials are warning of salmonella cases in at least 10 states linked to dried mushrooms from a Southern California company. More than 40 people have gotten sick and four … [+1126 chars]",
      },
      {
        source: {
          id: null,
          name: "WRAL.com",
        },
        author: "Leslie Moreno, Brad Simmons, Jason O. Boyd",
        title:
          "Local doctor says children can safely celebrate Halloween, go trick-or-treating - WRAL.com",
        description:
          "There were 25 mayors from across North Carolina who met Friday with North Carolina health secretary Dr. Mandy Cohen. One big topic was Halloween and whether cities should ban it.",
        url:
          "https://www.wral.com/coronavirus/local-doctor-says-children-can-safely-celebrate-halloween-go-trick-or-treating/19305983/",
        urlToImage:
          "https://wwwcache.wral.com/asset/5oys/smartshopper/2020/09/25/19304693/Halloween_candy_in_a_bowl-DMID1-5ob37u0yi-640x480.jpg",
        publishedAt: "2020-09-26T04:44:00Z",
        content:
          "By Leslie Moreno, WRAL multimedia journalist Raleigh, N.C. — Twenty-five mayors from across North Carolina met with Dr. Mandy Cohen, secretary of the North Carolina Department of Health and Human Se… [+2001 chars]",
      },
      {
        source: {
          id: null,
          name: "InsideEVs ",
        },
        author: "Mark Kane",
        title:
          "Polestar Precept To Enter Production: Will Challenge Tesla Model S, Lucid Air - InsideEVs ",
        description:
          "Polestar announced today that the Precept model, shown earlier this year, will enter production. An all-new manufacturing facility will be built in China.",
        url:
          "https://insideevs.com/news/445929/official-polestar-precept-enter-production/",
        urlToImage:
          "https://cdn.motor1.com/images/mgl/NkQbY/s1/polestar-precept.jpg",
        publishedAt: "2020-09-26T04:34:05Z",
        content:
          "Polestar announced today that the Precept concept model, shown earlier this year, will enter production. Vehicle development is underway in the UK and already more than 130 people are working on it. … [+1177 chars]",
      },
      {
        source: {
          id: "the-wall-street-journal",
          name: "The Wall Street Journal",
        },
        author: "Gwynn Guilford, Charity L. Scott",
        title:
          "Is It Insane to Start a Business During Coronavirus? Millions of Americans Don’t Think So. - The Wall Street Journal",
        description:
          "The pandemic closed hundreds of thousands of businesses across the country. But now applications for new U.S. businesses are rising at the fastest rate since 2007. Why? A mix of necessity and opportunity.",
        url:
          "https://www.wsj.com/articles/is-it-insane-to-start-a-business-during-coronavirus-millions-of-americans-dont-think-so-11601092841",
        urlToImage: "https://images.wsj.net/im-236748/social",
        publishedAt: "2020-09-26T04:00:00Z",
        content:
          "The pandemic forced hundreds of thousands of small businesses to close. For Madison Schneider, it was a good time to start a new one. The 22-year-old in Haviland, Kan., opened Lelas Bakery and Coff… [+171 chars]",
      },
      {
        source: {
          id: "associated-press",
          name: "Associated Press",
        },
        author: "Jake Bleiberg",
        title:
          "Hacked software provider acknowledges ransomware attack - The Associated Press",
        description:
          "DALLAS (AP) — A major U.S. provider of software services to state and local governments acknowledged Friday that it was hit by a ransomware attack two days after telling clients an unknown...",
        url:
          "https://apnews.com/article/dallas-technology-local-governments-hacking-archive-0ccdcb35696b7bda696caf487fafb8f2",
        urlToImage:
          "https://storage.googleapis.com/afs-prod/media/9be48c58f14b4d9a9589383602175860/3000.jpeg",
        publishedAt: "2020-09-26T03:52:36Z",
        content:
          "DALLAS (AP) A major U.S. provider of software services to state and local governments acknowledged Friday that it was hit by a ransomware attack two days after telling clients an unknown intruder had… [+2681 chars]",
      },
      {
        source: {
          id: null,
          name: "Hawaii News Now",
        },
        author: "Mahealani Richardson",
        title:
          "Hawaiian Airlines sees ‘momentum building’ as it prepares to launch testing program - Hawaii News Now",
        description:
          "Hawaiian Air CEO Peter Ingram said the partnership is helping to build “momentum” for a comeback.",
        url:
          "https://www.hawaiinewsnow.com/2020/09/25/momentum-building-hawaiian-airline-launches-testing-program/",
        urlToImage:
          "https://www.hawaiinewsnow.com/resizer/FjAPbWPDhc3U3FI3bI3fwzM_jEg=/1200x0/cloudfront-us-east-1.images.arcpublishing.com/raycom/WVE235PAG5ACBBSDNZT7VG65XE.jpg",
        publishedAt: "2020-09-26T02:46:00Z",
        content:
          "On Friday, Hawaiian Air announced it will provide drive-thru testing at labs near Los Angeles and San Francisco international airports starting Oct. 15. The testing, in partnership with Worksite Labs… [+1774 chars]",
      },
      {
        source: {
          id: null,
          name: "Hawaii News Now",
        },
        author: "HNN Staff",
        title:
          "Right lane on King Street through urban core will soon be reserved for buses only - Hawaii News Now",
        description:
          "It’s called TheBusLane and it’s designed to speed up the commute for Downtown bus riders.",
        url:
          "https://www.hawaiinewsnow.com/2020/09/25/right-lane-king-street-through-urban-core-will-soon-be-reserved-buses-only/",
        urlToImage:
          "https://www.hawaiinewsnow.com/resizer/CQXe_2n1el3tkK7_RBgVsn0c8u0=/1200x0/cloudfront-us-east-1.images.arcpublishing.com/raycom/KN6A27TQ65FB5HJ426AJ74S34E.jpg",
        publishedAt: "2020-09-26T02:37:00Z",
        content:
          "HONOLULU, Hawaii (HawaiiNewsNow) - The city is converting the right lane on King Street from Dillingham Boulevard to Punchbowl Street to a special transit corridor for buses only. Its called TheBusL… [+1050 chars]",
      },
      {
        source: {
          id: "usa-today",
          name: "USA Today",
        },
        author: null,
        title:
          "Berkeley, California, bans candy, junk food at grocery checkouts - msnNOW",
        description:
          "The Berkeley, Calif., ordinance requiring stores over 2,500 square feet to sell more nutritious food and beverage options in their checkout areas.",
        url:
          "https://www.usatoday.com/story/money/2020/09/25/berkeley-calif-bans-junk-food-and-candy-grocery-checkouts/3535682001/",
        urlToImage: null,
        publishedAt: "2020-09-26T01:51:00Z",
        content:
          "© Keith Srakocic, AP A mixture of salty snacks and chips is shown left on a table in Pittsburgh's Market Square on Tuesday, Feb. 7, 2012. The city of Berkeley, California is back on the attack aga… [+2606 chars]",
      },
      {
        source: {
          id: null,
          name: "WJHL-TV News Channel 11",
        },
        author: "News Channel 11 Staff",
        title:
          "No injuries reported in partial collapse of Bristol hotel under construction - WJHL-TV News Channel 11",
        description:
          "BRISTOL, Tenn. (WJHL) — No one was hurt when part of a hotel that is under construction collapsed in Bristol, Tennessee, according to Fire Chief Mike Carrier. It happened Friday night at the Holiday Inn construction site at the corner of Volunteer Parkway and…",
        url:
          "https://www.wjhl.com/news/local/no-injuries-reported-in-partial-collapse-of-bristol-hotel-under-construction/",
        urlToImage:
          "https://www.wjhl.com/wp-content/uploads/sites/98/2020/09/Image-from-iOS-76.jpg?w=1280",
        publishedAt: "2020-09-26T01:28:00Z",
        content:
          "BRISTOL, Tenn. (WJHL) No one was hurt when part of a hotel that is under construction collapsed in Bristol, Tennessee, according to Fire Chief Mike Carrier. It happened Friday night at the Holiday … [+215 chars]",
      },
    ],
  },
};

export default data;
