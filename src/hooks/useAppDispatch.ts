import { Dispatch } from "@/store/store";
import { useDispatch } from "react-redux";

export const useAppDispatch: () => Dispatch = useDispatch;
