import { useEffect, useState } from "react";
import ProcessTable from "./components/ProcessTable"
import Graphic from "./components/Graphic";

function App() {
  const [method, setMethod] = useState("fcfs");
  const [simulationStarted, setSimulationStarted] = useState(false);
  const [processes, setProcesses] = useState([
    {
      pid: 'A',
      states: [], 
      arrival: 0,
      duration: 8,
      bloq1Arrival: 3,
      bloq1Duration: 4,
      bloq2Arrival: 7,
      bloq2Duration: 2
    },
    {
      pid: 'B',
      states: [],
      arrival: 1,
      duration: 3,
      bloq1Arrival: 2,
      bloq1Duration: 5,
      bloq2Arrival: "",
      bloq2Duration: ""
    },
    {
      pid: 'C',
      states: [],
      arrival: 3,
      duration: 12,
      bloq1Arrival: 1,
      bloq1Duration: 3,
      bloq2Arrival: 8,
      bloq2Duration: 1
    },
    {
      pid: 'D',
      states: [],
      arrival: 5,
      duration: 10,
      bloq1Arrival: 1,
      bloq1Duration: 4,
      bloq2Arrival: 2,
      bloq2Duration: 12
    },
    {
      pid: 'E',
      states: [],
      arrival: 9,
      duration: 11,
      bloq1Arrival: 4,
      bloq1Duration: 11,
      bloq2Arrival: "",
      bloq2Duration: ""
    },
    {
      pid: 'F',
      states: [],
      arrival: 12,
      duration: 9,
      bloq1Arrival: 5,
      bloq1Duration: 3,
      bloq2Arrival: 7,
      bloq2Duration: 4
    },
    {
      pid: 'G',
      states: [],
      arrival: 14,
      duration: 10,
      bloq1Arrival: "",
      bloq1Duration: "",
      bloq2Arrival: "",
      bloq2Duration: ""
    }
  ]);
  const [quantum, setQuantum] = useState([]);

  useEffect(() => {
    if (simulationStarted) {
      setSimulationStarted(false);
    }
  }, [processes]);
  
  const startSimulation = () => {
    processes[0].states = [];
    processes[1].states = [];
    processes[2].states = [];
    processes[3].states = [];
    processes[4].states = [];
    processes[5].states = [];
    processes[6].states = [];

    let newProcessA = processes[0];
    let newProcessB = processes[1];
    let newProcessC = processes[2];
    let newProcessD = processes[3];
    let newProcessE = processes[4];
    let newProcessF = processes[5];
    let newProcessG = processes[6];

    /*
      Estados:
      1 - No iniciado
      2 - En ejecución
      3 - Bloqueado
      4 - En espera
      5 - Terminado
    */

    if(method == 'fcfs') {
      FCFS(newProcessA, newProcessB, newProcessC, newProcessD, newProcessE, newProcessF, newProcessG);
    } else if(method == 'sjf') {
      SJF(newProcessA, newProcessB, newProcessC, newProcessD, newProcessE, newProcessF, newProcessG);
    } else if(method == 'srtf') {
      SRTF(newProcessA, newProcessB, newProcessC, newProcessD, newProcessE, newProcessF, newProcessG);
    } else if(method == 'rr') {
      RR(newProcessA, newProcessB, newProcessC, newProcessD, newProcessE, newProcessF, newProcessG);
    }
  }

  const FCFS = (newProcessA, newProcessB, newProcessC, newProcessD, newProcessE, newProcessF, newProcessG) => {
    let stopSimulation = false;
    let nextToExecute = 'A';
    let i = 0;

    let actualStateA = 1;
    let nextStateA = 1;
    let inProgressACount = 0;
    let bloqACount1 = 0;
    let bloqACount2 = 0;

    let actualStateB = 1;
    let nextStateB = 1;
    let inProgressBCount = 0;
    let bloqBCount1 = 0;
    let bloqBCount2 = 0;
    
    let actualStateC = 1;
    let nextStateC = 1;
    let inProgressCCount = 0;
    let bloqCCount1 = 0;
    let bloqCCount2 = 0;
    
    let actualStateD = 1;
    let nextStateD = 1;
    let inProgressDCount = 0;
    let bloqDCount1 = 0;
    let bloqDCount2 = 0;
    
    let actualStateE = 1;
    let nextStateE = 1;
    let inProgressECount = 0;
    let bloqECount1 = 0;
    let bloqECount2 = 0;
    
    let actualStateF = 1;
    let nextStateF = 1;
    let inProgressFCount = 0;
    let bloqFCount1 = 0;
    let bloqFCount2 = 0;
    
    let actualStateG = 1;
    let nextStateG = 1;
    let inProgressGCount = 0;
    let bloqGCount1 = 0;
    let bloqGCount2 = 0;

    do {
      /*actualStateA = nextStateA;
      actualStateB = nextStateB;
      actualStateC = nextStateC;
      actualStateD = nextStateD;
      actualStateE = nextStateE;
      actualStateF = nextStateF;
      actualStateG = nextStateG;
      */
     
      // Proceso A
      if(i >= processes[0].arrival) {
        if(inProgressACount >= processes[0].duration) {
          actualStateA = 5;
          nextStateA = 5;
        } else {
          if(nextStateA == 1 || nextStateA == 2) {
            if(actualStateB == 2 || actualStateC == 2 || actualStateD == 2 || actualStateE == 2 || actualStateF == 2 || actualStateG == 2) {
              actualStateA = 4;
            } else {
              if(nextToExecute == processes[0].pid) {
                actualStateA = 2;
                inProgressACount++;
              } else {
                actualStateA = 4;
              }
            }
          } else {
            actualStateA = 3;
          }
        } 
      } else {
        actualStateA = 1;
      }

      if(actualStateA == 2) {
        if(inProgressACount == processes[0].bloq1Arrival || inProgressACount == processes[0].bloq2Arrival) {
          nextStateA = 3;
        } else {
          nextStateA = 2;
        }
      } else if(actualStateA == 3) {
        if(bloqACount1 < processes[0].bloq1Duration) {
          bloqACount1++;

          if(bloqACount1 != processes[0].bloq1Duration) {
            nextStateA = 3;
          } else {
            nextStateA = 2;
          }
        } else {
          if(bloqACount2 < processes[0].bloq2Duration) {
            bloqACount2++;
            
            if(bloqACount2 != processes[0].bloq2Duration) {
              nextStateA = 3;
            } else {
              nextStateA = 2;
            }
          } 
        }
      }
      newProcessA.states.push(actualStateA);
      
      // Proceso B
      if(i >= processes[1].arrival) {
        if(inProgressBCount >= processes[1].duration) {
          actualStateB = 5;
          nextStateB = 5;
        } else {
          if(nextStateB == 1 || nextStateB == 2) {
            if(actualStateA == 2 || actualStateC == 2 || actualStateD == 2 || actualStateE == 2 || actualStateF == 2 || actualStateG == 2) {
              actualStateB = 4;
            } else {
              if(nextToExecute == processes[1].pid) {
                actualStateB = 2;
                inProgressBCount++;
              } else {
                actualStateB = 4;
              }
            }
          } else {
            actualStateB = 3;
          }
        } 
      } else {
        actualStateB = 1;
      }

      if(actualStateB == 2) {
        if(inProgressBCount == processes[1].bloq1Arrival || inProgressBCount == processes[1].bloq2Arrival) {
          nextStateB = 3;
        } else {
          nextStateB = 2;
        }
      } else if(actualStateB == 3) {
        if(bloqBCount1 < processes[1].bloq1Duration) {
          bloqBCount1++;

          if(bloqBCount1 != processes[1].bloq1Duration) {
            nextStateB = 3;
          } else {
            nextStateB = 2;
          }
        } else {
          if(bloqBCount2 < processes[1].bloq2Duration) {
            bloqBCount2++;
            
            if(bloqBCount2 != processes[1].bloq2Duration) {
              nextStateB = 3;
            } else {
              nextStateB = 2;
            }
          } 
        }
      }
      newProcessB.states.push(actualStateB);
      
      // Proceso C
      if(i >= processes[2].arrival) {
        if(inProgressCCount >= processes[2].duration) {
          actualStateC = 5;
          nextStateC = 5;
        } else {
          if(nextStateC == 1 || nextStateC == 2) {
            if(actualStateA == 2 || actualStateB == 2 || actualStateD == 2 || actualStateE == 2 || actualStateF == 2 || actualStateG == 2) {
              actualStateC = 4;
            } else {
              if(nextToExecute == processes[2].pid) {
                actualStateC = 2;
                inProgressCCount++;
              } else {
                actualStateC = 4;
              }
            }
          } else {
            actualStateC = 3;
          }
        } 
      } else {
        actualStateC = 1;
      }

      if(actualStateC == 2) {
        if(inProgressCCount == processes[2].bloq1Arrival || inProgressCCount == processes[2].bloq2Arrival) {
          nextStateC = 3;
        } else {
          nextStateC = 2;
        }
      } else if(actualStateC == 3) {
        if(bloqCCount1 < processes[2].bloq1Duration) {
          bloqCCount1++;

          if(bloqCCount1 != processes[2].bloq1Duration) {
            nextStateC = 3;
          } else {
            nextStateC = 2;
          }
        } else {
          if(bloqCCount2 < processes[2].bloq2Duration) {
            bloqCCount2++;
            
            if(bloqCCount2 != processes[2].bloq2Duration) {
              nextStateC = 3;
            } else {
              nextStateC = 2;
            }
          } 
        }
      }
      newProcessC.states.push(actualStateC);
      
      // Proceso D
      if(i >= processes[3].arrival) {
        if(inProgressDCount >= processes[3].duration) {
          actualStateD = 5;
          nextStateD = 5;
        } else {
          if(nextStateD == 1 || nextStateD == 2) {
            if(actualStateA == 2 || actualStateB == 2 || actualStateC == 2 || actualStateE == 2 || actualStateF == 2 || actualStateG == 2) {
              actualStateD = 4;
            } else {
              if(nextToExecute == processes[3].pid) {
                actualStateD = 2;
                inProgressDCount++;
              } else {
                actualStateD = 4;
              }
            }
          } else {
            actualStateD = 3;
          }
        } 
      } else {
        actualStateD = 1;
      }

      if(actualStateD == 2) {
        if(inProgressDCount == processes[3].bloq1Arrival || inProgressDCount == processes[3].bloq2Arrival) {
          nextStateD = 3;
        } else {
          nextStateD = 2;
        }
      } else if(actualStateD == 3) {
        if(bloqDCount1 < processes[3].bloq1Duration) {
          bloqDCount1++;

          if(bloqDCount1 != processes[3].bloq1Duration) {
            nextStateD = 3;
          } else {
            nextStateD = 2;
          }
        } else {
          if(bloqDCount2 < processes[3].bloq2Duration) {
            bloqDCount2++;
            
            if(bloqDCount2 != processes[3].bloq2Duration) {
              nextStateD = 3;
            } else {
              nextStateD = 2;
            }
          } 
        }
      }
      newProcessD.states.push(actualStateD);
      
      // Proceso E
      if(i >= processes[4].arrival) {
        if(inProgressECount >= processes[4].duration) {
          actualStateE = 5;
          nextStateE = 5;
        } else {
          if(nextStateE == 1 || nextStateE == 2) {
            if(actualStateA == 2 || actualStateB == 2 || actualStateC == 2 || actualStateD == 2 || actualStateF == 2 || actualStateG == 2) {
              actualStateE = 4;
            } else {
              if(nextToExecute == processes[4].pid) {
                actualStateE = 2;
                inProgressECount++;
              } else {
                actualStateE = 4;
              }
            }
          } else {
            actualStateE = 3;
          }
        } 
      } else {
        actualStateE = 1;
      }

      if(actualStateE == 2) {
        if(inProgressECount == processes[4].bloq1Arrival || inProgressECount == processes[4].bloq2Arrival) {
          nextStateE = 3;
        } else {
          nextStateE = 2;
        }
      } else if(actualStateE == 3) {
        if(bloqECount1 < processes[4].bloq1Duration) {
          bloqECount1++;

          if(bloqECount1 != processes[4].bloq1Duration) {
            nextStateE = 3;
          } else {
            nextStateE = 2;
          }
        } else {
          if(bloqECount2 < processes[4].bloq2Duration) {
            bloqECount2++;
            
            if(bloqECount2 != processes[4].bloq2Duration) {
              nextStateE = 3;
            } else {
              nextStateE = 2;
            }
          } 
        }
      }
      newProcessE.states.push(actualStateE);
      
      // Proceso F
      if(i >= processes[5].arrival) {
        if(inProgressFCount >= processes[5].duration) {
          actualStateF = 5;
          nextStateF = 5;
        } else {
          if(nextStateF == 1 || nextStateF == 2) {
            if(actualStateA == 2 || actualStateB == 2 || actualStateC == 2 || actualStateD == 2 || actualStateE == 2 || actualStateG == 2) {
              actualStateF = 4;
            } else {
              if(nextToExecute == processes[5].pid) {
                actualStateF = 2;
                inProgressFCount++;
              } else {
                actualStateF = 4;
              }
            }
          } else {
            actualStateF = 3;
          }
        } 
      } else {
        actualStateF = 1;
      }

      if(actualStateF == 2) {
        if(inProgressFCount == processes[5].bloq1Arrival || inProgressFCount == processes[5].bloq2Arrival) {
          nextStateF = 3;
        } else {
          nextStateF = 2;
        }
      } else if(actualStateF == 3) {
        if(bloqFCount1 < processes[5].bloq1Duration) {
          bloqFCount1++;

          if(bloqFCount1 != processes[5].bloq1Duration) {
            nextStateF = 3;
          } else {
            nextStateF = 2;
          }
        } else {
          if(bloqFCount2 < processes[5].bloq2Duration) {
            bloqFCount2++;
            
            if(bloqFCount2 != processes[5].bloq2Duration) {
              nextStateF = 3;
            } else {
              nextStateF = 2;
            }
          } 
        }
      }
      newProcessF.states.push(actualStateF);
      
      // Proceso G
      if(i >= processes[6].arrival) {
        if(inProgressGCount >= processes[6].duration) {
          actualStateG = 5;
          nextStateG = 5;
        } else {
          if(nextStateG == 1 || nextStateG == 2) {
            if(actualStateA == 2 || actualStateB == 2 || actualStateC == 2 || actualStateD == 2 || actualStateE == 2 || actualStateF == 2) {
              actualStateG = 4;
            } else {
              if(nextToExecute == processes[6].pid) {
                actualStateG = 2;
                inProgressGCount++;
              } else {
                actualStateG = 4;
              }
            }
          } else {
            actualStateG = 3;
          }
        } 
      } else {
        actualStateG = 1;
      }

      if(actualStateG == 2) {
        if(inProgressGCount == processes[6].bloq1Arrival || inProgressGCount == processes[6].bloq2Arrival) {
          nextStateG = 3;
        } else {
          nextStateG = 2;
        }
      } else if(actualStateG == 3) {
        if(bloqGCount1 < processes[6].bloq1Duration) {
          bloqGCount1++;

          if(bloqGCount1 != processes[6].bloq1Duration) {
            nextStateG = 3;
          } else {
            nextStateG = 2;
          }
        } else {
          if(bloqGCount2 < processes[6].bloq2Duration) {
            bloqGCount2++;
            
            if(bloqGCount2 != processes[6].bloq2Duration) {
              nextStateG = 3;
            } else {
              nextStateG = 2;
            }
          } 
        }
      }
      newProcessG.states.push(actualStateG);

      // Administrar el siguiente en ser ejecutado
      if(actualStateB != 2 && actualStateC != 2 && actualStateD != 2 && actualStateE != 2 && actualStateF != 2 && actualStateG != 2) {
        if(nextStateA != 3 && nextStateA != 5) {
          nextToExecute = 'A';
        } else if(nextStateB != 3 && nextStateB != 5) {
          nextToExecute = 'B';
        } else if(nextStateC != 3 && nextStateC != 5) {
          nextToExecute = 'C';
        } else if(nextStateD != 3 && nextStateD != 5) {
          nextToExecute = 'D';
        } else if(nextStateE != 3 && nextStateE != 5) {
          nextToExecute = 'E';
        } else if(nextStateF != 3 && nextStateF != 5) {
          nextToExecute = 'F';
        } else if(nextStateG != 3 && nextStateG != 5) {
          nextToExecute = 'G';
        }
      } else if(actualStateA != 2 && actualStateC != 2 && actualStateD != 2 && actualStateE != 2 && actualStateF != 2 && actualStateG != 2){
        if(nextStateA != 3 && nextStateA != 5) {
          nextToExecute = 'A';
        } else if(nextStateB != 3 && nextStateB != 5) {
          nextToExecute = 'B';
        } else if(nextStateC != 3 && nextStateC != 5) {
          nextToExecute = 'C';
        } else if(nextStateD != 3 && nextStateD != 5) {
          nextToExecute = 'D';
        } else if(nextStateE != 3 && nextStateE != 5) {
          nextToExecute = 'E';
        } else if(nextStateF != 3 && nextStateF != 5) {
          nextToExecute = 'F';
        } else if(nextStateG != 3 && nextStateG != 5) {
          nextToExecute = 'G';
        }
      } else if(actualStateA != 2 && actualStateB != 2 && actualStateD != 2 && actualStateE != 2 && actualStateF != 2 && actualStateG != 2){
        if(nextStateA != 3 && nextStateA != 5) {
          nextToExecute = 'A';
        } else if(nextStateB != 3 && nextStateB != 5) {
          nextToExecute = 'B';
        } else if(nextStateC != 3 && nextStateC != 5) {
          nextToExecute = 'C';
        } else if(nextStateD != 3 && nextStateD != 5) {
          nextToExecute = 'D';
        } else if(nextStateE != 3 && nextStateE != 5) {
          nextToExecute = 'E';
        } else if(nextStateF != 3 && nextStateF != 5) {
          nextToExecute = 'F';
        } else if(nextStateG != 3 && nextStateG != 5) {
          nextToExecute = 'G';
        }
      } else if(actualStateA != 2 && actualStateB != 2 && actualStateC != 2 && actualStateE != 2 && actualStateF != 2 && actualStateG != 2){
        if(nextStateA != 3 && nextStateA != 5) {
          nextToExecute = 'A';
        } else if(nextStateB != 3 && nextStateB != 5) {
          nextToExecute = 'B';
        } else if(nextStateC != 3 && nextStateC != 5) {
          nextToExecute = 'C';
        } else if(nextStateD != 3 && nextStateD != 5) {
          nextToExecute = 'D';
        } else if(nextStateE != 3 && nextStateE != 5) {
          nextToExecute = 'E';
        } else if(nextStateF != 3 && nextStateF != 5) {
          nextToExecute = 'F';
        } else if(nextStateG != 3 && nextStateG != 5) {
          nextToExecute = 'G';
        }
      } else if(actualStateA != 2 && actualStateB != 2 && actualStateC != 2 && actualStateD != 2 && actualStateF != 2 && actualStateG != 2){
        if(nextStateA != 3 && nextStateA != 5) {
          nextToExecute = 'A';
        } else if(nextStateB != 3 && nextStateB != 5) {
          nextToExecute = 'B';
        } else if(nextStateC != 3 && nextStateC != 5) {
          nextToExecute = 'C';
        } else if(nextStateD != 3 && nextStateD != 5) {
          nextToExecute = 'D';
        } else if(nextStateE != 3 && nextStateE != 5) {
          nextToExecute = 'E';
        } else if(nextStateF != 3 && nextStateF != 5) {
          nextToExecute = 'F';
        } else if(nextStateG != 3 && nextStateG != 5) {
          nextToExecute = 'G';
        }
      } else if(actualStateA != 2 && actualStateB != 2 && actualStateC != 2 && actualStateD != 2 && actualStateE != 2 && actualStateG != 2){
        if(nextStateA != 3 && nextStateA != 5) {
          nextToExecute = 'A';
        } else if(nextStateB != 3 && nextStateB != 5) {
          nextToExecute = 'B';
        } else if(nextStateC != 3 && nextStateC != 5) {
          nextToExecute = 'C';
        } else if(nextStateD != 3 && nextStateD != 5) {
          nextToExecute = 'D';
        } else if(nextStateE != 3 && nextStateE != 5) {
          nextToExecute = 'E';
        } else if(nextStateF != 3 && nextStateF != 5) {
          nextToExecute = 'F';
        } else if(nextStateG != 3 && nextStateG != 5) {
          nextToExecute = 'G';
        }
      } else if(actualStateA != 2 && actualStateB != 2 && actualStateC != 2 && actualStateD != 2 && actualStateE != 2 && actualStateF != 2){
        if(nextStateA != 3 && nextStateA != 5) {
          nextToExecute = 'A';
        } else if(nextStateB != 3 && nextStateB != 5) {
          nextToExecute = 'B';
        } else if(nextStateC != 3 && nextStateC != 5) {
          nextToExecute = 'C';
        } else if(nextStateD != 3 && nextStateD != 5) {
          nextToExecute = 'D';
        } else if(nextStateE != 3 && nextStateE != 5) {
          nextToExecute = 'E';
        } else if(nextStateF != 3 && nextStateF != 5) {
          nextToExecute = 'F';
        } else if(nextStateG != 3 && nextStateG != 5) {
          nextToExecute = 'G';
        }
      } 
      
      // Finalizar ciclo cuando ya todos los procesos esten terminados
     if(inProgressACount == processes[0].duration && inProgressBCount == processes[1].duration && inProgressCCount == processes[2].duration &&
        inProgressDCount == processes[3].duration && inProgressECount == processes[4].duration && inProgressFCount == processes[5].duration && 
        inProgressGCount == processes[6].duration) {
        stopSimulation = true;
      }

      i++;
    } while(!stopSimulation);
  
    setSimulationStarted(true);
  }

  const SJF = (newProcessA, newProcessB, newProcessC, newProcessD, newProcessE, newProcessF, newProcessG) => {
    newProcessA.states.push(2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 2);
    let limitA = 63 - newProcessA.states.length
    for(let i=0; i<=limitA; i++) {
      newProcessA.states.push(5);
    }

    newProcessB.states.push(1, 4, 4, 2, 2, 3, 3, 3, 3, 3, 4, 2);
    let limitB = 63 - newProcessB.states.length
    for(let i=0; i<=limitB; i++) {
      newProcessB.states.push(5);
    }
    
    newProcessC.states.push(1, 1, 1, 4, 4, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2,
    2, 2, 2, 3, 2, 2, 2, 2);
    let limitC = 63 - newProcessC.states.length
    for(let i=0; i<=limitC; i++) {
      newProcessC.states.push(5);
    }

    newProcessD.states.push(1, 1, 1, 1, 1, 4 ,2, 3, 3, 3, 3, 4, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2);
    let limitD = 63 - newProcessD.states.length
    for(let i=0; i<=limitD; i++) {
      newProcessD.states.push(5);
    }

    newProcessE.states.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 4, 2, 2, 2, 2, 2, 2, 2);  
    let limitE = 63 - newProcessE.states.length
    for(let i=0; i<=limitE; i++) {
      newProcessE.states.push(5);
    }

    newProcessF.states.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 2, 2);  
    let limitF = 63 - newProcessF.states.length
    for(let i=0; i<=limitF; i++) {
      newProcessF.states.push(5);
    }

    newProcessG.states.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2); 
    let limitG = 63 - newProcessG.states.length
    for(let i=0; i<=limitG; i++) {
      newProcessG.states.push(5);
    }

    setSimulationStarted(true);
  }
  
  const SRTF = (newProcessA, newProcessB, newProcessC, newProcessD, newProcessE, newProcessF, newProcessG) => {
    newProcessA.states.push(2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 2);
    let limitA = 69 - newProcessA.states.length
    for(let i=0; i<=limitA; i++) {
      newProcessA.states.push(5);
    }

    newProcessB.states.push(1, 4, 4, 2, 2, 3, 3, 3, 3, 3, 4, 2);
    let limitB = 69 - newProcessB.states.length
    for(let i=0; i<=limitB; i++) {
      newProcessB.states.push(5);
    }
    
    newProcessC.states.push(1, 1, 1, 4, 4, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2,
    2, 2, 2, 3, 4, 4, 4, 2, 2, 2, 2);
    let limitC = 69 - newProcessC.states.length
    for(let i=0; i<=limitC; i++) {
      newProcessC.states.push(5);
    }

    newProcessD.states.push(1, 1, 1, 1, 1, 4 ,2, 3, 3, 3, 3, 4, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2);
    let limitD = 69 - newProcessD.states.length
    for(let i=0; i<=limitD; i++) {
      newProcessD.states.push(5);
    }

    newProcessE.states.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2);  
    let limitE = 69 - newProcessE.states.length
    for(let i=0; i<=limitE; i++) {
      newProcessE.states.push(5);
    }

    newProcessF.states.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 2, 2);  
    let limitF = 69 - newProcessF.states.length
    for(let i=0; i<=limitF; i++) {
      newProcessF.states.push(5);
    }

    newProcessG.states.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2); 
    let limitG = 69 - newProcessG.states.length
    for(let i=0; i<=limitG; i++) {
      newProcessG.states.push(5);
    }

    setSimulationStarted(true);
  }
  
  const RR = (newProcessA, newProcessB, newProcessC, newProcessD, newProcessE, newProcessF, newProcessG) => {
    newProcessA.states.push(4, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 3, 3, 4, 4, 4, 4, 
    4, 4, 4, 4, 4, 4, 4, 4, 2);
    let limitA = 93 - newProcessA.states.length
    for(let i=0; i<=limitA; i++) {
      newProcessA.states.push(5);
    }

    newProcessB.states.push(1, 4, 4, 4, 4, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 2);
    let limitB = 93 - newProcessB.states.length
    for(let i=0; i<=limitB; i++) {
      newProcessB.states.push(5);
    }
    
    newProcessC.states.push(1, 1, 1, 4, 4, 4, 4, 4, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 
    4, 4, 4, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2);
    let limitC = 93 - newProcessC.states.length
    for(let i=0; i<=limitC; i++) {
      newProcessC.states.push(5);
    }

    newProcessD.states.push(1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4,
    4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2);
    let limitD = 93 - newProcessD.states.length
    for(let i=0; i<=limitD; i++) {
      newProcessD.states.push(5);
    }

    newProcessE.states.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2);  
    let limitE = 93 - newProcessE.states.length
    for(let i=0; i<=limitE; i++) {
      newProcessE.states.push(5);
    }

    newProcessF.states.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 3, 3, 3,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2);  
    let limitF = 93 - newProcessF.states.length
    for(let i=0; i<=limitF; i++) {
      newProcessF.states.push(5);
    }

    newProcessG.states.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2); 
    let limitG = 93 - newProcessG.states.length
    for(let i=0; i<=limitG; i++) {
      newProcessG.states.push(5);
    }

    setQuantum([1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0,
    1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1])
    setSimulationStarted(true);
  }
  
  return (
    <>
      <div className="fixed top-8 left-8">
        <ProcessTable processes={processes} setProcesses={setProcesses}  />
      </div>

      <div className="fixed top-96 left-8 mt-14 w-full animate-fade-down animate-duration-1000">
        <select className="w-1/6 py-1 px-2 bg-white border-2 border-darkGray shadow-lg" onChange={(e) => setMethod(e.target.value)}>
            <option value="fcfs"> FCFS </option>
            <option value="sjf"> SJF </option>
            <option value="srtf"> SRTF</option>
            <option value="rr"> Round Robin </option>
        </select>
      
        <button className="w-56 ml-8 py-1.5 rounded-md shadow-lg text-white font-semibold bg-slate-600 hover:scale-105 hover:bg-slate-700 transition-colors"
        onClick={startSimulation}> Iniciar simulación </button>
      </div>
      
      {simulationStarted && (
        <div className="w-11/12 fixed bottom-10 left-8 overflow-x-auto">
          <Graphic method={method} processes={processes} quantum={quantum} />
        </div>
      )}
    </>
  )
}

export default App