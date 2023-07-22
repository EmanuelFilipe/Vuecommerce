import moment from 'moment'

function aplicarMascaraEmDataIso(data){
    if(data) {
        console.log('aplicarMascaraEmDataIso',  moment(data))
        return moment(data).locale('pt-br').format('dd/mm/YYYY');
    }

    return undefined;
}

function aplicarMascaraDataHoraEmDataIso(data){
    if(data) {
        return moment(data).locale('pt-br').format('DD/MM/YYYY HH:mm:ss');
    }

    return undefined;
}

function aplicarMascaraISOEmFormatoAmericano(data){
    if(data) 
        return moment(data).locale('pt-br').format('YYYY-MM-DD');

    return undefined;
}

function aplicarMascaraFormatoAmericanoEmDataISO(data){
    if(data) {
        let formatDate = moment(data).locale('pt-br').format('YYYY-MM-DD');
        console.log('formato americano', formatDate + "T00:00:00")
        return formatDate + "T00:00:00";
    }

    return undefined;
}

export default {
    aplicarMascaraEmDataIso,
    aplicarMascaraDataHoraEmDataIso,
    aplicarMascaraISOEmFormatoAmericano,
    aplicarMascaraFormatoAmericanoEmDataISO
}