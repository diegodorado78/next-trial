import React from "react";
import { Spinner } from "@nextui-org/react";

export default function LoadingSpinner() {
    return (
        <div className="flex flex-col w-full items-center justify-center">
            <Spinner />
        </div>
    );
}
