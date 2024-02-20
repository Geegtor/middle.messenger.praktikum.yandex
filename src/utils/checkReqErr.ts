import { Resp } from "../types"

export function requestHasError(data: Resp): data is Resp {
    return !!JSON.parse(data.response).reason;
}
