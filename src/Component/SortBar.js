import React from 'react'

const SortBar = ({data,setData}) => {
    // function that sorts by health
      const handleHealth = () => {
        const sortedHealth = [...data] // create a copy of array data
        sortedHealth.sort((a,b)=> b.health - a.health); //sort in descending order
        setData(sortedHealth);
      }

      //sort by damage
       const handleDamage = () => {
        const sortedDamage = [...data];
        sortedDamage.sort((a,b) => b.damage - a.damage); //sort in descending order
       }
       
  return (
    <div>
        
    </div>
  )
}

export default SortBar