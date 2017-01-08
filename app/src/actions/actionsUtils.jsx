export const CONFIRM = 'CONFIRM';

export function requestAction(type, payload = {}) {
    return {
        type: type,
        payload: payload
    };
}

export function successAction(type, data) {
    return {
        type: type,
        payload: data
    };
}

export function failureAction(type, data) {
    return {
        type: type,
        payload: {
            id: data.id,
            error: data.error
        },
        error: true
    };
}