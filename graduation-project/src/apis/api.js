import serverConfig from '../serverConfig'
import {createPostApi} from './network'

// const BAAS_BASE_URL = serverConfig.serverApi + '/main.php/json'
const URL = serverConfig.Api + '/api/v1/staff'
export function login ({username, password}) {
  return createPostApi(`${URL}/login`, {username, password})
}

// export function newChainAccount({accountID, channelID, platform, password}) {
//     return createPostApi(`${BAAS_BASE_URL}/personal/addChainAccount`, {accountID, channelID, platform, password})
// }

// export function getBalanceByAddress({accountID, channelID, platform, address}) {
//     return createPostApi(`${BAAS_BASE_URL}/asset/balance`, {accountID, channelID, platform, address})
