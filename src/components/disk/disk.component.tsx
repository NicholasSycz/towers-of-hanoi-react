import React from "react";
import { DiskWrapper } from "./disk.styles";

interface DiskProps {
    size: number;
    onSelectDisk?: () => void;
}

const Disk: React.FC<DiskProps> = ({ size, onSelectDisk }) => {
    const handleClick = () => {
        if (onSelectDisk) {
            onSelectDisk();
        }
    };
    return (
        <>
            <DiskWrapper size={size} onClick={handleClick} />
        </>
    )
}

export default Disk;