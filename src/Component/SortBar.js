import React from 'react'

const SortBar = ({data,setData}) => {
    // function that sorts by health
      const handleHealth = () => {
        const sortedHealth = [...data] // create a copy of array data
        sortedHealth.sort((a,b)=> a.health - b.health); //sort in ascending order
        setData(sortedHealth);
      }

      //sort by damage
       const handleDamage = () => {
        const sortedDamage = [...data];
        sortedDamage.sort((a,b) => b.damage - a.damage); //sort in descending order
        setData(sortedDamage);
       }
       
  return (
    <div style={{textAlign:"center"}}>
       <button type="button" className="btn btn-primary" onClick={ handleHealth} style={{marginTop:"30px", backgroundColor: "#c1c1c1", fontSize: "20px", padding: "6px"}}>Health</button>
       <button type="button" className="btn btn-primary" onClick={ handleDamage} style={{marginTop:"30px", marginInline:"20px", backgroundColor: "#c1c1c1", fontSize: "20px", padding: "6px"}}>Damage</button>
    </div>
  )
}

export default SortBar