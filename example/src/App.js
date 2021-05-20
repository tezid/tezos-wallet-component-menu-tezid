import React, { useState } from 'react'
import { TezosWallet } from 'tezos-wallet-component'
import { TezosWalletMenuTezID } from 'tezos-wallet-component-menu-tezid'
import 'tezos-wallet-component/dist/index.css'
import 'tezos-wallet-component-menu-tezid/dist/index.css'
import './App.css'

const mockWallet = {
  address: 'tz1iAAJhH465Cf3BnsKQ744XHypQGY1v7Ps9',
  balance: 125
}

const App = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [wallet, setWallet] = useState(null)

  const handleConnect = () => {
    setWallet(mockWallet)
  }
  const handleDisconnect = () => {
    setWallet(null)
    setShowMenu(false)
  }

  return (
    <div className="App">
      <TezosWallet
        address={wallet?.address}
        balance={wallet?.balance}
        onConnectWallet={handleConnect}
        onDisconnectWallet={handleDisconnect}
        showMenu={showMenu}
        onToggleMenu={() => setShowMenu(!showMenu)}
      >
        <TezosWalletMenuTezID address={wallet?.address} network="mainnet" />
      </TezosWallet>
    </div>
  ) 
}

export default App
