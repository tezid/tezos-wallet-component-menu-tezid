import React, { useState, useEffect } from 'react'
import { TezIDProof } from '@tezid/proofs-component'
import '@tezid/proofs-component/dist/index.css'
import './index.css'

export const TezosWalletMenuTezID = (props) => {
  const [proofs, setProofs] = useState([])
 
  useEffect(() => {
    if (!props.address || !props.network) return
    const fetchProofs = async () => {
      try {
        const res = await fetch(`https://tezid.net/api/${props.network}/getproofs/${props.address}`)
        const _proofs = await res.json()
        setProofs(_proofs.filter(p => p.verified))
      } catch(e) {
        console.error(e)
      }
    }
    fetchProofs()
  }, [props.address, props.network, setProofs])

  if (!props.address) return null
 
  const proofItems = proofs.map(p => 
    <TezIDProof 
      key={p.id} 
      proof={p} 
    />
  )

  return (
    <div className="TezosWalletMenuTezID" onClick={props?.onClick}>
      { proofs.length > 0 &&
        <React.Fragment>
        <div className="TezosWalletMenuTezIDTop">You registered <a target="_blank" rel="noreferrer" href="https://tezid.net">TezID</a> proofs:</div>
        <div className="TezosWalletMenuTezIDProofs">
          {proofItems}
        </div>
        </React.Fragment>
      }
      { proofs.length === 0 &&
        <div className="TezosWalletMenuTezIDNoProofs">
          <div className="label">
            You have no registered TezID proofs. Register <a target="_blank" rel="noreferrer" href="https://tezid.net">here</a>.
          </div>
          <div className="icon">
            <img src="https://tezid.net/logo-notext.svg" alt="tezidlogo" />
          </div>
        </div>
      }
    </div>
  )
}
