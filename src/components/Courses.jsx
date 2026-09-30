import { useState } from "react";

const sampleCourses = [
    { id: 1, code: "CS101", title: "Introduction to Programming", credits: 3 },
    { id: 2, code: "CS201", title: "Data Structures", credits: 4 },
    { id: 3, code: "CS301", title: "Database Systems", credits: 3 },
];

function Courses() {
    const [form, setForm] = useState({ code: "", title: "", credits: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // UI only — no backend call in this lab
        console.log("Course form submitted:", form);
        setForm({ code: "", title: "", credits: "" });
    };

    return (
        <div>
            <h2>Course Management</h2>
            <p className="text-muted">
                Create and manage university courses. Backend integration comes in a later lab.
            </p>

            {/* ---------- Course Form ---------- */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title mb-3">Add New Course</h5>

                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-4">
                            <label htmlFor="code" className="form-label">Course Code</label>
                            <input
                                id="code"
                                name="code"
                                type="text"
                                className="form-control"
                                placeholder="e.g. CS101"
                                value={form.code}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-5">
                            <label htmlFor="title" className="form-label">Course Title</label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                className="form-control"
                                placeholder="e.g. Introduction to Programming"
                                value={form.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="credits" className="form-label">Credits</label>
                            <input
                                id="credits"
                                name="credits"
                                type="number"
                                min="1"
                                max="6"
                                className="form-control"
                                value={form.credits}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">
                                Save Course
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* ---------- Course Table ---------- */}
            <div className="table-responsive">
                <table className="table table-bordered table-hover align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Code</th>
                            <th>Title</th>
                            <th>Credits</th>
                            <th style={{ width: "160px" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sampleCourses.map((course) => (
                            <tr key={course.id}>
                                <td>{course.id}</td>
                                <td>{course.code}</td>
                                <td>{course.title}</td>
                                <td>{course.credits}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-warning me-2"
                                    >
                                        Edit
                                    </button>
                                    <button type="button" className="btn btn-sm btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Courses;