import { useAppSelector } from "./redux-hooks";

export function useAuth() {
    const { token,} = useAppSelector(state => state.user);
    return {
        token
    }
}
