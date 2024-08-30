import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

const Expander = ({ children, index, selectedRow, keys }) => {
    const [selectedRowChild, setSelectedRowChild] = useState(null);

    // set selectedRowChild to null when component is unmounted
    useEffect(() => {
        return () => {
            setSelectedRowChild(null);
        };
    }, []);

    return (
        <>
            {selectedRow === index && children.map((child, childIndex) => (
                <div
                    key={childIndex}
                    className={`flex flex-col w-full bg-[#f0f0f0] justify-between px-6 py-2 border ${selectedRowChild === childIndex && 'bg-[#e0e0e0]'}`}
                >
                    <div className="flex flex-row w-full justify-between">
                        {keys.map((key, keyIndex) => (
                            key !== 'id' && !Array.isArray(child[key]) && (
                                <div className={`flex flex-row w-full justify-between px-6 py-2 border rounded-t-lg`} key={key}>
                                    {child[key]}
                                </div>
                            )
                        ))}
                        <div className='w-[20%]'>
                            <Button type='default' onClick={() => {
                                setSelectedRowChild(selectedRowChild === childIndex ? null : childIndex);
                            }}>
                                {selectedRowChild === childIndex ? '-' : '+'}
                            </Button>
                        </div>
                    </div>
                    {child?.features && Array.isArray(child.features) && (
                        <Expander
                            children={child.features}
                            index={childIndex}
                            selectedRow={selectedRowChild}
                            keys={Object.keys(child.features[0])}
                        />
                    )}
                </div>
            ))}
        </>
    );
};

export default Expander;