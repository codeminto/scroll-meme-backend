const { ethereumConnectionInstance } = require("./web3.js")
// const ADDRESS = '0xCa6980D554CDf28e7be92e1d39627357E4BBC15A'//scroll sepolia
const ADDRESS = '0xDE919C2c586015f93dbDa5c2852E6e84E58fe8D4'//arbitrum sepolia



// const contractAB = [
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": true,
//                 "internalType": "uint256",
//                 "name": "campaignId",
//                 "type": "uint256"
//             },
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "owner",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "address",
//                 "name": "campaignAddress",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "string",
//                 "name": "imageUrl",
//                 "type": "string"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "string",
//                 "name": "title",
//                 "type": "string"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "string",
//                 "name": "description",
//                 "type": "string"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "startDate",
//                 "type": "uint256"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "endDate",
//                 "type": "uint256"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "maxParticipants",
//                 "type": "uint256"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "string",
//                 "name": "judgingType",
//                 "type": "string"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "totalPrizeAmount",
//                 "type": "uint256"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "totalWinners",
//                 "type": "uint256"
//             }
//         ],
//         "name": "CampaignCreated",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "sender",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "amount",
//                 "type": "uint256"
//             }
//         ],
//         "name": "PaymentReceived",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "winner",
//                 "type": "address"
//             },
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "contractAddress",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "amount",
//                 "type": "uint256"
//             }
//         ],
//         "name": "PrizeClaimed",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "userId",
//                 "type": "address"
//             },
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "contractAddress",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "string",
//                 "name": "imageUrlOrHash",
//                 "type": "string"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "string",
//                 "name": "description",
//                 "type": "string"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "submissionId",
//                 "type": "uint256"
//             }
//         ],
//         "name": "SubmissionCreated",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "voter",
//                 "type": "address"
//             },
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "contractAddress",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "submissionId",
//                 "type": "uint256"
//             }
//         ],
//         "name": "Upvoted",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "components": [
//                     {
//                         "internalType": "string",
//                         "name": "imageUrlOrHash",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "address",
//                         "name": "userId",
//                         "type": "address"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "description",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "uint256",
//                         "name": "submissionId",
//                         "type": "uint256"
//                     },
//                     {
//                         "internalType": "uint256",
//                         "name": "submissionUpvotes",
//                         "type": "uint256"
//                     }
//                 ],
//                 "indexed": false,
//                 "internalType": "struct LogContract.Submission[]",
//                 "name": "winningSubmissions",
//                 "type": "tuple[]"
//             },
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "contractAddress",
//                 "type": "address"
//             }
//         ],
//         "name": "WinnersCalculated",
//         "type": "event"
//     },
//     {
//         "inputs": [],
//         "name": "campaignCount",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "name": "campaigns",
//         "outputs": [
//             {
//                 "internalType": "address",
//                 "name": "",
//                 "type": "address"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "string",
//                 "name": "imageUrl",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "title",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "description",
//                 "type": "string"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "startDate",
//                 "type": "uint256"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "endDate",
//                 "type": "uint256"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "maxParticipants",
//                 "type": "uint256"
//             },
//             {
//                 "internalType": "string",
//                 "name": "judgingType",
//                 "type": "string"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "totalPrizeAmount",
//                 "type": "uint256"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "totalWinners",
//                 "type": "uint256"
//             }
//         ],
//         "name": "createCampaign",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "winner",
//                 "type": "address"
//             },
//             {
//                 "internalType": "address",
//                 "name": "contractAddress",
//                 "type": "address"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "amount",
//                 "type": "uint256"
//             }
//         ],
//         "name": "logPrizeClaimed",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "userId",
//                 "type": "address"
//             },
//             {
//                 "internalType": "address",
//                 "name": "contractAddress",
//                 "type": "address"
//             },
//             {
//                 "internalType": "string",
//                 "name": "imageUrlOrHash",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "description",
//                 "type": "string"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "submissionId",
//                 "type": "uint256"
//             }
//         ],
//         "name": "logSubmissionCreated",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "voter",
//                 "type": "address"
//             },
//             {
//                 "internalType": "address",
//                 "name": "contractAddress",
//                 "type": "address"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "submissionId",
//                 "type": "uint256"
//             }
//         ],
//         "name": "logUpvoted",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "components": [
//                     {
//                         "internalType": "string",
//                         "name": "imageUrlOrHash",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "address",
//                         "name": "userId",
//                         "type": "address"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "description",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "uint256",
//                         "name": "submissionId",
//                         "type": "uint256"
//                     },
//                     {
//                         "internalType": "uint256",
//                         "name": "submissionUpvotes",
//                         "type": "uint256"
//                     }
//                 ],
//                 "internalType": "struct LogContract.Submission[]",
//                 "name": "winningSubmissions",
//                 "type": "tuple[]"
//             },
//             {
//                 "internalType": "address",
//                 "name": "contractAddress",
//                 "type": "address"
//             }
//         ],
//         "name": "logWinnersCalculated",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }
// ]

const contractAB = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "campaignId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "campaignAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "imageUrl",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "startDate",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "endDate",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "maxParticipants",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "judgingType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalPrizeAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalWinners",
				"type": "uint256"
			}
		],
		"name": "CampaignCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "imageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "startDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxParticipants",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "judgingType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalPrizeAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalWinners",
				"type": "uint256"
			}
		],
		"name": "createCampaign",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "logPrizeClaimed",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userId",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "imageUrlOrHash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "submissionId",
				"type": "uint256"
			}
		],
		"name": "logSubmissionCreated",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "submissionId",
				"type": "uint256"
			}
		],
		"name": "logUpvoted",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "imageUrlOrHash",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "userId",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "submissionId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "submissionUpvotes",
						"type": "uint256"
					}
				],
				"internalType": "struct LogContract.Submission[]",
				"name": "winningSubmissions",
				"type": "tuple[]"
			},
			{
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			}
		],
		"name": "logWinnersCalculated",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "PaymentReceived",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "PrizeClaimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "userId",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "imageUrlOrHash",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "submissionId",
				"type": "uint256"
			}
		],
		"name": "SubmissionCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "submissionId",
				"type": "uint256"
			}
		],
		"name": "Upvoted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "imageUrlOrHash",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "userId",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "submissionId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "submissionUpvotes",
						"type": "uint256"
					}
				],
				"indexed": false,
				"internalType": "struct LogContract.Submission[]",
				"name": "winningSubmissions",
				"type": "tuple[]"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			}
		],
		"name": "WinnersCalculated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "campaignCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "campaigns",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const ContestContractInstance = async () => {
	const web3 = await ethereumConnectionInstance;
	let vaultContract = await new web3.eth.Contract(contractAB, ADDRESS)
	return vaultContract
}

module.exports = { ContestContractInstance }
