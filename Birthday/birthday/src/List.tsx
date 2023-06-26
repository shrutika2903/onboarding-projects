import { Project } from './Project';


interface DataProps {
    projects: Project[];
}

function List(props: DataProps) {
    const { projects } = props;
    console.log('Props', props)

    return (


        (projects.map((project) =>
            <div className='container'>
                <img src={project.image} alt={project.name}/>
                <h3>{project.name}</h3>
                <h3>{project.age}Years</h3>

            </div>

        ))

    )
}

export default List;