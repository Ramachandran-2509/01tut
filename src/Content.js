import {useState,useEffect} from 'react'

const Content =() =>{
    const[name, setName]= useState('Ram');
    const[color, setColor]= useState("")
    const[number, setNumber]=useState(0);

    const handleNameChange =()=>{
    
        const names=["Ram", "RaFi", "joseph", "mani"]
        const init= Math.floor(Math.random()*4);
          // return names(init) 
        setName(names[init])
      }

      const click = ()=>{
        var colors=['red', 'green', 'blue', 'orange', 'yellow']
        const inits= Math.floor(Math.random()*5);
        setColor(colors[inits]);
      }

      const click1=()=>{
        setNumber((prevSate)=>prevSate+1);
      }

      const handleClickAsync = () => {
        setTimeout(() => {
          setNumber((prevSate) => prevSate + 1);
        }, 4000);
      };

        useEffect(()=>{
            document.body.style.backgroundColor = color;
      },[color])
    //   const handleClick = ()=>{
    //     console.log("you will achieve your goal definitely so be patient ")
    //   }

    //   const handleClick1 = (name)=>{
    //     console.log(`${name} don't worry everything will be change`)
    //   }

    //   const handleClick2 = (e)=>{
    //     console.log(e.target.innerText)
    //   }

    return(    
    <main>
        <p style={{fontSize:"29px", color:"orange"}}>Hello {name}</p>
        <button onClick={handleNameChange}style={{margin:"10px", padding:"10px", color:"orangered", fontSize:"28px"}}>Click It</button>
        <h1>Number: {number}</h1>
        <button onClick={click1} style={{margin:"10px", padding:"10px",color:"orangered", fontSize:"28px"}}>Click It</button>
        <button onClick={handleClickAsync} style={{marginTop:"5px", padding:"10px",color:"orangered", fontSize:"28px"}}>Click It</button>
        <button onClick={()=>click("#eb3d4e")} style={{marginTop:"65px", padding:"10px",color:"orange", fontSize:"28px", cursor:"pointer"}}>Change color</button>
    </main>
    )
}

export default Content;