import request from './request';
let theUrl = 'https://wisedeveloper.000webhostapp.com/index.php';

export let findAll = () => {
    return request({url: theUrl})
        .then(data => data = JSON.parse(data))
};
