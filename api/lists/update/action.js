import { update } from '../model/list';
import { debug } from '../../lib/logger';

export function respond(event, cb){
  let list = event.list;
  if(list){
    list.updatedAt = new Date().toString();
    update(list).then(list => {
      return cb(null, list);
    }).catch( e => {
      debug(e);
      return cb(e);
    });
  }else{
    return cb("no list provided");
  }
}
