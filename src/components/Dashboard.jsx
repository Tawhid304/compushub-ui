function Dashboard() {
    return (
        <div>
            <h2>CompusHub Dashboard</h2>
            <p className="text-muted">
                University course and registration management system.
            </p>

            <div className="row g-3 mt-2">
                <div className="col-md-3">
                    <div className="card text-bg-primary">
                        <div className="card-body">
                            <h6 className="card-title">Courses</h6>
                            <h3 className="mb-0">12</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-bg-success">
                        <div className="card-body">
                            <h6 className="card-title">Students</h6>
                            <h3 className="mb-0">148</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-bg-warning">
                        <div className="card-body">
                            <h6 className="card-title">Sections</h6>
                            <h3 className="mb-0">24</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-bg-info">
                        <div className="card-body">
                            <h6 className="card-title">Registrations</h6>
                            <h3 className="mb-0">320</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;