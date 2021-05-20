# @tezid/tezos-wallet-component-menu-tezid

> TezID Menu for Tezos Wallet Component

[![NPM](https://img.shields.io/npm/v/tezos-wallet-component-menu-tezid.svg)](https://www.npmjs.com/package/tezos-wallet-component-menu-tezid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

TezID Menu Item for [Tezos Wallet Component](https://github.com/asbjornenge/tezos-wallet-component). It will query the TezID API for proofs registered to the passed address & network. It will display these items as a menu item under the Tezos Wallet.

See screenshot below.

## Install

```bash
npm install --save @tezid/tezos-wallet-component-menu-tezid
```

## Usage

```jsx
import { TezosWallet } from 'tezos-wallet-component'
import { TezosWalletMenuTezID } from '@tezid/tezos-wallet-component-menu-tezid'
import 'tezos-wallet-component/dist/index.css'
import '@tezid/tezos-wallet-component-menu-tezid/dist/index.css'

const App = () => {
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
```

![screenshot](screenshot.png?raw=true "Screenshot")

## License

MIT © [tezid](https://github.com/tezid)
