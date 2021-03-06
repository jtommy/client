export default {
    'auth': '/api/v1/auth',
    'registerUser': "/api/v1/register",
    'uploadStatus': '/api/v1/statuses',
    'uploadMedia': '/api/v1/media',
    'retriveImages': (id) => {return '/api/v1/accounts/'+ id + '/statuses'},
    'retriveUser': (id) => {return '/api/v1/accounts/'+id},
    'logout': '/logout',
    'homeTimeline': '/api/v1/timelines/home',
    'verifyCredentials': '/api/v1/accounts/verify_credentials',
    'updateCredentials': '/api/v1/accounts/update_credentials',
    'followers': (id) => {return '/api/v1/accounts/' + id + '/followers'},
    'following': (id) => {return '/api/v1/accounts/' + id + '/following'},
    'status': (id) => {return '/api/v1/statuses/' + id},
    'streamingHome': '/api/v1/streaming/user',
    'likeStatus': (id) => {return '/api/v1/statuses/' + id + '/favourite'},
    'dislikeStatus': (id) => {return '/api/v1/statuses/' + id + '/unfavourite'}
}
