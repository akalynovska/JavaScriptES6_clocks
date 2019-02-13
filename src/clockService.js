import request from './request';
let theUrl = 'https://net.dailyfxasia.com/test.php';

export let findAll = () => {
    return request({url: theUrl})
        .then(data => data = JSON.parse(data))
};
