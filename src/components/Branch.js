import React, { useState } from 'react';

const Branch = ({ label, level = 1 }) => {
    const [subordinates, setSubordinates] = useState([]);
    const [peers, setPeers] = useState([]);

    const handleAddSubordinate = () => {
        let child = label.split("/")[1]
        child  = child ? `/${child}` : ""
        const newSubordinateLabel = `Subordinate${child}/${subordinates.length + 1}`;
        const newArray = [...subordinates, newSubordinateLabel]
        setSubordinates(newArray);

    };

    const handleAddPeer = () => {
        let child = label.split("/")[1]
        child  = child ? `/${child}` : ""
        const newPeerLabel = `Branch member${child}/${peers.length + 1}`;
        setPeers([ ...peers, newPeerLabel]);
    };
    return (
        <div style={{ marginLeft: level * 20, marginTop: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>{label}</span>
                <button onClick={handleAddSubordinate} style={{ marginLeft: 10 }}>…</button>
                <button onClick={handleAddPeer} style={{ marginLeft: 10 }}>+</button>
            </div>
            <div style={{ marginLeft: 20 }}>
                {subordinates.map((subLabel, index) =>(
                     <Branch key={index} label={subLabel} level={level + 1} />
                ))}
            </div>
            <div>
                {peers.map((peerLabel, index) => (
                    <Branch key={index} label={peerLabel} level={level} />
                ))}
            </div>
        </div>
    );
};

export default Branch;
