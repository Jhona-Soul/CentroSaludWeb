import { useContext } from "react";
import { ProminentContext } from "../context/ProminentContext";

export const useProminent = () => {
    const context = useContext(ProminentContext);
    if (context === undefined) {
        throw new Error("useProminent must be used with a prominentContext");
    }
    return context;
}