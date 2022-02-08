'use strict'
import { httpService } from './http.service.js'

export const commentService = {
    query,
    add
}


async function query() {
    const comments = await httpService.get('comment');
    return comments
}


async function add(comment) {
    try {
        await httpService.post('comment', comment);
    }
    catch (err) {
        console.log('coudnt add ccomment', err);
    }

}

