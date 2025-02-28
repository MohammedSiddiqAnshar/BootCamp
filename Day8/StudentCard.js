const StudentCard = ({ name, major, year }) => {
    return (
        <div className="card-container">
        <h2 className="student-name">{name}</h2>
        <p className="student-major">Major: {major}</p>
        <p className="student-year">Year: {year}</p>
        </div>
    );
    };

    export default StudentCard;

