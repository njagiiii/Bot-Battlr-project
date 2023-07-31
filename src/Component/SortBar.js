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
       <button type="button" className="btn btn-primary" onClick={ handleHealth} style={{marginTop:"30px"}}>Health</button>
       <button type="button" className="btn btn-primary" onClick={ handleDamage} style={{marginTop:"30px", marginInline:"20px"}}>Damage</button>
    </div>
  )
}

export default SortBar