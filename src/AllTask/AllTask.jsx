import axios from "axios";
import { useEffect, useState } from "react";

const AllTask = () => {
    const [allTask, setAllTask] = useState([])

    useEffect(() => {

        const url = 'https://job-task-server-ashen.vercel.app/task'
        axios.get(url)
            .then(res => {
                setAllTask(res.data);
            })

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setAllTask(data)
        //     })
    }, []);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="text-xl font-semibold ">
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allTask.map((task, idx) => (

                                <tr key={task._id}>
                                    <th>{idx + 1}</th>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.date}</td>
                                    <td>{task.selectedValue}</td>
                                    <td className="cursor-pointer btn btn-sm h-full btn-outline btn-info"> Start now</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTask;