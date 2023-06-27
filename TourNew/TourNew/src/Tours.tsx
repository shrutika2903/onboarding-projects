import { Project } from "./Projects";
import Tour from "./Tour";
interface DataProps {
 tours: Project[];
  removeTours: (id: number) => void;

}


function Tours(props: DataProps) {
  const { tours, removeTours } = props;
  console.log('Props', props)

  return (
    <>
      <div>
        <h1>Our Tours </h1>
        <div className="underline"></div>
         </div>
          <div>
        {tours.map((tour) => {
          return <Tour {...tour}
            removeTours={removeTours}

          />
        })}
      </div>
    </>
  )
}

export default Tours;