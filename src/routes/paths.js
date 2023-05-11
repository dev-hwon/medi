// ----------------------------------------------------------------------

function path(root, sublink) {
    return `${root}${sublink}`;
}

// 스토어
const ROOTS_STORE = process.env.NEXT_PUBLIC_MEDI_HOME;

export const PATH_LOGIN = path(ROOTS_STORE,'/access/login');

// 클리닉
export const ROOTS_CLINIC = process.env.NEXT_PUBLIC_HOST;

export const PATH_CLINIC = {
    medi: path(ROOTS_CLINIC,'/medi')
};

// API
const ROOTS_API = process.env.NEXT_PUBLIC_MEDI_API;

export const PATH_API = {
    member: path(ROOTS_API,'/member'),
    notice: path(ROOTS_API,'/clinic/notice'),
};

// JSON SERVER
const ROOTS_JSONSERVER = process.env.NEXT_PUBLIC_JSONSERVER;

export const PATH_JSONSERVER = {
    todos: path(ROOTS_JSONSERVER,'/todos'),
    board: path(ROOTS_JSONSERVER,'/board'),
    sample: path(ROOTS_JSONSERVER,'/sample'),
    authors: path(ROOTS_JSONSERVER,'/authors'),
    categorys: path(ROOTS_JSONSERVER,'/categorys'),
}
