'use client'
import { Button } from "@nextui-org/button";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { decrement, increment } from "@/lib/store/counterSlice";

export const Counter = () => {
    const value = useAppSelector((state) => state.counterSlice.value)
    const dispatch = useAppDispatch()
    return (
        <div className="flex p-2 m-2 justify-center items-center gap-4">
            <Button radius="full" color="primary" onPress={() => dispatch(increment())}>
                Add
            </Button>
            Count is {value}
            <Button radius="full" color="warning" onPress={() => dispatch(decrement())}>
                Substract
            </Button>
        </div>

    );
};
