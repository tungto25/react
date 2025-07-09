import React, { useState } from 'react';
import { products, Logo } from "../src/data";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";

function App(props) {
    const [data, setData] = useState([]);
    const [text, setText] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const addTask = () => {
        setData([...data, text]);
        setText("");
    }

    const deleted = (index) => {
        setData(data.filter((e, i) => i != index));
    }
    const edit = (index) => {
        setEditIndex(index);
    }
    return (
        <div className='mx-3'>
            <div className='flex justify-center mt-3 gap-3'>
                <input value={text} onChange={(e) => setText(e.target.value)} type="text" className='p-2 border-2 border-cyan-200 bg-slate-400' />
                <button onClick={addTask} className='p-2 bg-green-600'>Add</button>
            </div>
            {data.map((e, index) => (

                <div className="flex justify-between items-center mt-4 bg-yellow-100 p-3 rounded-lg">
                    <p>{index + 1}</p>
                    <p>{e}</p>
                    <div className='flex gap-5'>
                        {editIndex === index ? (
                            <div className='flex items-center gap-3'>
                                <div className="p-3 bg-green-700 border-3 rounded-xl text-white cursor-pointer">
                                    <TiTick />
                                </div>
                                <div className="p-3 bg-red-700 border-3 rounded-xl text-white cursor-pointer">
                                    <MdCancel />
                                </div>
                            </div>
                        ) : (
                            <div className='flex items-center gap-3'>
                                <div onClick={() => edit(index)} className="p-3 bg-green-700 border-3 rounded-xl text-white cursor-pointer">
                                    <CiEdit />
                                </div>
                                <div onClick={() => deleted(index)} className="p-3 bg-red-700 border-3 rounded-xl text-white cursor-pointer">
                                    <MdDeleteForever />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}


        </div>
    );
}

export default App;