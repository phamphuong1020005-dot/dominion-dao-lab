require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",   // có thể đổi sang Alchemy/Infura nếu muốn
      accounts: ["18946170c3b5ee199f112ec831594f858cb7019e0f3924a861c4551d5f207050"],  // ← thay bằng private key của bạn
      chainId: 11155111
    }
  }
};