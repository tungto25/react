import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";

function Todolist(props) {
    const [data, setData] = useState([]);
    const [text, setText] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEdittext] = useState("");
    const addTask = () => {
        setData([...data, text]);
        setText("");
    }

    const deleted = (index) => {
        setData(data.filter((e, i) => i != index));
    }
    const edit = (index, item) => {
        setEditIndex(index);
        setEdittext(item);
    }
    const save = () => {
          data[editIndex] = editText ;
          setEditIndex(null); 
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
                    {editIndex == index ? (
                        <input value={editText} onChange={(e) => setEdittext(e.target.value)} type="text" className='p-2 border-2 border-cyan-200 bg-slate-400' />
                    ) :
                        <p>{e}</p>}
                    <div className='flex gap-5'>
                        {editIndex === index ? (
                            <div className='flex items-center gap-3'>
                                <div onClick={save} className="p-3 bg-blue-500 border-3 rounded-xl text-white cursor-pointer">
                                    <TiTick />
                                </div>
                                <div className="p-3 bg-gray-500 border-3 rounded-xl text-white cursor-pointer">
                                    <MdCancel />
                                </div>
                            </div>
                        ) : (
                            <div className='flex items-center gap-3'>
                                <div onClick={() => edit(index, e)} className="p-3 bg-green-700 border-3 rounded-xl text-white cursor-pointer">
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

export default Todolist;