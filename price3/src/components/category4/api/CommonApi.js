let axios = require('axios') ;
import commom from '../../common.js' ;

//查询category4数据
export async function queryAllCategory4(){
    let url = '/api/queryAllCategory4' ;
    url = commom.dealProjectUrl(url);
    

    let response = await axios.get(url) ;
    return response.data ;
}

//通过id查询Category4数据
export async function queryCategory4ById(id){
    let url = '/api/queryCategory4ById?id='+id ;
    url = commom.dealProjectUrl(url);
    let response = await axios.get(url);
    return response.data ;
}

export default {
    queryAllCategory4,
    queryCategory4ById
} ;