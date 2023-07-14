import React from "react";
import { DiskWrapper } from "./disk.styles";

interface DiskProps {
    size: number;
}

const Disk: React.FC<DiskProps> = ({ size }) => {
    return (
        <>
            <DiskWrapper size={size} />
        </>
    )
}

export default Disk;