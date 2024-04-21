import {redirect} from "@sveltejs/kit"

export const load = ({cookies}) => {
    if(!cookies.get("userId")) {
        throw redirect(307, "/")
    }
}