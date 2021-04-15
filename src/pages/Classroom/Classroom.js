import React from 'react'
import Card from '../../components/Card'
import ClassCourse from '../../components/ClassCourse'
import './classroom.css'
const Classroom = () => {
    return (
        <div className="classroom align">
            <div className="classroom__courses-cont">
                <div className="section-title">
                    <h3 className="title-color">My Courses</h3>
                </div>
                <div className="classroom__courses">
                    <Card width="100%" height="100%">
                        <ClassCourse enrolled={true}
                            image="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634_960_720.jpg"
                            title="Learn Graphic Design With an Award-Winning Designer"
                            creator="Sklolo Harba"
                            chapter="Logo Design Principles"
                            lesson="Negative Space"
                        />
                    </Card>
                    <Card width="100%" height="100%">
                        <ClassCourse enrolled={true}
                            image="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634_960_720.jpg"
                            title="Learn Graphic Design With an Award-Winning Designer"
                            creator="Sklolo Harba"
                            chapter="Logo Design Principles"
                            lesson="Negative Space"
                        />
                    </Card>
                    <Card width="100%" height="100%">
                        <ClassCourse enrolled={true}
                            image="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634_960_720.jpg"
                            title="Learn Graphic Design With an Award-Winning Designer"
                            creator="Sklolo Harba"
                            chapter="Logo Design Principles"
                            lesson="Negative Space"
                        />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Classroom
