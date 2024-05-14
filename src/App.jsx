import { act, useEffect, useState } from "react";
import ProcessTable from "./components/ProcessTable"
import Graphic from "./components/Graphic";

function App() {
  const [method, setMethod] = useState("fcfs");
  const [simulationStarted, setSimulationStarted] = useState(false);

  const [processA, setProcessA] = useState({
    pid: 'A',
    states: [], 
    arrival: 0,
    duration: 8,
    bloq1Arrival: 3,
    bloq1Duration: 4,
    bloq2Arrival: 7,
    bloq2Duration: 2
  });
  
  const [processB, setProcessB] = useState({
    pid: 'B',
    states: [],
    arrival: 1,
    duration: 3,
    bloq1Arrival: 2,
    bloq1Duration: 5,
    bloq2Arrival: "",
    bloq2Duration: ""
  });
  
  const [processC, setProcessC] = useState({
    pid: 'C',
    states: [],
    arrival: 3,
    duration: 12,
    bloq1Arrival: 1,
    bloq1Duration: 3,
    bloq2Arrival: 8,
    bloq2Duration: 1
  });
  
  const [processD, setProcessD] = useState({
    pid: 'D',
    states: [],
    arrival: 5,
    duration: 10,
    bloq1Arrival: 1,
    bloq1Duration: 4,
    bloq2Arrival: 2,
    bloq2Duration: 12
  });
  
  const [processE, setProcessE] = useState({
    pid: 'E',
    states: [],
    arrival: 9,
    duration: 11,
    bloq1Arrival: 4,
    bloq1Duration: 11,
    bloq2Arrival: "",
    bloq2Duration: ""
  });
  
  const [processF, setProcessF] = useState({
    pid: 'F',
    states: [],
    arrival: 12,
    duration: 9,
    bloq1Arrival: 5,
    bloq1Duration: 3,
    bloq2Arrival: 7,
    bloq2Duration: 4
  });
  
  const [processG, setProcessG] = useState({
    pid: 'G',
    states: [],
    arrival: 14,
    duration: 10,
    bloq1Arrival: "",
    bloq1Duration: "",
    bloq2Arrival: "",
    bloq2Duration: ""
  });

  useEffect(() => {
    if (simulationStarted) {
      setSimulationStarted(false);
    }
  }, [processA, processB, processC, processD, processE, processF, processG]);
  
  const startSimulation = () => {
    let newProcessA = processA;
    let newProcessB = processB;
    let newProcessC = processC;
    let newProcessD = processD;
    let newProcessE = processE;
    let newProcessF = processF;
    let newProcessG = processG;

    processA.states = [];
    processB.states = [];
    processC.states = [];
    processD.states = [];
    processE.states = [];
    processF.states = [];
    processG.states = [];
    
    newProcessA.states = processA.states;
    newProcessB.states = processB.states;
    newProcessC.states = processC.states;
    newProcessD.states = processD.states;
    newProcessE.states = processE.states;
    newProcessF.states = processF.states;
    newProcessG.states = processG.states;

    /*
      Estados:
      1 - No iniciado
      2 - En ejecución
      3 - Bloqueado
      4 - En espera
    */

    if(method == 'fcfs') {
      FCFS(newProcessA, newProcessB, newProcessC, newProcessD, newProcessE, newProcessF, newProcessG);
    }
  }

  const FCFS = (newProcessA, newProcessB, newProcessC, newProcessD, newProcessE, newProcessF, newProcessG) => {
    let stopSimulation = false;
    let i = 0;

    let actualStateA = 1;
    let inProgressACount = 0;
    let bloqACount1 = 0;
    let bloqACount2 = 0;

    let actualStateB = 1;
    let inProgressBCount = 0;
    let bloqBCount1 = 0;
    let bloqBCount2 = 0;

    let actualStateC = 1;
    let inProgressCCount = 0;
    let bloqCCount1 = 0;
    let bloqCCount2 = 0;

    let actualStateD = 1;
    let inProgressDCount = 0;
    let bloqDCount1 = 0;
    let bloqDCount2 = 0;

    let actualStateE = 1;
    let inProgressECount = 0;
    let bloqECount1 = 0;
    let bloqECount2 = 0;

    let actualStateF = 1;
    let inProgressFCount = 0;
    let bloqFCount1 = 0;
    let bloqFCount2 = 0;

    let actualStateG = 1;
    let inProgressGCount = 0;
    let bloqGCount1 = 0;
    let bloqGCount2 = 0;

    do {
      // Process A
      if(i >= processA.arrival) {
        if(inProgressACount == processA.duration) {
          actualStateA = 1;
        } else {
          if(inProgressACount < processA.bloq1Arrival) {
            if(actualStateB != 2 && actualStateC != 2 && actualStateD != 2 && actualStateE != 2 && actualStateF != 2 && actualStateG != 2) {
              actualStateA = 2;
              inProgressACount++;
            } else {
              actualStateA = 4;
            }
          } else if(bloqACount1 < processA.bloq1Duration) {
            actualStateA = 3;
            bloqACount1++;
          } else if(inProgressACount < processA.bloq2Arrival) {
            if(actualStateB != 2 && actualStateC != 2 && actualStateD != 2 && actualStateE != 2 && actualStateF != 2 && actualStateG != 2) {
              actualStateA = 2;
              inProgressACount++;
            } else {
              actualStateA = 4;
            }
          } else if(bloqACount2 < processA.bloq2Duration) {
            actualStateA = 3;
            bloqACount2++;
          } else {
            actualStateA = 2;
            inProgressACount++;
          }
        } 
      } else {
        actualStateA = 1;
      }

      newProcessA.states.push(actualStateA);
      
      // Process B
      if(i >= processB.arrival) {
        if(inProgressBCount == processB.duration) {
          actualStateB = 1;
        } else {
          if(inProgressBCount < processB.bloq1Arrival) {
            if(actualStateA != 2 && actualStateC != 2 && actualStateD != 2 && actualStateE != 2 && actualStateF != 2 && actualStateG != 2) {
              actualStateB = 2;
              inProgressBCount++;
            } else {
              actualStateB = 4;
            }
          } else if(bloqBCount1 < processB.bloq1Duration) {
            actualStateB = 3;
            bloqBCount1++;
          } else if(inProgressBCount < processB.bloq2Arrival) {
            if(actualStateA != 2 && actualStateC != 2 && actualStateD != 2 && actualStateE != 2 && actualStateF != 2 && actualStateG != 2) {
              actualStateB = 2;
              inProgressBCount++;
            } else {
              actualStateB = 4;
            }
          } else if(bloqBCount2 < processB.bloq2Duration) {
            actualStateB = 3;
            bloqBCount2++;
          } else {
            actualStateB = 2;
            inProgressBCount++;
          }
        } 
      } else {
        actualStateB = 1;
      }

      newProcessB.states.push(actualStateB);
      
      // Process C
      if(i >= processC.arrival) {
        if(inProgressCCount == processC.duration) {
          actualStateC = 1;
        } else {
          if(inProgressCCount < processC.bloq1Arrival) {
            if(actualStateA != 2 && actualStateB != 2 && actualStateD != 2 && actualStateE != 2 && actualStateF != 2 && actualStateG != 2) {
              actualStateC = 2;
              inProgressCCount++;
            } else {
              actualStateC = 4;
            }
          } else if(bloqCCount1 < processC.bloq1Duration) {
            actualStateC = 3;
            bloqCCount1++;
          } else if(inProgressCCount < processC.bloq2Arrival) {
            if(actualStateA != 2 && actualStateB != 2 && actualStateD != 2 && actualStateE != 2 && actualStateF != 2 && actualStateG != 2) {
              actualStateC = 2;
              inProgressCCount++;
            } else {
              actualStateC = 4;
            }
          } else if(bloqCCount2 < processC.bloq2Duration) {
            actualStateC = 3;
            bloqCCount2++;
          } else {
            actualStateC = 2;
            inProgressCCount++;
          }
        } 
      } else {
        actualStateC = 1;
      }

      newProcessC.states.push(actualStateC);
      
      // Process D
      if(i >= processD.arrival) {
        if(inProgressDCount == processD.duration) {
          actualStateD = 1;
        } else {
          if(inProgressDCount < processD.bloq1Arrival) {
            if(actualStateA != 2 && actualStateB != 2 && actualStateC != 2 && actualStateE != 2 && actualStateF != 2 && actualStateG != 2) {
              actualStateD = 2;
              inProgressDCount++;
            } else {
              actualStateD = 4;
            }
          } else if(bloqDCount1 < processD.bloq1Duration) {
            actualStateD = 3;
            bloqDCount1++;
          } else if(inProgressDCount < processD.bloq2Arrival) {
            if(actualStateA != 2 && actualStateB != 2 && actualStateC != 2 && actualStateE != 2 && actualStateF != 2 && actualStateG != 2) {
              actualStateD = 2;
              inProgressDCount++;
            } else {
              actualStateD = 4;
            }
          } else if(bloqDCount2 < processD.bloq2Duration) {
            actualStateD = 3;
            bloqDCount2++;
          } else {
            actualStateD = 2;
            inProgressDCount++;
          }
        } 
      } else {
        actualStateD = 1;
      }

      newProcessD.states.push(actualStateD);
      
      // Process E
      if(i >= processE.arrival) {
        if(inProgressECount == processE.duration) {
          actualStateE = 1;
        } else {
          if(inProgressECount < processE.bloq1Arrival) {
            if(actualStateA != 2 && actualStateB != 2 && actualStateC != 2 && actualStateD != 2 && actualStateF != 2 && actualStateG != 2) {
              actualStateE = 2;
              inProgressECount++;
            } else {
              actualStateE = 4;
            }
          } else if(bloqECount1 < processE.bloq1Duration) {
            actualStateE = 3;
            bloqECount1++;
          } else if(inProgressECount < processE.bloq2Arrival) {
            if(actualStateA != 2 && actualStateB != 2 && actualStateC != 2 && actualStateD != 2 && actualStateF != 2 && actualStateG != 2) {
              actualStateE = 2;
              inProgressECount++;
            } else {
              actualStateE = 4;
            }
          } else if(bloqECount2 < processE.bloq2Duration) {
            actualStateE = 3;
            bloqECount2++;
          } else {
            actualStateE = 2;
            inProgressECount++;
          }
        } 
      } else {
        actualStateE = 1;
      }

      newProcessE.states.push(actualStateE);
      
      // Process F
      if(i >= processF.arrival) {
        if(inProgressFCount == processF.duration) {
          actualStateF = 1;
        } else {
          if(inProgressFCount < processF.bloq1Arrival) {
            if(actualStateA != 2 && actualStateB != 2 && actualStateC != 2 && actualStateD != 2 && actualStateE != 2 && actualStateG != 2) {
              actualStateF = 2;
              inProgressFCount++;
            } else {
              actualStateF = 4;
            }
          } else if(bloqFCount1 < processF.bloq1Duration) {
            actualStateF = 3;
            bloqFCount1++;
          } else if(inProgressFCount < processF.bloq2Arrival) {
            if(actualStateA != 2 && actualStateB != 2 && actualStateC != 2 && actualStateD != 2 && actualStateE != 2 && actualStateG != 2) {
              actualStateF = 2;
              inProgressFCount++;
            } else {
              actualStateF = 4;
            }
          } else if(bloqFCount2 < processF.bloq2Duration) {
            actualStateF = 3;
            bloqFCount2++;
          } else {
            actualStateF = 2;
            inProgressFCount++;
          }
        } 
      } else {
        actualStateF = 1;
      }

      newProcessF.states.push(actualStateF);
      
      // Process G
      if(i >= processG.arrival) {
        if(inProgressGCount == processG.duration) {
          actualStateG = 1;
        } else {
          if(inProgressGCount < processG.bloq1Arrival) {
            if(actualStateA != 2 && actualStateB != 2 && actualStateC != 2 && actualStateD != 2 && actualStateE != 2 && actualStateF != 2) {
              actualStateG = 2;
              inProgressGCount++;
            } else {
              actualStateG = 4;
            }
          } else if(bloqGCount1 < processG.bloq1Duration) {
            actualStateG = 3;
            bloqGCount1++;
          } else if(inProgressGCount < processG.bloq2Arrival) {
            if(actualStateA != 2 && actualStateB != 2 && actualStateC != 2 && actualStateD != 2 && actualStateE != 2 && actualStateF != 2) {
              actualStateG = 2;
              inProgressGCount++;
            } else {
              actualStateG = 4;
            }
          } else if(bloqGCount2 < processG.bloq2Duration) {
            actualStateG = 3;
            bloqGCount2++;
          } else {
            actualStateG = 2;
            inProgressGCount++;
          }
        } 
      } else {
        actualStateG = 1;
      }

      newProcessG.states.push(actualStateG);

      if(inProgressACount == processA.bloq1Arrival || inProgressACount == processA.bloq2Arrival) actualStateA = 3;
      if(inProgressBCount == processB.bloq1Arrival || inProgressBCount == processB.bloq2Arrival) actualStateB = 3;
      if(inProgressCCount == processC.bloq1Arrival || inProgressCCount == processC.bloq2Arrival) actualStateC = 3;
      if(inProgressDCount == processD.bloq1Arrival || inProgressDCount == processD.bloq2Arrival) actualStateD = 3;
      if(inProgressECount == processE.bloq1Arrival || inProgressECount == processE.bloq2Arrival) actualStateE = 3;
      if(inProgressFCount == processF.bloq1Arrival || inProgressFCount == processF.bloq2Arrival) actualStateF = 3;
      if(inProgressGCount == processG.bloq1Arrival || inProgressGCount == processG.bloq2Arrival) actualStateG = 3;
      
      i++;
      
      if(i == 70) {
        stopSimulation = true;
      }
    } while(!stopSimulation);

    console.log(newProcessA.states)
    console.log(newProcessB.states)
    console.log(newProcessC.states)
    console.log(newProcessD.states)
    console.log(newProcessE.states)
    console.log(newProcessF.states)
    console.log(newProcessG.states)

    setProcessA(newProcessA);
    setProcessB(newProcessB);
    setProcessC(newProcessC);
    setProcessD(newProcessD);
    setProcessE(newProcessE);
    setProcessF(newProcessF);
    setProcessG(newProcessG);

    setSimulationStarted(true);
  }

  const createGraphic = () => {
    return (
      <div className="w-11/12 fixed bottom-10 left-8 overflow-x-auto">
        <Graphic processA={processA} processB={processB} processC={processC} processD={processD} processE={processE} processF={processF} processG={processG} />
      </div>
    )
  }
  
  return (
    <>
      <div className="fixed top-8 left-8">
        <ProcessTable processA={processA} setProcessA={setProcessA} processB={processB} setProcessB={setProcessB} processC={processC} setProcessC={setProcessC}
        processD={processD} setProcessD={setProcessD} processE={processE} setProcessE={setProcessE} processF={processF} setProcessF={setProcessF} 
        processG={processG} setProcessG={setProcessG} />
      </div>

      <div className="fixed top-96 left-8 mt-14 w-full animate-fade-down animate-duration-1000">
        <select className="w-1/6 py-1 px-2 bg-white border-2 border-darkGray shadow-lg" onChange={(e) => setMethod(e.target.value)}>
            <option value="fcfs"> FCFS </option>
            <option value="sfj"> SFJ </option>
            <option value="srtf"> SRTF</option>
            <option value="rr"> Round Robin </option>
        </select>
      
        <button className="w-56 ml-8 py-1.5 rounded-md shadow-lg text-white font-semibold bg-slate-600 hover:scale-105 hover:bg-slate-700 transition-colors"
        onClick={startSimulation}> Iniciar simulación </button>
      </div>
      
      {simulationStarted && (
        <div className="w-11/12 fixed bottom-10 left-8 overflow-x-auto">
          <Graphic processA={processA} processB={processB} processC={processC} processD={processD} processE={processE} processF={processF} processG={processG} />
        </div>
      )}
    </>
  )
}

export default App