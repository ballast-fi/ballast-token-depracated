const Ballast = artifacts.require("Ballast");
const {deployProxy} = require("@openzeppelin/truffle-upgrades");

module.exports = async function(deployer) {
	await deployProxy(Ballast, [], {deployer});
}
