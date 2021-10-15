class Helper {
    getRandomEmail () {
        const randomNumber = Math.floor(Math.random() * Math.random() * 10000000);
        const randomString = Math.random().toString(36).substring(4);
        const  randomEmail  =  `test+ ${ randomNumber } ${ randomString } @gmail.com` ;
        return randomEmail;
    }
    formatString () {
        var s = arguments[0];
        for (var i = 0; i < arguments.length - 1; i++) {       
            var reg = new RegExp("\\{" + i + "\\}", "gm");             
            s = s.replace(reg, arguments[i + 1]);
        }
        return s;
    }
}
export default Helper;