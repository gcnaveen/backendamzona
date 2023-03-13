export const port = process.env.PORT;
export const local_client_app = process.env.LOCAL_CLIENT_APP;
export const remote_client_app = process.env.REMOTE_CLIENT_APP;
export const alloedDomains = process.env.NODE_ENV === 'production' ?
    [process.env.REMOTE_CLIENT_APP, process.env.REMOTE_SERVER_API] :
    [process.env.LOCAL_CLIENT_APP, process.env.LOCAL_SERVER_API];