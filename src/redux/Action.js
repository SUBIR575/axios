import {FEATCHDATA,FEATCHFAIL,FEATCHSUCCESS} from './Type';

export function loadingapidata(){
    return{
        type:FEATCHDATA
    }
}

export function feathingdata(data){
    return{
        type:FEATCHSUCCESS,
        payload:data
    }
}

export function faildataload(data){
    return{
        type:FEATCHFAIL,
        payload:data
    }
}