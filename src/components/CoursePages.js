import React from 'react';
import { getCourses } from "../api/courseApi"; 

class CoursePages extends React.Component {
        state = {
            courses: []
        };
    
        componentDidMount() {
            getCourses().then( courses =>
             this.setState({courses: courses}));
        }
    render() {
        return ( <><h2>Courses</h2>
        <table className="table">
            <thread>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                </tr>
            </thread>
            <tbody>
                { this.state.courses.map( course => {
                    return <tr  key={course.id}>
                        <td>{course.title}</td>
                        <td>{course.authorId}</td>
                        <td>{course.category} </td>
                    </tr>
                })}
            </tbody>
        </table></>
        );
    }
}

export default CoursePages;