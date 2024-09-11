let todo=[];
let req=prompt("Enter your request:");
while(true)
    {
        if(req=="quit")
            {
                console.log("quitting app");
                break;
            }
            if(req=="list")
                {
                    console.log("---------");
                    for(let i=0;i<todo.length;i++)
                        {
                            console.log(i,todo[i]);
                        }
                        console.log("------");
                }
                else if(req=="add")
                    {
                      let task=  prompt("plese inter the task you want to add");
                   todo.push(task);
                   console.log("task added");
                   
                    }
                    else if(req=="delete")
                        {
                            let idx=prompt("please enter tha task index");
                            todo.splice(idx,1);
                            console.log("task deleted");
                        }
                        else{
                            console.log("wrong requist:");
                        }
                    req=prompt("Enter your request:");     
                    
    }