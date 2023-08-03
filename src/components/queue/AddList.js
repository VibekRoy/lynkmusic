import React from 'react'
import './list.css'
import apiClient from '../../spotify'
function AddList({name,id,track_id,image}) {

    
  function addTrack () {
    apiClient.post(`/playlists/${id}/tracks`,{
        'uris':[
            `spotify:track:${track_id}`
        ]
    }).then(
        alert('Added to playlist')
    )
  }

  return (
    <div className='listlist' onClick={addTrack}>
      <img src={image} alt="pimage" className='pimage'/>
      {name}
    
    </div>

  )
}

export default AddList