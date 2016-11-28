import $ from 'n-zepto';
import CONFIG from 'services/constants';
import nx from 'next-js-core2';

export default class Http{
  static GET(inName,inOptions){
    return Http.REQUEST('GET',inName,inOptions);
  }
  static POST(inName,inOptions){
    return Http.REQUEST('POST',inName,inOptions);
  }
  static PUT(inName,inOptions){
    return Http.REQUEST('PUT',inName,inOptions);
  }
  static DELETE(inName,inOptions){
    return Http.REQUEST('DELETE',inName,inOptions);
  }
  static REQUEST(inMethod,inName,inOptions){
    var options = nx.mix({
      type:inMethod,
      url:`${CONFIG.SERVER_API}${inName}`,
      contentType:'application/x-www-form-urlencoded'
    },inOptions);
    return $.ajax(options);
  }
}
