import Project from "./project"

const Section = () => {

    const projects = [
        {
          title: "GrandPrix History",
         
        },
        {
          title: "Waitless",
         
        },
        {
          title: "Timothy's Blog",
          
        },
        {
          title: "F1-Heritage",
    
        }
      ]
      
    return (

        <div className = "w-full bg-whit px-8 py-8 leading-non" >
             <div className= "bg-white px-8 py-3 flex flex-col text-[50px]">
           
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title}  key={index}/>
        })
      }
  
             </div>
        </div>

    )
}

export default Section