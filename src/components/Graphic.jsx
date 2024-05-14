const Graphic = ({method, processes, quantum}) => {
  const decideColor = (state) => {
    switch (state) {
      case 1: return 'bg-white'
      case 2: return 'bg-green-500'
      case 3: return 'bg-red-600'
      case 4: return 'bg-gray-300'
      default: return 'bg-white'
    }
  }

  const showGraphic = () => {
    let trArray = [];

    processes.map((process) => (
      trArray.push(<tr>
        <td className="pr-4 font-semibold text-lg border-r-2 border-black"> {process.pid} </td>
          {
            process.states.map((state, index) => (
              <td key={index} className={`border border-gray-200 ${decideColor(state)}`}></td>
            ))
          }
      </tr>)
    ))
    

    return trArray.reverse()
  }

  const showQuantum = () => {
    let tdArray = [];

    quantum.map((q, index) => (
      tdArray.push(
      <td key={index} className={`border border-gray-200 ${q == 1 ? 'bg-blue-400' :' bg-white'}`}></td>)
    ))
    return tdArray;
  }

  const createTimeline = () => {
    let tdArray = [];
    for (let i = 0; i < processes[4].states.length; i++) {
      tdArray.push(<td key={i} className={`px-2 border-t-2 border-black text-sm font-semibold`}>{i}</td>);
    }

    return tdArray;
  }

  return (
    <table>
      <tbody>
        { showGraphic() }

        {method == "rr" ? (
          <tr>
            <td className="pr-4 font-semibold text-lg border-r-2 border-black"> Q </td>
            {showQuantum()}
          </tr>
        ) : false}
        
        <tr>
          <td></td>
          { createTimeline() }
        </tr>
      </tbody>
    </table>
  )
}

export default Graphic