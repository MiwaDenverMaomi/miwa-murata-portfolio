const ERR_001 = 'Input Required.';
const ERR_002 = 'Input correct Email address.';
const ERR_003_1 = 'Input less than';
const ERR_003_2 = ' letters.';

export function validRequired(val: string) {
    if (val.length <= 0) {
        return ERR_001;
    } else {
        return '';
    }
}

export function validMaxLen(length: number = 100, val: string) {
    if (val.length > length) {
        return ERR_003_1 + length + ERR_003_2;
    } else {
        return '';
    }
}

export function validEmail(val: string) {
    let reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    if (reg.test(val)) {
        debug('correct email address!');
        return '';
    } else {
        debug('wrong email address!');
        return ERR_002;
    }
}

export function debug(str: any) {
    const debug_mode= false;
    if (debug_mode!==false) {
        return console.log(str);
    }

}
