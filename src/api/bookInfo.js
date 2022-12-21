import {get,post} from './index'

export function getBookInfoList(option){
  return get("bookInfo/getBookInfoList",option)
}
