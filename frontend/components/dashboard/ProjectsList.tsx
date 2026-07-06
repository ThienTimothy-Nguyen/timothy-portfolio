

function ProjectsList() {
  return (
    <ul className="flex flex-col gap-4">
        {new Array(5).fill(0).map((_,i) => (
            <li 
                key={i}
                className="w-full h-16 bg-gray-300 rounded-lg">
                
            </li> 
        ))}
    </ul>
  )
}

export default ProjectsList