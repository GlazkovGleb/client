import { useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../store/index";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
