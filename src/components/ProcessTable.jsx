const ProcessTable = ({processes, setProcesses}) => {
    const updateProcess = (index, inputType, value) => {
        let newProcess = [...processes]
        newProcess[index] = {pid: processes[index].pid, states: processes[index].states};
        inputType == 'arrival' ? newProcess[index].arrival = value : newProcess[index].arrival = processes[index].arrival;
        inputType == 'duration' ? newProcess[index].duration = value : newProcess[index].duration = processes[index].duration;
        inputType == 'bloq1Arrival' ? newProcess[index].bloq1Arrival = value : newProcess[index].bloq1Arrival = processes[index].bloq1Arrival;
        inputType == 'bloq1Duration' ? newProcess[index].bloq1Duration = value : newProcess[index].bloq1Duration = processes[index].bloq1Duration;
        inputType == 'bloq2Arrival' ? newProcess[index].bloq2Arrival = value : newProcess[index].bloq2Arrival = processes[index].bloq2Arrival;
        inputType == 'bloq2Duration' ? newProcess[index].bloq2Duration = value : newProcess[index].bloq2Duration = processes[index].bloq2Duration;

        setProcesses(newProcess);
    }

    return (
        <table className="border-collapse bg-white shadow-lg text-darkGray font-paragraph">
            <thead>
                <tr className="border-y-2 border-darkGray">
                    <th colSpan={3} className="px-4 py-2 border-x-2 border-darkGray"></th>
                    <th colSpan={4} className="px-4 py-2 border-x-2 border-darkGray"> Bloqueo (Sucede en la ejecución) </th>
                </tr>

                <tr>
                    <th className="px-4 py-2 border-x-2 border-darkGray"> PID </th>
                    <th className="px-4 py-2 border-x-2 border-darkGray"> Llegada </th>
                    <th className="px-4 py-2 border-x-2 border-darkGray"> Duración </th>
                    <th className="px-4 py-2 border-x-2 border-darkGray"> Llegada </th>
                    <th className="px-4 py-2 border-x-2 border-darkGray"> Duración </th>
                    <th className="px-4 py-2 border-x-2 border-darkGray"> Llegada </th>
                    <th className="px-4 py-2 border-x-2 border-darkGray"> Duración </th>
                </tr>
            </thead>
  
            <tbody>
                {
                    processes.map((process, index) => (
                        <tr className="border-t-2 border-darkGray text-center">
                            <td className="px-4 py-2 border-x-2 border-darkGray"> {process.pid} </td>
                            <td className="px-4 py-2 border-x-2 border-darkGray"> 
                                <input type="number" min={0} value={process.arrival} className="w-16 text-center" 
                                onChange={(e) => updateProcess(index, 'arrival', parseInt(e.target.value))}/>
                            </td>
                            <td className="px-4 py-2 border-x-2 border-darkGray"> 
                                <input type="number" min={0} value={process.duration} className="w-16 text-center" 
                                onChange={(e) => updateProcess(index, 'duration', parseInt(e.target.value))}/> 
                            </td>
                            <td className="px-4 py-2 border-x-2 border-darkGray"> 
                                <input type="number" min={0} value={process.bloq1Arrival} className="w-16 text-center" 
                                onChange={(e) => updateProcess(index, 'bloq1Arrival', parseInt(e.target.value))}/> 
                                </td>
                            <td className="px-4 py-2 border-x-2 border-darkGray"> 
                                <input type="number" min={0} value={process.bloq1Duration} className="w-16 text-center" 
                                onChange={(e) => updateProcess(index, 'bloq1Duration', parseInt(e.target.value))}/> 
                            </td>
                            <td className="px-4 py-2 border-x-2 border-darkGray"> 
                                <input type="number" min={0} value={process.bloq2Arrival} className="w-16 text-center" 
                                onChange={(e) => updateProcess(index, 'bloq2Arrival', parseInt(e.target.value))}/> 
                            </td>
                            <td className="px-4 py-2 border-x-2 border-darkGray"> 
                                <input type="number" min={0} value={process.bloq2Duration} className="w-16 text-center" 
                                onChange={(e) => updateProcess(index, 'bloq2Duration', parseInt(e.target.value))}/>
                            </td>
                        </tr>  
                    ))
                }
            </tbody>
        </table>
    )
  }
  
  export default ProcessTable;