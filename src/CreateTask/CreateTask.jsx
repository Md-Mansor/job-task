import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import axios from "axios";


const CreateTask = () => {

    const { user } = useContext(AuthContext);

    const [selectedValue, setSelectedValue] = useState('Normal');

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handelCreate = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const date = form.deadline.value
        const newTask = { title, description, date, selectedValue, email: user ? user.email : '' }
        console.log(newTask);
        axios.post('https://job-task-server-ashen.vercel.app/task', newTask)
            .then(data => {
                console.log(data.data);
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className="border-sky-950 border-4 m-10 rounded-md p-5">
            <form onSubmit={handelCreate}>
                <div className="form-control">
                    <label className="label">
                        <span className="font-semibold text-lg">Title</span>
                    </label>
                    <input type="text" placeholder="title" name="title" className="input input-bordered" required />
                </div >
                <div className="form-control">
                    <label className="label">
                        <span className="font-semibold text-lg">Description</span>
                    </label>
                    <input type="text" placeholder="description" name="description" className="input input-bordered" required />
                </div >
                <div className="form-control">
                    <label className="label">
                        <span className="font-semibold text-lg">Deadline</span>
                    </label>
                    <input type="date" placeholder="deadline" name="deadline" className="input input-bordered" required />
                </div>
                <div className="form-control pt-2">
                    <select
                        className="select select-success w-full"
                        value={selectedValue}
                        onChange={handleSelectChange}
                    >
                        <option value="Normal">Normal</option>
                        <option value="Moderator">Moderator</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-outline btn-success" type="submit" value="Create " />
                </div>
            </form>
        </div>
    );
};

export default CreateTask;