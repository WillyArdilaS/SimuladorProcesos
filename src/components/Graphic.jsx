const Graphic = ({processA, processB, processC, processD, processE, processF, processG}) => {
  const decideColor = (state) => {
    switch (state) {
      case 1: return 'bg-white'
      case 2: return 'bg-green-500'
      case 3: return 'bg-red-600'
      case 4: return 'bg-gray-300'
    }
  }

  const createTimeline = () => {
    let tdArray = [];
    for (let i = 0; i < processA.states.length; i++) {
      tdArray.push(<td key={i} className={`px-2 border-t-2 border-black text-sm font-semibold`}>{i}</td>);
    }

    return tdArray;
  }

  return (
    <table>
      <tbody>
        <tr>
          <td className="pr-4 font-semibold text-lg border-r-2 border-black"> {processG.pid} </td>
            {
              processG.states.map((stateG, index) => (
                <td key={index} className={`border border-gray-200 ${decideColor(stateG)}`}></td>
              ))
            }
        </tr>
        
        <tr>
          <td className="pr-4 font-semibold text-lg border-r-2 border-black"> {processF.pid} </td>
          {
            processF.states.map((stateF, index) => (
              <td key={index} className={`border border-gray-200 ${decideColor(stateF)}`}></td>
            ))
          }
        </tr>
        
        <tr>
          <td className="pr-4 font-semibold text-lg border-r-2 border-black"> {processE.pid} </td>
          {
            processE.states.map((stateE, index) => (
              <td key={index} className={`border border-gray-200 ${decideColor(stateE)}`}></td>
            ))
          }
        </tr>
        
        <tr>
          <td className="pr-4 font-semibold text-lg border-r-2 border-black"> {processD.pid} </td>
          {
            processD.states.map((stateD, index) => (
              <td key={index} className={`border border-gray-200 ${decideColor(stateD)}`}></td>
            ))
          }
        </tr>
        
        <tr>
          <td className="pr-4 font-semibold text-lg border-r-2 border-black"> {processC.pid} </td>
          {
            processC.states.map((stateC, index) => (
              <td key={index} className={`border border-gray-200 ${decideColor(stateC)}`}></td>
            ))
          }
        </tr>
        
        <tr>
          <td className="pr-4 font-semibold text-lg border-r-2 border-black"> {processB.pid} </td>
          {
            processB.states.map((stateB, index) => (
              <td key={index} className={`border border-gray-200 ${decideColor(stateB)}`}></td>
            ))
          }
        </tr>
        
        <tr>
          <td className="pr-4 font-semibold text-lg border-r-2 border-black"> {processA.pid} </td>
          {
            processA.states.map((stateA, index) => (
              <td key={index} className={`border border-gray-200 ${decideColor(stateA)}`}></td>
            ))
          }
        </tr>
        
        <tr>
          <td></td>
          {
            createTimeline()
          }
        </tr>
      </tbody>
    </table>
  )
}

export default Graphic