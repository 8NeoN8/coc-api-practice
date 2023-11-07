/**@type {string} COC_API_TOKEN The API token for the clash of clans api*/
const COC_API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImRhMDJjNWEwLWVmN2QtNDAzYy1iZjNjLTRkMzEzOWQ1MjA4NiIsImlhdCI6MTY5OTIxMTUzOCwic3ViIjoiZGV2ZWxvcGVyL2Y4YmM5OGFmLTg4YjUtOGZmMy0yN2JiLWVmZWU2OGUwMjg3ZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjIwMC44Mi4xMzcuNSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.kqjH0BP5gS5FzikAk4nCtspMwpU0jDnZU1YEEowaApIgIAx-Zfecoth-02QeKOZc4ZluU3dxdf0yVHVRxzOIqw'

/**@type {String} clanTag The tag of the desired clan to look it's information about*/
let clanTag = '2qylrrvyg'

/**@type {String} clanRequestUrl The url to query to search for the specific clan*/
let clanRequestUrl = `https://api.clashofclans.com/v1/clans/%23${clanTag}`

/**@type {String} clanMembersRequestUrl The url to query when searching for the data of the members of the clan*/
let clanMembersRequestUrl = `https://api.clashofclans.com/v1/clans/%23${clanTag}/members`

/**@type {Array<number>} clanMembers Array of members of the clan*/
let clanMembers = []

/**@type {Object} requestOptions Set of parameters that are required for every API request */
let requestOptions = {
  method:"GET",
  headers:{
    Accept: 'application/json',
    Authorization: `Bearer ${COC_API_TOKEN}`
  }
}

/**@type {Object} allClanInfo Query result of the clan and all of its data*/
let allClanInfo = getClan(clanRequestUrl,requestOptions);

/**
 * 
 * @param {String} tag
 * @returns True or false depending on if the clan tag provided doesn't include special characters and is withing the valid length
 */
function validateClanTag(tag){
  let validTag = false
  return validTag
}

/**
 * @param {String} requestUrl 
 * @param {Object} options 
 * @returns clan and all of its data if the clan tag was valid, else it returns a not found error
 */
async function getClan(requestUrl,options){
  const res = await fetch(requestUrl,options)
  if(!res.ok) return 'Clan no encontrado o tag invalido'
  return await res.json()
}


/**
 * @param {Object} clanInfo Result of the API request. Sets the allClanInfo variable globally after the promise has been fullfilled
 */
async function setClanInfo(requestResult){
  allClanInfo = await requestResult
  typeof(allClanInfo) == 'string' ? handleError(allClanInfo) : fillClanInfo(allClanInfo);
}

function handleError(errorMessage){
  console.log(errorMessage);
}

function fillClanInfo(allClanInfo){
  console.log(allClanInfo);
  let clanName = document.getElementById('clan-name')
  let clanEmblem = document.getElementById('clan-emblem')

  clanName.innerText = (allClanInfo.name).charAt(0).toUpperCase() + allClanInfo.name.slice(1)

  clanEmblem.setAttribute('src', allClanInfo.badgeUrls.small)

  createClanStats(allClanInfo)
  createClanMemberList(allClanInfo)
}

function createClanStats(allClanInfo){

  let statsContainer = document.getElementById('section-clan-statistics')

  let clanWarLeague = document.createElement('div')
  clanWarLeague.classList.add('clan-war-league-field')
  clanWarLeague.innerText = `Clan War League: ${allClanInfo.warLeague.name}`

  statsContainer.appendChild(clanWarLeague)
  //when every stat has been defined and added make a for that adds the class 'stat-field' to everyone for general styling

}

function createClanMemberList(allClanInfo){

}

setClanInfo(allClanInfo)



/* let homeVillage = document.getElementById('home-village-button')
homeVillage.addEventListener('click',()=>{
  console.log(allClanInfo);
})
 */