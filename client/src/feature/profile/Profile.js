import React from 'react'
import Container from '../../component/Container'
import InlineEdit from '../../component/InlineEdit'

const Profile = () => {

  const obJectProfile = ()=>{
    const result = JSON.parse(localStorage.getItem("user")) 
    return result
  }
  console.log(Object.keys(obJectProfile()))
  return (
    <Container>
      <div style={{ fontSize: '1.8rem', margin: '0 auto' }}>
        <h1>Profile</h1>
        <div style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '1em', paddingBlock:'.5em', flexWrap:'wrap' }}>
          <div style={{ width: '5em', height: '5em', background: 'gray', borderRadius: '50%', overflow:'hidden' }}>
            <img src={obJectProfile()["photoURL"]} style={{width:'100%'}} alt="avatar" />
          </div>
          <h2>{obJectProfile()["displayName"]}</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5em' }}>
          {Object.keys(obJectProfile()).map((key,index)=>{
            return(
              <InlineEdit key={index} keyName={key} value={obJectProfile()[key]} />
            )
          })}
        </div>
      </div>
    </Container>
  )
}

export default Profile
