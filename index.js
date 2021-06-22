export default function makeQueryParams(obj,fromPrice,toPrice){
        const ret = [];
        var params = ''
        for (let d in obj) {
            if (obj[d] !== undefined) {
                ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(obj[d]));
            }
            obj.price__range = `${fromPrice}__${toPrice}`
        }
        //assing to url
        for (var i = 0; i < ret.length; i++) {
            params = ret.join('&');
        }
        return params;
}
