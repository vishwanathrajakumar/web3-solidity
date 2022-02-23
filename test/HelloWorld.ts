import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hello World", function(){
    it("should say hi",async function () {
        /*
            1. Test Setup
            2. Depoly the contract
            3. Call our functions to test
        */
        
        // Deploy the contract
            const HelloWorld = await ethers.getContractFactory("HelloWorld");
            const HelloWorldObject = await HelloWorld.deploy();
            await HelloWorldObject.deployed();

        // Test the function
            expect(await HelloWorldObject.Hello()).to.equal("Hello, World");    
    });
});