import React, { useState, useEffect, useRef } from 'react';

// component imports
import Tower from '../tower/tower.component';

// styles
import { TowersContainer } from './game.styles';


const initialState: number[][] = [
    [3, 2, 1],      // Tower 1 with the default disks
    [],             // Tower 2 empty
    []              // Tower 3 empty
];

const Game: React.FC = () => {
    const [towers, setTowers] = useState(initialState); // Towers state
    const [selectedDisk, setSelectedDisk] = useState<number | null>(null); // Selected disk state

    const draggedDiskRef = useRef<number | null>(null);

    // Handles dragging a disk
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (selectedDisk !== null) {
                const draggedDisk = document.getElementById(`disk-${selectedDisk}`);
                if (draggedDisk) {
                    draggedDisk.style.left = `${event.clientX - 50}px`;
                    draggedDisk.style.top = `${event.clientY - 50}px`;
                }
            }
        };

        const handleMouseUp = () => {
            if (selectedDisk !== null) {
                const diskIndex = selectedDisk - 1;
                const sourceTower = towers.find(tower => tower.includes(selectedDisk));
                const destinationTower = towers.find(tower => !tower.includes(diskIndex));

                if (sourceTower && destinationTower) {
                    if (destinationTower.length === 0 || destinationTower[destinationTower.length - 1] > selectedDisk) {
                        // Move the disk
                        sourceTower.splice(sourceTower.indexOf(diskIndex), 1);
                        destinationTower.push(diskIndex);
                        setTowers([...towers]);
                    }
                }
            }
            setSelectedDisk(null);
            draggedDiskRef.current = null;
        };

        if (selectedDisk !== null) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        };

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

    }, [selectedDisk, towers]);

    // Handles selecting a disk
    const handleSelectDisk = (disk: number) => {
        // Check if there is already a selected disk
        if (selectedDisk !== null) {
            setSelectedDisk(null); // Reset the selected disk
        } else {
            setSelectedDisk(disk); // Set the selected disk
        }
    };


    /**
     *  Moves the top disk from one tower to another.
     * 
     * @param from the initial tower
     * @param to the destination tower
     */
    const moveDisk = (from: number, to: number) => {
        const newTowers = [...towers];
        const sourceTower = newTowers[from];
        const destinationTower = newTowers[to];

        // Check the source tower for a disk to move
        if (sourceTower.length === 0) {
            return; // No disk to move
        }

        const diskToMove = sourceTower[sourceTower.length - 1];

        // Check destination tower to see if it's empty or the top disk is larger than the one we're moving
        if (destinationTower.length === 0 || destinationTower[destinationTower.length - 1] > diskToMove) {
            // Move the disk
            sourceTower.pop();
            destinationTower.push(diskToMove);
            setTowers(newTowers);
        }
    }


    return (
        <TowersContainer>
            {towers.map((tower, index) => (
                <Tower
                    key={index}
                    disks={tower}
                    onSelectDisk={handleSelectDisk}
                    onMoveDisk={moveDisk}
                    selectedDisk={selectedDisk}
                />
            ))}
        </TowersContainer>
    );
}

export default Game;