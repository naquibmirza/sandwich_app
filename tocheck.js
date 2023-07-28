import { Wallet, BigNumber, ethers, providers } from 'ethers';
import {
  FlashbotsBundleProvider,
  FlashbotsBundleResolution,
} from '@flashbots/ethers-provider-bundle';

async function checkFlashbotsProvider() {
  try {
    // Create the ethers provider and authSigner as you did before
    const provider = new providers.JsonRpcProvider(
      'https://eth-goerli.g.alchemy.com/v2/PCUW5sKTPcfFD6QX3B3u1M1HGrKyyBLo'
    );
    const privateKey = '0xfb4301845fb7ba399438a819e6379ca060d2edc487eb34c39308512afa3bb7c5';
    const authSigner = new Wallet(privateKey, provider);

    // Create the Flashbots provider
    const flashbotsUrl = 'https://relay-goerli.flashbots.net';
    console.log('Creating Flashbots provider...');
    const flashbotsProvider = await FlashbotsBundleProvider.create(provider, authSigner, flashbotsUrl);
    console.log('Flashbots provider created successfully.');

    // If we reached this point, the Flashbots provider is created without errors.
    // You can now proceed with the rest of your code or other checks if needed.

    // Rest of your code or operations using flashbotsProvider...

  } catch (error) {
    console.error('Error:', error);
    // If an error occurs during the creation of flashbotsProvider, it will be logged here.
    // You can investigate the error message to identify the issue.
  }
}

checkFlashbotsProvider();
