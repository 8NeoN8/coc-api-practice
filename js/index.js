/**@type {string} COC_API_TOKEN The API token for the clash of clans api*/
const COC_API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImRhMDJjNWEwLWVmN2QtNDAzYy1iZjNjLTRkMzEzOWQ1MjA4NiIsImlhdCI6MTY5OTIxMTUzOCwic3ViIjoiZGV2ZWxvcGVyL2Y4YmM5OGFmLTg4YjUtOGZmMy0yN2JiLWVmZWU2OGUwMjg3ZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjIwMC44Mi4xMzcuNSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.kqjH0BP5gS5FzikAk4nCtspMwpU0jDnZU1YEEowaApIgIAx-Zfecoth-02QeKOZc4ZluU3dxdf0yVHVRxzOIqw'

/**@type {String} clanTag The tag of the desired clan to look it's information about*/
let clanTag = '2qylrrvyg'

/**@type {String} clanRequestUrl The url to query to search for the specific clan*/
let clanRequestUrl = `https://api.clashofclans.com/v1/clans/%23${clanTag}`

/**@type {String} clanMembersRequestUrl The url to query when searching for the data of the members of the clan*/
let clanMembersRequestUrl = `https://api.clashofclans.com/v1/clans/%23${clanTag}/members`

/**@type {Object} allClanInfo The query result of the clan and all of its data*/
let allClanInfo = null;

/**@type {Array<number>} clanMembers The array or list of members of the clan*/
let clanMembers = []

let requestOptions = {
  method:"GET",
  headers:{
    Accept: 'application/json',
    Authorization: `Bearer ${COC_API_TOKEN}`
  }
}

async function getClan(){
  const res = await fetch(clanRequestUrl,requestOptions)
  allClanInfo = await res.json()
  clanMembers = allClanInfo.memberList
  console.log(allClanInfo);
  
}

getClan()
