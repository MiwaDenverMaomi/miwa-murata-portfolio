const ERR_001 = 'Input Required.';
const ERR_002 = 'Input correct Email address.';
const ERR_003_1 = 'Input less than';
const ERR_003_2 = ' letters.';

export const ERR_004 = 'Message failed to be sent. Please try again later.';
export const ERR_005 = 'Error occured.Please try again later.';

export function validRequired(val) {
    if (val.length <= 0) {
        return ERR_001;
    } else {
        return '';
    }
}

export function validMaxLen(length = 100, val) {
    if (val.length > length) {
        return ERR_003_1 + length + ERR_003_2;
    } else {
        return '';
    }
}

export function validEmail(val) {
    let reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    if (reg.test(val)) {
        debug('correct email adress!');
        return '';
    } else {
        debug('wrong email adress!');
        return ERR_002;
    }
}

export function debug(str) {
    const debug_mode = false;
    if (debug_mode) {
        return console.log(str);
    }

}
