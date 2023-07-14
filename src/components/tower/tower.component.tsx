import React from 'react';
import { TowerWrapper, DiskContainer } from './tower.styles';
import Disk from '../disk/disk.component';

interface TowerProps {
    disks: number[];
    onSelectDisk: (disk: number) => void;
    onMoveDisk: (from: number, to: number) => void;
    selectedDisk: number | null;
}

const Tower: React.FC<TowerProps> = ({ disks, onSelectDisk }) => {
    return (
        <>
            <TowerWrapper>
                <DiskContainer>
                    {disks.map((disk, index) => (
                        <Disk
                            key={index}
                            size={disk}
                            onSelectDisk={() => onSelectDisk(disk)}
                            />
                    ))}
                </DiskContainer>
            </TowerWrapper>
        </>
    )
};

export default Tower;