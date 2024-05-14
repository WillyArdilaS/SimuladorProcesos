const ProcessTable = ({processA, setProcessA, processB, setProcessB, processC, setProcessC, processD, setProcessD, processE, setProcessE, processF, setProcessF,
processG, setProcessG}) => {
    const updateProcessA = (inputType, value) => {
        let newProcess = {pid: processA.pid, states: processA.states};
        inputType == 'arrival' ? newProcess.arrival = value : newProcess.arrival = processA.arrival;
        inputType == 'duration' ? newProcess.duration = value : newProcess.duration = processA.duration;
        inputType == 'bloq1Arrival' ? newProcess.bloq1Arrival = value : newProcess.bloq1Arrival = processA.bloq1Arrival;
        inputType == 'bloq1Duration' ? newProcess.bloq1Duration = value : newProcess.bloq1Duration = processA.bloq1Duration;
        inputType == 'bloq2Arrival' ? newProcess.bloq2Arrival = value : newProcess.bloq2Arrival = processA.bloq2Arrival;
        inputType == 'bloq2Duration' ? newProcess.bloq2Duration = value : newProcess.bloq2Duration = processA.bloq2Duration;

        setProcessA(newProcess);
    }
    
    const updateProcessB = (inputType, value) => {
        let newProcess = {pid: processB.pid, states: processB.states};
        inputType == 'arrival' ? newProcess.arrival = value : newProcess.arrival = processB.arrival;
        inputType == 'duration' ? newProcess.duration = value : newProcess.duration = processB.duration;
        inputType == 'bloq1Arrival' ? newProcess.bloq1Arrival = value : newProcess.bloq1Arrival = processB.bloq1Arrival;
        inputType == 'bloq1Duration' ? newProcess.bloq1Duration = value : newProcess.bloq1Duration = processB.bloq1Duration;
        inputType == 'bloq2Arrival' ? newProcess.bloq2Arrival = value : newProcess.bloq2Arrival = processB.bloq2Arrival;
        inputType == 'bloq2Duration' ? newProcess.bloq2Duration = value : newProcess.bloq2Duration = processB.bloq2Duration;

        setProcessB(newProcess);
    }
    
    const updateProcessC = (inputType, value) => {
        let newProcess = {pid: processC.pid, states: processC.states};
        inputType == 'arrival' ? newProcess.arrival = value : newProcess.arrival = processC.arrival;
        inputType == 'duration' ? newProcess.duration = value : newProcess.duration = processC.duration;
        inputType == 'bloq1Arrival' ? newProcess.bloq1Arrival = value : newProcess.bloq1Arrival = processC.bloq1Arrival;
        inputType == 'bloq1Duration' ? newProcess.bloq1Duration = value : newProcess.bloq1Duration = processC.bloq1Duration;
        inputType == 'bloq2Arrival' ? newProcess.bloq2Arrival = value : newProcess.bloq2Arrival = processC.bloq2Arrival;
        inputType == 'bloq2Duration' ? newProcess.bloq2Duration = value : newProcess.bloq2Duration = processC.bloq2Duration;

        setProcessC(newProcess);
    }
    
    const updateProcessD = (inputType, value) => {
        let newProcess = {pid: processD.pid, states: processD.states};
        inputType == 'arrival' ? newProcess.arrival = value : newProcess.arrival = processD.arrival;
        inputType == 'duration' ? newProcess.duration = value : newProcess.duration = processD.duration;
        inputType == 'bloq1Arrival' ? newProcess.bloq1Arrival = value : newProcess.bloq1Arrival = processD.bloq1Arrival;
        inputType == 'bloq1Duration' ? newProcess.bloq1Duration = value : newProcess.bloq1Duration = processD.bloq1Duration;
        inputType == 'bloq2Arrival' ? newProcess.bloq2Arrival = value : newProcess.bloq2Arrival = processD.bloq2Arrival;
        inputType == 'bloq2Duration' ? newProcess.bloq2Duration = value : newProcess.bloq2Duration = processD.bloq2Duration;

        setProcessD(newProcess);
    }
    
    const updateProcessE = (inputType, value) => {
        let newProcess = {pid: processE.pid, states: processE.states};
        inputType == 'arrival' ? newProcess.arrival = value : newProcess.arrival = processE.arrival;
        inputType == 'duration' ? newProcess.duration = value : newProcess.duration = processE.duration;
        inputType == 'bloq1Arrival' ? newProcess.bloq1Arrival = value : newProcess.bloq1Arrival = processE.bloq1Arrival;
        inputType == 'bloq1Duration' ? newProcess.bloq1Duration = value : newProcess.bloq1Duration = processE.bloq1Duration;
        inputType == 'bloq2Arrival' ? newProcess.bloq2Arrival = value : newProcess.bloq2Arrival = processE.bloq2Arrival;
        inputType == 'bloq2Duration' ? newProcess.bloq2Duration = value : newProcess.bloq2Duration = processE.bloq2Duration;

        setProcessE(newProcess);
    }
    
    const updateProcessF = (inputType, value) => {
        let newProcess = {pid: processF.pid, states: processF.states};
        inputType == 'arrival' ? newProcess.arrival = value : newProcess.arrival = processF.arrival;
        inputType == 'duration' ? newProcess.duration = value : newProcess.duration = processF.duration;
        inputType == 'bloq1Arrival' ? newProcess.bloq1Arrival = value : newProcess.bloq1Arrival = processF.bloq1Arrival;
        inputType == 'bloq1Duration' ? newProcess.bloq1Duration = value : newProcess.bloq1Duration = processF.bloq1Duration;
        inputType == 'bloq2Arrival' ? newProcess.bloq2Arrival = value : newProcess.bloq2Arrival = processF.bloq2Arrival;
        inputType == 'bloq2Duration' ? newProcess.bloq2Duration = value : newProcess.bloq2Duration = processF.bloq2Duration;

        setProcessF(newProcess);
    }
    
    const updateProcessG = (inputType, value) => {
        let newProcess = {pid: processG.pid, states: processG.states};
        inputType == 'arrival' ? newProcess.arrival = value : newProcess.arrival = processG.arrival;
        inputType == 'duration' ? newProcess.duration = value : newProcess.duration = processG.duration;
        inputType == 'bloq1Arrival' ? newProcess.bloq1Arrival = value : newProcess.bloq1Arrival = processG.bloq1Arrival;
        inputType == 'bloq1Duration' ? newProcess.bloq1Duration = value : newProcess.bloq1Duration = processG.bloq1Duration;
        inputType == 'bloq2Arrival' ? newProcess.bloq2Arrival = value : newProcess.bloq2Arrival = processG.bloq2Arrival;
        inputType == 'bloq2Duration' ? newProcess.bloq2Duration = value : newProcess.bloq2Duration = processG.bloq2Duration;

        setProcessG(newProcess);
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
                <tr className="border-t-2 border-darkGray text-center">
                    <td className="px-4 py-2 border-x-2 border-darkGray"> {processA.pid} </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processA.arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessA('arrival', parseInt(e.target.value))}/>
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processA.duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessA('duration', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processA.bloq1Arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessA('bloq1Arrival', parseInt(e.target.value))}/> 
                        </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processA.bloq1Duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessA('bloq1Duration', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processA.bloq2Arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessA('bloq2Arrival', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processA.bloq2Duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessA('bloq2Duration', parseInt(e.target.value))}/>
                    </td>
                </tr>  
                
                <tr className="border-t-2 border-darkGray text-center">
                    <td className="px-4 py-2 border-x-2 border-darkGray"> {processB.pid} </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processB.arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessB('arrival', parseInt(e.target.value))}/>
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processB.duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessB('duration', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processB.bloq1Arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessB('bloq1Arrival', parseInt(e.target.value))}/> 
                        </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processB.bloq1Duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessB('bloq1Duration', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processB.bloq2Arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessB('bloq2Arrival', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processB.bloq2Duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessB('bloq2Duration', parseInt(e.target.value))}/>
                    </td>
                </tr>  
                
                <tr className="border-t-2 border-darkGray text-center">
                    <td className="px-4 py-2 border-x-2 border-darkGray"> {processC.pid} </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processC.arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessC('arrival', parseInt(e.target.value))}/>
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processC.duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessC('duration', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processC.bloq1Arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessC('bloq1Arrival', parseInt(e.target.value))}/> 
                        </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processC.bloq1Duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessC('bloq1Duration', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processC.bloq2Arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessC('bloq2Arrival', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processC.bloq2Duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessC('bloq2Duration', parseInt(e.target.value))}/>
                    </td>
                </tr>  
                
                <tr className="border-t-2 border-darkGray text-center">
                    <td className="px-4 py-2 border-x-2 border-darkGray"> {processD.pid} </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processD.arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessD('arrival', parseInt(e.target.value))}/>
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processD.duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessD('duration', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processD.bloq1Arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessD('bloq1Arrival', parseInt(e.target.value))}/> 
                        </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processD.bloq1Duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessD('bloq1Duration', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processD.bloq2Arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessD('bloq2Arrival', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processD.bloq2Duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessD('bloq2Duration', parseInt(e.target.value))}/>
                    </td>
                </tr>  
                
                <tr className="border-t-2 border-darkGray text-center">
                    <td className="px-4 py-2 border-x-2 border-darkGray"> {processE.pid} </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processE.arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessE('arrival', parseInt(e.target.value))}/>
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processE.duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessE('duration', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processE.bloq1Arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessE('bloq1Arrival', parseInt(e.target.value))}/> 
                        </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processE.bloq1Duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessE('bloq1Duration', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processE.bloq2Arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessE('bloq2Arrival', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processE.bloq2Duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessE('bloq2Duration', parseInt(e.target.value))}/>
                    </td>
                </tr>  
                
                <tr className="border-t-2 border-darkGray text-center">
                    <td className="px-4 py-2 border-x-2 border-darkGray"> {processF.pid} </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processF.arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessF('arrival', parseInt(e.target.value))}/>
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processF.duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessF('duration', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processF.bloq1Arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessF('bloq1Arrival', parseInt(e.target.value))}/> 
                        </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processF.bloq1Duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessF('bloq1Duration', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processF.bloq2Arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessF('bloq2Arrival', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processF.bloq2Duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessF('bloq2Duration', parseInt(e.target.value))}/>
                    </td>
                </tr>  
                
                <tr className="border-t-2 border-darkGray text-center">
                    <td className="px-4 py-2 border-x-2 border-darkGray"> {processG.pid} </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processG.arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessG('arrival', parseInt(e.target.value))}/>
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processG.duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessG('duration', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processG.bloq1Arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessG('bloq1Arrival', parseInt(e.target.value))}/> 
                        </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processG.bloq1Duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessG('bloq1Duration', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processG.bloq2Arrival} className="w-16 text-center" 
                        onChange={(e) => updateProcessG('bloq2Arrival', parseInt(e.target.value))}/> 
                    </td>
                    <td className="px-4 py-2 border-x-2 border-darkGray"> 
                        <input type="number" min={0} value={processG.bloq2Duration} className="w-16 text-center" 
                        onChange={(e) => updateProcessG('bloq2Duration', parseInt(e.target.value))}/>
                    </td>
                </tr>  
            </tbody>
        </table>
    )
  }
  
  export default ProcessTable;