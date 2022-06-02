export interface IMovie {
    id : string,
    url : string,
    name : string,
    season : string
    show : IShow
    airdate: string
    runtime : number
    rating : IRating
    image : string
    summary : string
}

export interface IShow {
    id : string,
    url : string,
    name : string,
    type : string,
    language : string
    genres : string[]
    status : string
    runtime : number
    image : {medium : string, original : string}
    summary : string
    rating : IRating
}

export interface IRating {
    average : string 
}

// {
//     "id": 2334658,
//     "url": "https://www.tvmaze.com/episodes/2334658/the-bump-4x27-the-bump-157",
//     "name": "The Bump 157",
//     "season": 4,
//     "number": 27,
//     "type": "regular",
//     "airdate": "2022-06-01",
//     "airtime": "10:00",
//     "airstamp": "2022-06-01T14:00:00+00:00",
//     "runtime": 30,
//     "rating": {
//         "average": null
//     },
//     "image": null,
//     "summary": null,
//     "show": {
//         "id": 44660,
//         "url": "https://www.tvmaze.com/shows/44660/the-bump",
//         "name": "The Bump",
//         "type": "Talk Show",
//         "language": "English",
//         "genres": [
//             "Sports"
//         ],
//         "status": "Running",
//         "runtime": 30,
//         "averageRuntime": 30,
//         "premiered": "2019-10-02",
//         "ended": null,
//         "officialSite": "https://watch.wwe.com/original/WWEs-The-Bump-107410",
//         "schedule": {
//             "time": "10:00",
//             "days": [
//                 "Wednesday"
//             ]
//         },
//         "rating": {
//             "average": null
//         },
//         "weight": 46,
//         "network": null,
//         "webChannel": {
//             "id": 15,
//             "name": "WWE Network",
//             "country": {
//                 "name": "United States",
//                 "code": "US",
//                 "timezone": "America/New_York"
//             },
//             "officialSite": null
//         },
//         "dvdCountry": null,
//         "externals": {
//             "tvrage": null,
//             "thetvdb": 371044,
//             "imdb": null
//         },
//         "image": {
//             "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/217/542886.jpg",
//             "original": "https://static.tvmaze.com/uploads/images/original_untouched/217/542886.jpg"
//         },
//         "summary": "<p>WWE's <b>The Bump</b> is unlike any WWE show you've ever seen before, featuring a dynamic cast of hosts--led by Kayla Braxton--and WWE Superstars stopping in weekly, both as in-studio and video call-in guests.</p>",
//         "updated": 1653665281,
//         "_links": {
//             "self": {
//                 "href": "https://api.tvmaze.com/shows/44660"
//             },
//             "previousepisode": {
//                 "href": "https://api.tvmaze.com/episodes/2334658"
//             },
//             "nextepisode": {
//                 "href": "https://api.tvmaze.com/episodes/2334661"
//             }
//         }
//     },
//     "_links": {
//         "self": {
//             "href": "https://api.tvmaze.com/episodes/2334658"
//         }
//     }
// }