import request from './request';
let theUrl = 'https://net.dailyfx.com.hk/test.php';

export let findAll = () => {
    return request({url: theUrl})
        .then(data => data = JSON.parse(data))
};
