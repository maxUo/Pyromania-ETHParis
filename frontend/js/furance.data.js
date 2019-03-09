window.furanceData = {
  "contractName": "Furance",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "ashes",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x536b8998"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x715018a6"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "extinguished",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x82768b44"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8da5cb5b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8f32d59b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "pyro",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xe26f024e"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf2fde38b"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "pyroValue",
          "type": "uint256"
        }
      ],
      "name": "Burn",
      "type": "event",
      "signature": "0x5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa2"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event",
      "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "exitgush",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x88ac87ab"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "bind",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x62358aad"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "token_",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "estimateMintAmount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x3bb1ba6f"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "token_",
          "type": "address"
        }
      ],
      "name": "getTokenState",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x0b3eb970"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token_",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        },
        {
          "name": "minimalPyroValue",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf5298aca"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token_",
          "type": "address"
        },
        {
          "name": "a",
          "type": "uint256"
        },
        {
          "name": "kappa0",
          "type": "uint256"
        },
        {
          "name": "w",
          "type": "uint256"
        }
      ],
      "name": "addFuel",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xe63b18e1"
    }
  ],
  "bytecode": "0x6080604081905260008054600160a060020a0319163317808255600160a060020a0316917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3610c19806100576000396000f3fe608060405234801561001057600080fd5b50600436106100ec576000357c01000000000000000000000000000000000000000000000000000000009004806388ac87ab116100a9578063e26f024e11610083578063e26f024e146101f2578063e63b18e1146101fa578063f2fde38b14610232578063f5298aca14610258576100ec565b806388ac87ab146101be5780638da5cb5b146101c65780638f32d59b146101ea576100ec565b80630b3eb970146100f15780633bb1ba6f1461014a578063536b89981461018857806362358aad14610190578063715018a6146101ac57806382768b44146101b6575b600080fd5b6101176004803603602081101561010757600080fd5b5035600160a060020a031661028a565b604080519687526020870195909552858501939093526060850191909152608084015260a0830152519081900360c00190f35b6101766004803603604081101561016057600080fd5b50600160a060020a0381351690602001356102f3565b60408051918252519081900360200190f35b6101766103b7565b6101986103bd565b604080519115158252519081900360200190f35b6101b46103fb565b005b610198610465565b610198610475565b6101ce6104cb565b60408051600160a060020a039092168252519081900360200190f35b6101986104da565b6101ce6104eb565b6101986004803603608081101561021057600080fd5b50600160a060020a0381351690602081013590604081013590606001356104fa565b6101b46004803603602081101561024857600080fd5b5035600160a060020a03166105c6565b6101986004803603606081101561026e57600080fd5b50600160a060020a0381351690602081013590604001356105e5565b60008060008060008060006003600089600160a060020a0316600160a060020a03168152602001908152602001600020905080600101548160020154826003015483600401546102d9856109e4565b600790950154939c929b5090995097509195509350915050565b600160a060020a0382166000908152600360205260408120600781015483908390670de0b6b3a76400009061033390670de054ef3dac05f8904303610a1f565b84600401540281151561034257fe5b0490508481016000670de0b6b3a764000061035c84610aab565b61036584610aab565b0386600101540281151561037557fe5b0490506000610383866109e4565b9050670de0b6b3a7640000858202048211156103a957670de0b6b3a76400008582020491505b509450505050505b92915050565b60015481565b600254600090600160a060020a0316156103d657600080fd5b506002805473ffffffffffffffffffffffffffffffffffffffff191633179055600190565b6104036104da565b151561040e57600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60005460a060020a900460ff1681565b600061047f6104da565b151561048a57600080fd5b60005460a060020a900460ff16156104a157600080fd5b506000805474ff0000000000000000000000000000000000000000191660a060020a179055600190565b600054600160a060020a031690565b600054600160a060020a0316331490565b600254600160a060020a031681565b60006105046104da565b151561050f57600080fd5b60005460a060020a900460ff161561052657600080fd5b6040805161010081018252600180825260208083019788526000838501818152606085018281526080860183815260a087019a8b5260c08701998a524360e08801908152600160a060020a039d909d168452600394859052969092209451855460ff191690151517855598519284019290925596516002830155519581019590955551600485015591516005840155516006830155915160079091015590565b6105ce6104da565b15156105d957600080fd5b6105e281610b1a565b50565b6000805460a060020a900460ff16156105fd57600080fd5b6000831161060a57600080fd5b604080517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018590529051600160a060020a038616916323b872dd9160648083019260209291908290030181600087803b15801561067857600080fd5b505af115801561068c573d6000803e3d6000fd5b505050506040513d60208110156106a257600080fd5b505115156106af57600080fd5b600160a060020a0384166000908152600360205260409020805460ff1615156106d757600080fd5b60008490506000670de0b6b3a76400006106ff670de054ef3dac05f885600701544303610a1f565b84600401540281151561070e57fe5b0490508181016000670de0b6b3a764000061072884610aab565b61073184610aab565b0386600101540281151561074157fe5b049050600061074f866109e4565b9050670de0b6b3a76400008582020482111561077557670de0b6b3a76400008582020491505b8782101561078257600080fd5b60028601805486019055600386018054830190556004808701849055436007880155604080517f70a08231000000000000000000000000000000000000000000000000000000008152339281019290925251600160a060020a038c16916370a08231916024808301926020929190829003018186803b15801561080457600080fd5b505afa158015610818573d6000803e3d6000fd5b505050506040513d602081101561082e57600080fd5b5051151561083f5760018054810190555b600254604080517f40c10f19000000000000000000000000000000000000000000000000000000008152336004820152602481018590529051600160a060020a03909216916340c10f19916044808201926020929091908290030181600087803b1580156108ac57600080fd5b505af11580156108c0573d6000803e3d6000fd5b505050506040513d60208110156108d657600080fd5b5050600254600160a060020a03166340c10f196108f16104cb565b600a85046040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b15801561096057600080fd5b505af1158015610974573d6000803e3d6000fd5b505050506040513d602081101561098a57600080fd5b505060408051868152602081018490528151600160a060020a038d169233927f5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa2929081900390910190a35060019998505050505050505050565b60068101546002820154600583015460009291820191670de0b6b3a7640000918291020484600301540102811515610a1857fe5b0492915050565b6000670de0b6b3a764000082825b5050600280840490810284036001811415610a6d57610a6a670de0b6b3a7640000610a5e858963ffffffff610b9716565b9063ffffffff610bc916565b92505b811515610a7957610aa1565b9093508390610a9a670de0b6b3a7640000610a5e888063ffffffff610b9716565b9550610a2d565b5090949350505050565b6000600260018301908104901515610ae057507f80000000000000000000000000000000000000000000000000000000000000005b8291505b81811015610b0e578091506001818285811515610afd57fe5b60029390930a920401049050610ae4565b50633b9aca0002919050565b600160a060020a0381161515610b2f57600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000821515610ba8575060006103b1565b828202828482811515610bb757fe5b0414610bc257600080fd5b9392505050565b6000808211610bd757600080fd5b60008284811515610be457fe5b0494935050505056fea165627a7a723058206e986c23cee184a61ef5fef9046489096939e66224cff171c929d6a5bafc386b0029",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100ec576000357c01000000000000000000000000000000000000000000000000000000009004806388ac87ab116100a9578063e26f024e11610083578063e26f024e146101f2578063e63b18e1146101fa578063f2fde38b14610232578063f5298aca14610258576100ec565b806388ac87ab146101be5780638da5cb5b146101c65780638f32d59b146101ea576100ec565b80630b3eb970146100f15780633bb1ba6f1461014a578063536b89981461018857806362358aad14610190578063715018a6146101ac57806382768b44146101b6575b600080fd5b6101176004803603602081101561010757600080fd5b5035600160a060020a031661028a565b604080519687526020870195909552858501939093526060850191909152608084015260a0830152519081900360c00190f35b6101766004803603604081101561016057600080fd5b50600160a060020a0381351690602001356102f3565b60408051918252519081900360200190f35b6101766103b7565b6101986103bd565b604080519115158252519081900360200190f35b6101b46103fb565b005b610198610465565b610198610475565b6101ce6104cb565b60408051600160a060020a039092168252519081900360200190f35b6101986104da565b6101ce6104eb565b6101986004803603608081101561021057600080fd5b50600160a060020a0381351690602081013590604081013590606001356104fa565b6101b46004803603602081101561024857600080fd5b5035600160a060020a03166105c6565b6101986004803603606081101561026e57600080fd5b50600160a060020a0381351690602081013590604001356105e5565b60008060008060008060006003600089600160a060020a0316600160a060020a03168152602001908152602001600020905080600101548160020154826003015483600401546102d9856109e4565b600790950154939c929b5090995097509195509350915050565b600160a060020a0382166000908152600360205260408120600781015483908390670de0b6b3a76400009061033390670de054ef3dac05f8904303610a1f565b84600401540281151561034257fe5b0490508481016000670de0b6b3a764000061035c84610aab565b61036584610aab565b0386600101540281151561037557fe5b0490506000610383866109e4565b9050670de0b6b3a7640000858202048211156103a957670de0b6b3a76400008582020491505b509450505050505b92915050565b60015481565b600254600090600160a060020a0316156103d657600080fd5b506002805473ffffffffffffffffffffffffffffffffffffffff191633179055600190565b6104036104da565b151561040e57600080fd5b60008054604051600160a060020a03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60005460a060020a900460ff1681565b600061047f6104da565b151561048a57600080fd5b60005460a060020a900460ff16156104a157600080fd5b506000805474ff0000000000000000000000000000000000000000191660a060020a179055600190565b600054600160a060020a031690565b600054600160a060020a0316331490565b600254600160a060020a031681565b60006105046104da565b151561050f57600080fd5b60005460a060020a900460ff161561052657600080fd5b6040805161010081018252600180825260208083019788526000838501818152606085018281526080860183815260a087019a8b5260c08701998a524360e08801908152600160a060020a039d909d168452600394859052969092209451855460ff191690151517855598519284019290925596516002830155519581019590955551600485015591516005840155516006830155915160079091015590565b6105ce6104da565b15156105d957600080fd5b6105e281610b1a565b50565b6000805460a060020a900460ff16156105fd57600080fd5b6000831161060a57600080fd5b604080517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018590529051600160a060020a038616916323b872dd9160648083019260209291908290030181600087803b15801561067857600080fd5b505af115801561068c573d6000803e3d6000fd5b505050506040513d60208110156106a257600080fd5b505115156106af57600080fd5b600160a060020a0384166000908152600360205260409020805460ff1615156106d757600080fd5b60008490506000670de0b6b3a76400006106ff670de054ef3dac05f885600701544303610a1f565b84600401540281151561070e57fe5b0490508181016000670de0b6b3a764000061072884610aab565b61073184610aab565b0386600101540281151561074157fe5b049050600061074f866109e4565b9050670de0b6b3a76400008582020482111561077557670de0b6b3a76400008582020491505b8782101561078257600080fd5b60028601805486019055600386018054830190556004808701849055436007880155604080517f70a08231000000000000000000000000000000000000000000000000000000008152339281019290925251600160a060020a038c16916370a08231916024808301926020929190829003018186803b15801561080457600080fd5b505afa158015610818573d6000803e3d6000fd5b505050506040513d602081101561082e57600080fd5b5051151561083f5760018054810190555b600254604080517f40c10f19000000000000000000000000000000000000000000000000000000008152336004820152602481018590529051600160a060020a03909216916340c10f19916044808201926020929091908290030181600087803b1580156108ac57600080fd5b505af11580156108c0573d6000803e3d6000fd5b505050506040513d60208110156108d657600080fd5b5050600254600160a060020a03166340c10f196108f16104cb565b600a85046040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b15801561096057600080fd5b505af1158015610974573d6000803e3d6000fd5b505050506040513d602081101561098a57600080fd5b505060408051868152602081018490528151600160a060020a038d169233927f5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa2929081900390910190a35060019998505050505050505050565b60068101546002820154600583015460009291820191670de0b6b3a7640000918291020484600301540102811515610a1857fe5b0492915050565b6000670de0b6b3a764000082825b5050600280840490810284036001811415610a6d57610a6a670de0b6b3a7640000610a5e858963ffffffff610b9716565b9063ffffffff610bc916565b92505b811515610a7957610aa1565b9093508390610a9a670de0b6b3a7640000610a5e888063ffffffff610b9716565b9550610a2d565b5090949350505050565b6000600260018301908104901515610ae057507f80000000000000000000000000000000000000000000000000000000000000005b8291505b81811015610b0e578091506001818285811515610afd57fe5b60029390930a920401049050610ae4565b50633b9aca0002919050565b600160a060020a0381161515610b2f57600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000821515610ba8575060006103b1565b828202828482811515610bb757fe5b0414610bc257600080fd5b9392505050565b6000808211610bd757600080fd5b60008284811515610be457fe5b0494935050505056fea165627a7a723058206e986c23cee184a61ef5fef9046489096939e66224cff171c929d6a5bafc386b0029",
  "sourceMap": "423:3715:1:-;;;;;515:6:7;:19;;-1:-1:-1;;;;;;515:19:7;524:10;515:19;;;;-1:-1:-1;;;;;582:6:7;;549:40;;515:6;;549:40;423:3715:1;;;;;;",
  "deployedSourceMap": "423:3715:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;423:3715:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2829:200;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2829:200:1;-1:-1:-1;;;;;2829:200:1;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2360:463;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;2360:463:1;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;607:17;;;:::i;2046:140::-;;;:::i;:::-;;;;;;;;;;;;;;;;;;1347:137:7;;;:::i;:::-;;578:24:1;;;:::i;1925:113::-;;;:::i;659:77:7:-;;;:::i;:::-;;;;-1:-1:-1;;;;;659:77:7;;;;;;;;;;;;;;979:90;;;:::i;629:22:1:-;;;:::i;3947:186::-;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;-1:-1;;;;;;3947:186:1;;;;;;;;;;;;;;;;;;:::i;1655:107:7:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1655:107:7;-1:-1:-1;;;;;1655:107:7;;:::i;3035:905:1:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;3035:905:1;;;;;;;;;;;;;:::i;2829:200::-;2888:4;2894;2900;2906;2912;2918;2931:15;2949:6;:14;2956:6;-1:-1:-1;;;;;2949:14:1;-1:-1:-1;;;;;2949:14:1;;;;;;;;;;;;2931:32;;2978:1;:3;;;2983:1;:3;;;2988:1;:3;;;2993:1;:3;;;2998:9;3005:1;2998:6;:9::i;:::-;3009:13;;;;;2970:53;;;;-1:-1:-1;2970:53:1;;-1:-1:-1;2970:53:1;-1:-1:-1;2970:53:1;;-1:-1:-1;3009:13:1;-1:-1:-1;2829:200:1;-1:-1:-1;;2829:200:1:o;2360:463::-;-1:-1:-1;;;;;2467:14:1;;2436:4;2467:14;;;:6;:14;;;;;2557:13;;;;2499:5;;2436:4;;785;;2529:42;;680:18;;2542:12;:28;2529:5;:42::i;:::-;2523:1;:3;;;:48;:69;;;;;;;;;-1:-1:-1;2610:12:1;;;2599:8;785:4;2658:11;2523:69;2658:5;:11::i;:::-;2645:10;2651:3;2645:5;:10::i;:::-;:24;2640:1;:3;;;:30;:50;;;;;;;;2629:61;;2697:10;2710:9;2717:1;2710:6;:9::i;:::-;2697:22;-1:-1:-1;785:4:1;2736:9;;;:28;2730:3;:34;2726:74;;;785:4;2772:9;;;:28;2766:34;;2726:74;-1:-1:-1;2814:3:1;-1:-1:-1;;;;;2360:463:1;;;;;:::o;607:17::-;;;;:::o;2046:140::-;2120:4;;2077;;-1:-1:-1;;;;;2120:4:1;2098:27;2090:36;;;;;;-1:-1:-1;2133:4:1;:29;;-1:-1:-1;;2133:29:1;2151:10;2133:29;;;;2046:140;:::o;1347:137:7:-;863:9;:7;:9::i;:::-;855:18;;;;;;;;1445:1;1429:6;;1408:40;;-1:-1:-1;;;;;1429:6:7;;;;1408:40;;1445:1;;1408:40;1475:1;1458:19;;-1:-1:-1;;1458:19:7;;;1347:137::o;578:24:1:-;;;-1:-1:-1;;;578:24:1;;;;;:::o;1925:113::-;1984:4;863:9:7;:7;:9::i;:::-;855:18;;;;;;;;1892:12:1;;-1:-1:-1;;;1892:12:1;;;;1891:13;1883:22;;;;;;-1:-1:-1;1997:12:1;:17;;-1:-1:-1;;1997:17:1;-1:-1:-1;;;1997:17:1;;;2010:4;1925:113;:::o;659:77:7:-;697:7;723:6;-1:-1:-1;;;;;723:6:7;659:77;:::o;979:90::-;1019:4;1056:6;-1:-1:-1;;;;;1056:6:7;1042:10;:20;;979:90::o;629:22:1:-;;;-1:-1:-1;;;;;629:22:1;;:::o;3947:186::-;4049:4;863:9:7;:7;:9::i;:::-;855:18;;;;;;;;1892:12:1;;-1:-1:-1;;;1892:12:1;;;;1891:13;1883:22;;;;;;4079:48;;;;;;;;4085:4;4079:48;;;;;;;;;;-1:-1:-1;4079:48:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4114:12;4079:48;;;;;;-1:-1:-1;;;;;4062:14:1;;;;;;:6;:14;;;;;;;;:65;;;;-1:-1:-1;;4062:65:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3947:186::o;1655:107:7:-;863:9;:7;:9::i;:::-;855:18;;;;;;;;1727:28;1746:8;1727:18;:28::i;:::-;1655:107;:::o;3035:905:1:-;3130:4;1892:12;;-1:-1:-1;;;1892:12:1;;;;1891:13;1883:22;;;;;;3159:1;3151:9;;3143:18;;;;;;3176:61;;;;;;3204:10;3176:61;;;;3224:4;3176:61;;;;;;;;;;;;-1:-1:-1;;;;;3176:27:1;;;;;:61;;;;;;;;;;;;;;-1:-1:-1;3176:27:1;:61;;;5:2:-1;;;;30:1;27;20:12;5:2;3176:61:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3176:61:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;3176:61:1;3168:70;;;;;;;;-1:-1:-1;;;;;3263:14:1;;3245:15;3263:14;;;:6;:14;;;;;3292:9;;;;3284:18;;;;;;;;3309:8;3320:5;3309:16;;3332:9;785:4;3350:42;680:18;3378:1;:13;;;3363:12;:28;3350:5;:42::i;:::-;3344:1;:3;;;:48;:69;;;;;;;;;-1:-1:-1;3431:10:1;;;3420:8;785:4;3477:11;3344:69;3477:5;:11::i;:::-;3464:10;3470:3;3464:5;:10::i;:::-;:24;3459:1;:3;;;:30;:51;;;;;;;;3448:62;;3517:10;3530:9;3537:1;3530:6;:9::i;:::-;3517:22;-1:-1:-1;785:4:1;3556:9;;;:28;3550:3;:34;3546:74;;;785:4;3592:9;;;:28;3586:34;;3546:74;3635:23;;;;3627:32;;;;;;3666:3;;;:10;;;;;;3683:3;;;:10;;;;;;3700:3;;;;:9;;;3732:12;3716:13;;;:28;3755:36;;;;;;3780:10;3755:36;;;;;;;;-1:-1:-1;;;;;3755:24:1;;;;;:36;;;;;;;;;;;;;;:24;:36;;;5:2:-1;;;;30:1;27;20:12;5:2;3755:36:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3755:36:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;3755:36:1;:39;3751:53;;;3803:1;3796:8;;;;;;3751:53;3811:4;;:26;;;;;;3821:10;3811:26;;;;;;;;;;;;-1:-1:-1;;;;;3811:4:1;;;;:9;;:26;;;;;;;;;;;;;;;:4;;:26;;;5:2:-1;;;;30:1;27;20:12;5:2;3811:26:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3811:26:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;3844:4:1;;-1:-1:-1;;;;;3844:4:1;:9;3854:7;:5;:7::i;:::-;3867:2;3863:3;:6;3844:26;;;;;;;;;;;;;-1:-1:-1;;;;;3844:26:1;-1:-1:-1;;;;;3844:26:1;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3844:26:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3844:26:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;3882:34:1;;;;;;3844:26;3882:34;;;;;;;-1:-1:-1;;;;;3882:34:1;;;3887:10;;3882:34;;;;;;;;;;;-1:-1:-1;3930:4:1;;3035:905;-1:-1:-1;;;;;;;;;3035:905:1:o;2192:160::-;2342:3;;;;2336;;;;2274:9;;;;2247:4;;2336:9;;;;785:4;;;;2274:15;:36;2268:1;:3;;;:42;2267:65;:79;;;;;;;;;2192:160;-1:-1:-1;;2192:160:1:o;1123:379::-;1176:4;785;1234:1;1176:4;1257:223;-1:-1:-1;;49:1;25:41;;;;1309:6:1;;1304:12;;1288:1;1329:8;;1325:63;;;1354:34;785:4;1354:10;:3;1362:1;1354:10;:7;:10;:::i;:::-;:14;:34;:14;:34;:::i;:::-;1348:40;;1325:63;1401:4;;1397:15;;;1407:5;;1397:15;1425:1;;-1:-1:-1;1425:1:1;;1440:32;785:4;1440:8;1446:1;;1440:8;:5;:8;:::i;:32::-;1436:36;;1257:223;;;-1:-1:-1;1493:3:1;;1123:379;-1:-1:-1;;;;1123:379:1:o;843:240::-;889:6;49:1:-1;924::1;914:5;;25:41:-1;;;;937:8:1;932:25;;;-1:-1:-1;951:6:1;932:25;968:1;964:5;;976:65;987:1;983;:5;976:65;;;1003:1;999:5;;1032:1;1026;1022;1018;:5;;;;;;;49:1:-1;45:20;;;;1018:5:1;;:9;25:41:-1;;-1:-1;976:65:1;;;-1:-1:-1;831:3:1;1051:26;;843:240;-1:-1:-1;843:240:1:o;1906:183:7:-;-1:-1:-1;;;;;1979:22:7;;;;1971:31;;;;;;2038:6;;;2017:38;;-1:-1:-1;;;;;2017:38:7;;;;2038:6;;;2017:38;;;2065:6;:17;;-1:-1:-1;;2065:17:7;-1:-1:-1;;;;;2065:17:7;;;;;;;;;;1906:183::o;229:421:6:-;287:7;527:6;;523:45;;;-1:-1:-1;556:1:6;549:8;;523:45;590:5;;;594:1;590;:5;613;;;;;;;;:10;605:19;;;;;;642:1;229:421;-1:-1:-1;;;229:421:6:o;778:296::-;836:7;929:5;;;921:14;;;;;;945:9;961:1;957;:5;;;;;;;;;778:296;-1:-1:-1;;;;778:296:6:o",
  "source": "pragma solidity >=0.5.2;\r\n\r\n/**\r\nThis is hackathon edition of our Furance contract. Will be replaced with production version later.\r\n */\r\n\r\nimport \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\r\nimport \"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol\";\r\nimport \"openzeppelin-solidity/contracts/math/SafeMath.sol\";\r\n\r\n\r\ninterface IPyroToken {\r\n  function mint(address, uint) external returns(bool);\r\n}\r\n\r\n\r\ncontract Furance is Ownable {\r\n  event Burn(address indexed sender, address indexed token, uint value, uint pyroValue);\r\n  using SafeMath for uint;\r\n  \r\n  bool public extinguished;\r\n  uint public ashes;\r\n  IPyroToken public pyro;\r\n\r\n  uint constant alpha = 999892503784850936; // decay per block corresponds 0.5 decay per day\r\n  uint constant DECIMAL_MULTIPLIER=1e18;\r\n  uint constant DECIMAL_HALFMULTIPLIER=1e9;\r\n\r\n\r\n  function _sqrt(uint x) internal pure returns (uint y) {\r\n    uint z = (x + 1) >> 1;\r\n    if ( x+1 == 0) z = 1<<255;\r\n    y = x;\r\n    while (z < y) {\r\n      y = z;\r\n      z = (x / z + z) >> 1;\r\n    }\r\n    y = y * DECIMAL_HALFMULTIPLIER;\r\n  }\r\n\r\n  /* solium-disable-next-line */\r\n  function _pown(uint x, uint z) internal pure returns(uint) {\r\n    uint res = DECIMAL_MULTIPLIER;\r\n    uint t = z;\r\n    uint bit;\r\n    while (true) {\r\n      t = z >> 1;\r\n      bit = z - (t << 1);\r\n      if (bit == 1)\r\n        res = res.mul(x).div(DECIMAL_MULTIPLIER);\r\n      if (t==0) break;\r\n      z = t; \r\n      x = x.mul(x).div(DECIMAL_MULTIPLIER);\r\n    }\r\n    return res;\r\n  }\r\n\r\n\r\n  struct token {\r\n    bool enabled;\r\n    uint a; //mintable performance parameter, depending for market capitalization\r\n    uint b; //tokens burned\r\n    uint c; //tokens minted\r\n    uint r; //burnrate\r\n    uint kappa_0; //initial kappa\r\n    uint w; //weight of initial kappa\r\n    uint blockNumber;\r\n  }\r\n\r\n  mapping(address=>token) tokens;\r\n\r\n  modifier notExitgushed {\r\n    require(!extinguished);\r\n    _;\r\n  }\r\n\r\n  function exitgush() public onlyOwner notExitgushed returns(bool) {\r\n    extinguished=true;\r\n    return true;\r\n  }\r\n\r\n\r\n  function bind() public returns(bool) {\r\n    require(address(0) == address(pyro));\r\n    pyro = IPyroToken(msg.sender);\r\n    return true;\r\n  }\r\n\r\n  function _kappa(token storage t) internal view returns(uint) {\r\n    return (t.c + t.kappa_0 * t.w / DECIMAL_MULTIPLIER) * DECIMAL_MULTIPLIER / (t.b + t.w);\r\n  }\r\n\r\n\r\n  function estimateMintAmount(address token_, uint value) public view returns(uint) {\r\n    token storage t = tokens[token_];\r\n    uint b_i = value;\r\n    uint r_is = t.r * _pown(alpha, block.number - t.blockNumber) / DECIMAL_MULTIPLIER;\r\n    uint r_i = r_is + value;\r\n    uint c_i = t.a*(_sqrt(r_i) - _sqrt(r_is))/ DECIMAL_MULTIPLIER;\r\n    uint kappa = _kappa(t);\r\n    if (c_i > b_i*kappa/DECIMAL_MULTIPLIER) c_i = b_i*kappa/DECIMAL_MULTIPLIER;\r\n    return c_i;\r\n  }\r\n\r\n  function getTokenState(address token_) public view returns(uint, uint, uint, uint, uint, uint) {\r\n    token storage t = tokens[token_];\r\n    return (t.a, t.b, t.c, t.r, _kappa(t), t.blockNumber);\r\n  }\r\n\r\n  function burn(address token_, uint value, uint minimalPyroValue) public notExitgushed returns (bool) {\r\n    require(value > 0);\r\n    require(IERC20(token_).transferFrom(msg.sender, address(this), value));\r\n    token storage t = tokens[token_];\r\n    require(t.enabled);\r\n    uint b_i = value;\r\n    uint r_is = t.r * _pown(alpha, block.number - t.blockNumber) / DECIMAL_MULTIPLIER;\r\n    uint r_i = r_is + b_i;\r\n    uint c_i = t.a*(_sqrt(r_i) - _sqrt(r_is)) / DECIMAL_MULTIPLIER;\r\n    uint kappa = _kappa(t);\r\n    if (c_i > b_i*kappa/DECIMAL_MULTIPLIER) c_i = b_i*kappa/DECIMAL_MULTIPLIER;\r\n    require(c_i >= minimalPyroValue);\r\n    t.b += b_i;\r\n    t.c += c_i;\r\n    t.r = r_i;\r\n    t.blockNumber = block.number;\r\n    if (IERC20(token_).balanceOf(msg.sender)==0) ashes+=1;\r\n    pyro.mint(msg.sender, c_i);\r\n    pyro.mint(owner(), c_i/10);\r\n    emit Burn(msg.sender, token_, b_i, c_i);\r\n    return true;\r\n  } \r\n\r\n  function addFuel(address token_, uint a, uint kappa0, uint w) public onlyOwner notExitgushed returns (bool) {\r\n    tokens[token_] = token(true, a, 0, 0, 0, kappa0, w, block.number);\r\n  }\r\n\r\n}",
  "sourcePath": "C:/Users/snjax/Documents/projects/mixed/ethparis/pyrotoken/smart_contracts/contracts/Furance.sol",
  "ast": {
    "absolutePath": "/C/Users/snjax/Documents/projects/mixed/ethparis/pyrotoken/smart_contracts/contracts/Furance.sol",
    "exportedSymbols": {
      "Furance": [
        669
      ],
      "IPyroToken": [
        68
      ]
    },
    "id": 670,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 55,
        "literals": [
          "solidity",
          ">=",
          "0.5",
          ".2"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 56,
        "nodeType": "ImportDirective",
        "scope": 670,
        "sourceUnit": 1249,
        "src": "140:63:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol",
        "id": 57,
        "nodeType": "ImportDirective",
        "scope": 670,
        "sourceUnit": 1836,
        "src": "205:64:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 58,
        "nodeType": "ImportDirective",
        "scope": 670,
        "sourceUnit": 1140,
        "src": "271:59:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 68,
        "linearizedBaseContracts": [
          68
        ],
        "name": "IPyroToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 67,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 63,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "376:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "385:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "375:15:1"
            },
            "returnParameters": {
              "id": 66,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "408:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 64,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "408:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "407:6:1"
            },
            "scope": 68,
            "src": "362:52:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 670,
        "src": "336:81:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 69,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1248,
              "src": "443:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1248",
                "typeString": "contract Ownable"
              }
            },
            "id": 70,
            "nodeType": "InheritanceSpecifier",
            "src": "443:7:1"
          }
        ],
        "contractDependencies": [
          1248
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 669,
        "linearizedBaseContracts": [
          669,
          1248
        ],
        "name": "Furance",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 80,
            "name": "Burn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 79,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 72,
                  "indexed": true,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "467:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 71,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "467:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 74,
                  "indexed": true,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "491:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 73,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "491:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 76,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "514:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 75,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "514:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 78,
                  "indexed": false,
                  "name": "pyroValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "526:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 77,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "466:75:1"
            },
            "src": "456:86:1"
          },
          {
            "id": 83,
            "libraryName": {
              "contractScope": null,
              "id": 81,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1139,
              "src": "552:8:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$1139",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "546:24:1",
            "typeName": {
              "id": 82,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "565:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 85,
            "name": "extinguished",
            "nodeType": "VariableDeclaration",
            "scope": 669,
            "src": "578:24:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 84,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "578:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 87,
            "name": "ashes",
            "nodeType": "VariableDeclaration",
            "scope": 669,
            "src": "607:17:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 86,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "607:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 89,
            "name": "pyro",
            "nodeType": "VariableDeclaration",
            "scope": 669,
            "src": "629:22:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IPyroToken_$68",
              "typeString": "contract IPyroToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 88,
              "name": "IPyroToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 68,
              "src": "629:10:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IPyroToken_$68",
                "typeString": "contract IPyroToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 92,
            "name": "alpha",
            "nodeType": "VariableDeclaration",
            "scope": 669,
            "src": "658:40:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 90,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "658:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "393939383932353033373834383530393336",
              "id": 91,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "680:18:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_999892503784850936_by_1",
                "typeString": "int_const 999892503784850936"
              },
              "value": "999892503784850936"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 95,
            "name": "DECIMAL_MULTIPLIER",
            "nodeType": "VariableDeclaration",
            "scope": 669,
            "src": "752:37:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 93,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "752:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31653138",
              "id": 94,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "785:4:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              },
              "value": "1e18"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 98,
            "name": "DECIMAL_HALFMULTIPLIER",
            "nodeType": "VariableDeclaration",
            "scope": 669,
            "src": "794:40:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 96,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "794:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "316539",
              "id": 97,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "831:3:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000_by_1",
                "typeString": "int_const 1000000000"
              },
              "value": "1e9"
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 156,
              "nodeType": "Block",
              "src": "897:186:1",
              "statements": [
                {
                  "assignments": [
                    106
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 106,
                      "name": "z",
                      "nodeType": "VariableDeclaration",
                      "scope": 156,
                      "src": "904:6:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 105,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "904:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 113,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 109,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 107,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 100,
                            "src": "914:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 108,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "918:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "914:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 110,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "913:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">>",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "924:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "913:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "904:21:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 116,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 100,
                        "src": "937:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "939:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "937:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 117,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "944:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "937:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 125,
                  "nodeType": "IfStatement",
                  "src": "932:25:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 123,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 119,
                        "name": "z",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "947:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                          "typeString": "int_const 5789...(69 digits omitted)...9968"
                        },
                        "id": 122,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 120,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "951:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "323535",
                          "id": 121,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "954:3:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_255_by_1",
                            "typeString": "int_const 255"
                          },
                          "value": "255"
                        },
                        "src": "951:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                          "typeString": "int_const 5789...(69 digits omitted)...9968"
                        }
                      },
                      "src": "947:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 124,
                    "nodeType": "ExpressionStatement",
                    "src": "947:10:1"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 126,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 103,
                      "src": "964:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 127,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 100,
                      "src": "968:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "964:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 129,
                  "nodeType": "ExpressionStatement",
                  "src": "964:5:1"
                },
                {
                  "body": {
                    "id": 148,
                    "nodeType": "Block",
                    "src": "990:51:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 135,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 133,
                            "name": "y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 103,
                            "src": "999:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 134,
                            "name": "z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 106,
                            "src": "1003:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "999:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 136,
                        "nodeType": "ExpressionStatement",
                        "src": "999:5:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 146,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 137,
                            "name": "z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 106,
                            "src": "1013:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 145,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "components": [
                                {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 142,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 140,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "id": 138,
                                      "name": "x",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 100,
                                      "src": "1018:1:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "/",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "id": 139,
                                      "name": "z",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 106,
                                      "src": "1022:1:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "1018:5:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "+",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "id": 141,
                                    "name": "z",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 106,
                                    "src": "1026:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "1018:9:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 143,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "1017:11:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">>",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 144,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1032:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "1017:16:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1013:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 147,
                        "nodeType": "ExpressionStatement",
                        "src": "1013:20:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 132,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 130,
                      "name": "z",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 106,
                      "src": "983:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 131,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 103,
                      "src": "987:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "983:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 149,
                  "nodeType": "WhileStatement",
                  "src": "976:65:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 154,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 150,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 103,
                      "src": "1047:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 153,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 151,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 103,
                        "src": "1051:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 152,
                        "name": "DECIMAL_HALFMULTIPLIER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 98,
                        "src": "1055:22:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1051:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1047:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 155,
                  "nodeType": "ExpressionStatement",
                  "src": "1047:30:1"
                }
              ]
            },
            "documentation": null,
            "id": 157,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_sqrt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 101,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 100,
                  "name": "x",
                  "nodeType": "VariableDeclaration",
                  "scope": 157,
                  "src": "858:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 99,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "858:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "857:8:1"
            },
            "returnParameters": {
              "id": 104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 103,
                  "name": "y",
                  "nodeType": "VariableDeclaration",
                  "scope": 157,
                  "src": "889:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 102,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "889:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "888:8:1"
            },
            "scope": 669,
            "src": "843:240:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 230,
              "nodeType": "Block",
              "src": "1182:320:1",
              "statements": [
                {
                  "assignments": [
                    167
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 167,
                      "name": "res",
                      "nodeType": "VariableDeclaration",
                      "scope": 230,
                      "src": "1189:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 166,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1189:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 169,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 168,
                    "name": "DECIMAL_MULTIPLIER",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 95,
                    "src": "1200:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1189:29:1"
                },
                {
                  "assignments": [
                    171
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 171,
                      "name": "t",
                      "nodeType": "VariableDeclaration",
                      "scope": 230,
                      "src": "1225:6:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 170,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1225:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 173,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 172,
                    "name": "z",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 161,
                    "src": "1234:1:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1225:10:1"
                },
                {
                  "assignments": [
                    175
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 175,
                      "name": "bit",
                      "nodeType": "VariableDeclaration",
                      "scope": 230,
                      "src": "1242:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 174,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1242:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 176,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1242:8:1"
                },
                {
                  "body": {
                    "id": 226,
                    "nodeType": "Block",
                    "src": "1270:210:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 182,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 178,
                            "name": "t",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 171,
                            "src": "1279:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 181,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 179,
                              "name": "z",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 161,
                              "src": "1283:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">>",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 180,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1288:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "1283:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1279:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 183,
                        "nodeType": "ExpressionStatement",
                        "src": "1279:10:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 191,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 184,
                            "name": "bit",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 175,
                            "src": "1298:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 190,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 185,
                              "name": "z",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 161,
                              "src": "1304:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "components": [
                                {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 188,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "id": 186,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 171,
                                    "src": "1309:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<<",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "hexValue": "31",
                                    "id": 187,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1314:1:1",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    },
                                    "value": "1"
                                  },
                                  "src": "1309:6:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 189,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "1308:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1304:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1298:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 192,
                        "nodeType": "ExpressionStatement",
                        "src": "1298:18:1"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 195,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 193,
                            "name": "bit",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 175,
                            "src": "1329:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 194,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1336:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "1329:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 206,
                        "nodeType": "IfStatement",
                        "src": "1325:63:1",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "id": 204,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "id": 196,
                              "name": "res",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 167,
                              "src": "1348:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 202,
                                  "name": "DECIMAL_MULTIPLIER",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 95,
                                  "src": "1369:18:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 199,
                                      "name": "x",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 159,
                                      "src": "1362:1:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 197,
                                      "name": "res",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 167,
                                      "src": "1354:3:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "id": 198,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "mul",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 1046,
                                    "src": "1354:7:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                      "typeString": "function (uint256,uint256) pure returns (uint256)"
                                    }
                                  },
                                  "id": 200,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1354:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 201,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "div",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 1070,
                                "src": "1354:14:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 203,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1354:34:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1348:40:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 205,
                          "nodeType": "ExpressionStatement",
                          "src": "1348:40:1"
                        }
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 209,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 207,
                            "name": "t",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 171,
                            "src": "1401:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 208,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1404:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1401:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 211,
                        "nodeType": "IfStatement",
                        "src": "1397:15:1",
                        "trueBody": {
                          "id": 210,
                          "nodeType": "Break",
                          "src": "1407:5:1"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 214,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 212,
                            "name": "z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 161,
                            "src": "1421:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 213,
                            "name": "t",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 171,
                            "src": "1425:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1421:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 215,
                        "nodeType": "ExpressionStatement",
                        "src": "1421:5:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 224,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 216,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 159,
                            "src": "1436:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 222,
                                "name": "DECIMAL_MULTIPLIER",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 95,
                                "src": "1453:18:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 219,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 159,
                                    "src": "1446:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 217,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 159,
                                    "src": "1440:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 218,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "mul",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 1046,
                                  "src": "1440:5:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 220,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1440:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 221,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "div",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 1070,
                              "src": "1440:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 223,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1440:32:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1436:36:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 225,
                        "nodeType": "ExpressionStatement",
                        "src": "1436:36:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1264:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "id": 227,
                  "nodeType": "WhileStatement",
                  "src": "1257:223:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 228,
                    "name": "res",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 167,
                    "src": "1493:3:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 165,
                  "id": 229,
                  "nodeType": "Return",
                  "src": "1486:10:1"
                }
              ]
            },
            "documentation": null,
            "id": 231,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_pown",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 159,
                  "name": "x",
                  "nodeType": "VariableDeclaration",
                  "scope": 231,
                  "src": "1138:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 158,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1138:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 161,
                  "name": "z",
                  "nodeType": "VariableDeclaration",
                  "scope": 231,
                  "src": "1146:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 160,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1146:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1137:16:1"
            },
            "returnParameters": {
              "id": 165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 164,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 231,
                  "src": "1176:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 163,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1176:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1175:6:1"
            },
            "scope": 669,
            "src": "1123:379:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "canonicalName": "Furance.token",
            "id": 248,
            "members": [
              {
                "constant": false,
                "id": 233,
                "name": "enabled",
                "nodeType": "VariableDeclaration",
                "scope": 248,
                "src": "1530:12:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 232,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1530:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 235,
                "name": "a",
                "nodeType": "VariableDeclaration",
                "scope": 248,
                "src": "1549:6:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 234,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1549:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 237,
                "name": "b",
                "nodeType": "VariableDeclaration",
                "scope": 248,
                "src": "1632:6:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 236,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1632:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 239,
                "name": "c",
                "nodeType": "VariableDeclaration",
                "scope": 248,
                "src": "1661:6:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 238,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1661:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 241,
                "name": "r",
                "nodeType": "VariableDeclaration",
                "scope": 248,
                "src": "1690:6:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 240,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1690:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 243,
                "name": "kappa_0",
                "nodeType": "VariableDeclaration",
                "scope": 248,
                "src": "1714:12:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 242,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1714:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 245,
                "name": "w",
                "nodeType": "VariableDeclaration",
                "scope": 248,
                "src": "1749:6:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 244,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1749:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 247,
                "name": "blockNumber",
                "nodeType": "VariableDeclaration",
                "scope": 248,
                "src": "1788:16:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 246,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1788:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "token",
            "nodeType": "StructDefinition",
            "scope": 669,
            "src": "1510:300:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 252,
            "name": "tokens",
            "nodeType": "VariableDeclaration",
            "scope": 669,
            "src": "1816:30:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_token_$248_storage_$",
              "typeString": "mapping(address => struct Furance.token)"
            },
            "typeName": {
              "id": 251,
              "keyType": {
                "id": 249,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1824:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1816:23:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_token_$248_storage_$",
                "typeString": "mapping(address => struct Furance.token)"
              },
              "valueType": {
                "contractScope": null,
                "id": 250,
                "name": "token",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 248,
                "src": "1833:5:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                  "typeString": "struct Furance.token"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 260,
              "nodeType": "Block",
              "src": "1876:43:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 256,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1891:13:1",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 255,
                          "name": "extinguished",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 85,
                          "src": "1892:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 254,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1853,
                        1854
                      ],
                      "referencedDeclaration": 1853,
                      "src": "1883:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1883:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 258,
                  "nodeType": "ExpressionStatement",
                  "src": "1883:22:1"
                },
                {
                  "id": 259,
                  "nodeType": "PlaceholderStatement",
                  "src": "1912:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 261,
            "name": "notExitgushed",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 253,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1876:0:1"
            },
            "src": "1853:66:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 276,
              "nodeType": "Block",
              "src": "1990:48:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 272,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 270,
                      "name": "extinguished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 85,
                      "src": "1997:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 271,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2010:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1997:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 273,
                  "nodeType": "ExpressionStatement",
                  "src": "1997:17:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 274,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2028:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 269,
                  "id": 275,
                  "nodeType": "Return",
                  "src": "2021:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 277,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 264,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 263,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1182,
                  "src": "1952:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1952:9:1"
              },
              {
                "arguments": null,
                "id": 266,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 265,
                  "name": "notExitgushed",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 261,
                  "src": "1962:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1962:13:1"
              }
            ],
            "name": "exitgush",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 262,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1942:2:1"
            },
            "returnParameters": {
              "id": 269,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 268,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 277,
                  "src": "1984:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 267,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1984:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1983:6:1"
            },
            "scope": 669,
            "src": "1925:113:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 301,
              "nodeType": "Block",
              "src": "2083:103:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 289,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 284,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2106:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 283,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2098:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2098:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 287,
                              "name": "pyro",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 89,
                              "src": "2120:4:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IPyroToken_$68",
                                "typeString": "contract IPyroToken"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IPyroToken_$68",
                                "typeString": "contract IPyroToken"
                              }
                            ],
                            "id": 286,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2112:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 288,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2112:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2098:27:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 282,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1853,
                        1854
                      ],
                      "referencedDeclaration": 1853,
                      "src": "2090:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 290,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2090:36:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 291,
                  "nodeType": "ExpressionStatement",
                  "src": "2090:36:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 292,
                      "name": "pyro",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 89,
                      "src": "2133:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IPyroToken_$68",
                        "typeString": "contract IPyroToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 294,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1850,
                            "src": "2151:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 295,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2151:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        ],
                        "id": 293,
                        "name": "IPyroToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68,
                        "src": "2140:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IPyroToken_$68_$",
                          "typeString": "type(contract IPyroToken)"
                        }
                      },
                      "id": 296,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2140:22:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IPyroToken_$68",
                        "typeString": "contract IPyroToken"
                      }
                    },
                    "src": "2133:29:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IPyroToken_$68",
                      "typeString": "contract IPyroToken"
                    }
                  },
                  "id": 298,
                  "nodeType": "ExpressionStatement",
                  "src": "2133:29:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 299,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2176:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 281,
                  "id": 300,
                  "nodeType": "Return",
                  "src": "2169:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 302,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bind",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 278,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2059:2:1"
            },
            "returnParameters": {
              "id": 281,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 280,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 302,
                  "src": "2077:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 279,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2077:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2076:6:1"
            },
            "scope": 669,
            "src": "2046:140:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 330,
              "nodeType": "Block",
              "src": "2253:99:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 328,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 321,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "components": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 318,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 309,
                                "name": "t",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 304,
                                "src": "2268:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                                  "typeString": "struct Furance.token storage pointer"
                                }
                              },
                              "id": 310,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "c",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 239,
                              "src": "2268:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 317,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 315,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 311,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 304,
                                    "src": "2274:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                                      "typeString": "struct Furance.token storage pointer"
                                    }
                                  },
                                  "id": 312,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "kappa_0",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 243,
                                  "src": "2274:9:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "*",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 313,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 304,
                                    "src": "2286:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                                      "typeString": "struct Furance.token storage pointer"
                                    }
                                  },
                                  "id": 314,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "w",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 245,
                                  "src": "2286:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2274:15:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "/",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 316,
                                "name": "DECIMAL_MULTIPLIER",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 95,
                                "src": "2292:18:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "2274:36:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2268:42:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 319,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2267:44:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 320,
                        "name": "DECIMAL_MULTIPLIER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "2314:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2267:65:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 326,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 322,
                              "name": "t",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 304,
                              "src": "2336:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                                "typeString": "struct Furance.token storage pointer"
                              }
                            },
                            "id": 323,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "b",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 237,
                            "src": "2336:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 324,
                              "name": "t",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 304,
                              "src": "2342:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                                "typeString": "struct Furance.token storage pointer"
                              }
                            },
                            "id": 325,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "w",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 245,
                            "src": "2342:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2336:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 327,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2335:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2267:79:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 308,
                  "id": 329,
                  "nodeType": "Return",
                  "src": "2260:86:1"
                }
              ]
            },
            "documentation": null,
            "id": 331,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_kappa",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 305,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 304,
                  "name": "t",
                  "nodeType": "VariableDeclaration",
                  "scope": 331,
                  "src": "2208:15:1",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                    "typeString": "struct Furance.token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 303,
                    "name": "token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 248,
                    "src": "2208:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                      "typeString": "struct Furance.token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2207:17:1"
            },
            "returnParameters": {
              "id": 308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 307,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 331,
                  "src": "2247:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 306,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2247:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2246:6:1"
            },
            "scope": 669,
            "src": "2192:160:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 412,
              "nodeType": "Block",
              "src": "2442:381:1",
              "statements": [
                {
                  "assignments": [
                    341
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 341,
                      "name": "t",
                      "nodeType": "VariableDeclaration",
                      "scope": 412,
                      "src": "2449:15:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                        "typeString": "struct Furance.token"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 340,
                        "name": "token",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 248,
                        "src": "2449:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 345,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 342,
                      "name": "tokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 252,
                      "src": "2467:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_token_$248_storage_$",
                        "typeString": "mapping(address => struct Furance.token storage ref)"
                      }
                    },
                    "id": 344,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 343,
                      "name": "token_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 333,
                      "src": "2474:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2467:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_token_$248_storage",
                      "typeString": "struct Furance.token storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2449:32:1"
                },
                {
                  "assignments": [
                    347
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 347,
                      "name": "b_i",
                      "nodeType": "VariableDeclaration",
                      "scope": 412,
                      "src": "2488:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 346,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2488:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 349,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 348,
                    "name": "value",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 335,
                    "src": "2499:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2488:16:1"
                },
                {
                  "assignments": [
                    351
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 351,
                      "name": "r_is",
                      "nodeType": "VariableDeclaration",
                      "scope": 412,
                      "src": "2511:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 350,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2511:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 365,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 364,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 362,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 352,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 341,
                          "src": "2523:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 353,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "r",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 241,
                        "src": "2523:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 355,
                            "name": "alpha",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92,
                            "src": "2535:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 360,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 356,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1840,
                                "src": "2542:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 357,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "number",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2542:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 358,
                                "name": "t",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 341,
                                "src": "2557:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                                  "typeString": "struct Furance.token storage pointer"
                                }
                              },
                              "id": 359,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "blockNumber",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 247,
                              "src": "2557:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2542:28:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 354,
                          "name": "_pown",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 231,
                          "src": "2529:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 361,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2529:42:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2523:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 363,
                      "name": "DECIMAL_MULTIPLIER",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 95,
                      "src": "2574:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2523:69:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2511:81:1"
                },
                {
                  "assignments": [
                    367
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 367,
                      "name": "r_i",
                      "nodeType": "VariableDeclaration",
                      "scope": 412,
                      "src": "2599:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 366,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2599:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 371,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 370,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 368,
                      "name": "r_is",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 351,
                      "src": "2610:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 369,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 335,
                      "src": "2617:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2610:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2599:23:1"
                },
                {
                  "assignments": [
                    373
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 373,
                      "name": "c_i",
                      "nodeType": "VariableDeclaration",
                      "scope": 412,
                      "src": "2629:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 372,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2629:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 387,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 384,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 374,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 341,
                          "src": "2640:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 375,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "a",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 235,
                        "src": "2640:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "components": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 382,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 377,
                                  "name": "r_i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 367,
                                  "src": "2651:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 376,
                                "name": "_sqrt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 157,
                                "src": "2645:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 378,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2645:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 380,
                                  "name": "r_is",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 351,
                                  "src": "2664:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 379,
                                "name": "_sqrt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 157,
                                "src": "2658:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 381,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2658:11:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2645:24:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 383,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2644:26:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2640:30:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 385,
                      "name": "DECIMAL_MULTIPLIER",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 95,
                      "src": "2672:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2640:50:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2629:61:1"
                },
                {
                  "assignments": [
                    389
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 389,
                      "name": "kappa",
                      "nodeType": "VariableDeclaration",
                      "scope": 412,
                      "src": "2697:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 388,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2697:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 393,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 391,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 341,
                        "src": "2717:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token storage pointer"
                        }
                      ],
                      "id": 390,
                      "name": "_kappa",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 331,
                      "src": "2710:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_token_$248_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct Furance.token storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2710:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2697:22:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 400,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 394,
                      "name": "c_i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 373,
                      "src": "2730:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 399,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 397,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 395,
                          "name": "b_i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 347,
                          "src": "2736:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 396,
                          "name": "kappa",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 389,
                          "src": "2740:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2736:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 398,
                        "name": "DECIMAL_MULTIPLIER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "2746:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2736:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2730:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 409,
                  "nodeType": "IfStatement",
                  "src": "2726:74:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 407,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 401,
                        "name": "c_i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 373,
                        "src": "2766:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 406,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 404,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 402,
                            "name": "b_i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 347,
                            "src": "2772:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 403,
                            "name": "kappa",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 389,
                            "src": "2776:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2772:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 405,
                          "name": "DECIMAL_MULTIPLIER",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 95,
                          "src": "2782:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2772:28:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2766:34:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 408,
                    "nodeType": "ExpressionStatement",
                    "src": "2766:34:1"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 410,
                    "name": "c_i",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 373,
                    "src": "2814:3:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 339,
                  "id": 411,
                  "nodeType": "Return",
                  "src": "2807:10:1"
                }
              ]
            },
            "documentation": null,
            "id": 413,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "estimateMintAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 336,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 333,
                  "name": "token_",
                  "nodeType": "VariableDeclaration",
                  "scope": 413,
                  "src": "2388:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 332,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2388:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 335,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 413,
                  "src": "2404:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 334,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2404:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2387:28:1"
            },
            "returnParameters": {
              "id": 339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 338,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 413,
                  "src": "2436:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 337,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2436:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2435:6:1"
            },
            "scope": 669,
            "src": "2360:463:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 451,
              "nodeType": "Block",
              "src": "2924:105:1",
              "statements": [
                {
                  "assignments": [
                    431
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 431,
                      "name": "t",
                      "nodeType": "VariableDeclaration",
                      "scope": 451,
                      "src": "2931:15:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                        "typeString": "struct Furance.token"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 430,
                        "name": "token",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 248,
                        "src": "2931:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 435,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 432,
                      "name": "tokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 252,
                      "src": "2949:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_token_$248_storage_$",
                        "typeString": "mapping(address => struct Furance.token storage ref)"
                      }
                    },
                    "id": 434,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 433,
                      "name": "token_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 415,
                      "src": "2956:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2949:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_token_$248_storage",
                      "typeString": "struct Furance.token storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2931:32:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 436,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 431,
                          "src": "2978:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 437,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "a",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 235,
                        "src": "2978:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 438,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 431,
                          "src": "2983:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 439,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "b",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 237,
                        "src": "2983:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 440,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 431,
                          "src": "2988:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 441,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "c",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 239,
                        "src": "2988:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 442,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 431,
                          "src": "2993:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 443,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "r",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 241,
                        "src": "2993:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 445,
                            "name": "t",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 431,
                            "src": "3005:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                              "typeString": "struct Furance.token storage pointer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                              "typeString": "struct Furance.token storage pointer"
                            }
                          ],
                          "id": 444,
                          "name": "_kappa",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 331,
                          "src": "2998:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_token_$248_storage_ptr_$returns$_t_uint256_$",
                            "typeString": "function (struct Furance.token storage pointer) view returns (uint256)"
                          }
                        },
                        "id": 446,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2998:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 447,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 431,
                          "src": "3009:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 448,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "blockNumber",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 247,
                        "src": "3009:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 449,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2977:46:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 429,
                  "id": 450,
                  "nodeType": "Return",
                  "src": "2970:53:1"
                }
              ]
            },
            "documentation": null,
            "id": 452,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenState",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 416,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 415,
                  "name": "token_",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "2852:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 414,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2852:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2851:16:1"
            },
            "returnParameters": {
              "id": 429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 418,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "2888:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 417,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2888:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 420,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "2894:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 419,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2894:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 422,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "2900:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 421,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2900:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 424,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "2906:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 423,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2906:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 426,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "2912:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 425,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2912:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 428,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "2918:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 427,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2918:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2887:36:1"
            },
            "scope": 669,
            "src": "2829:200:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 633,
              "nodeType": "Block",
              "src": "3136:804:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 468,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 466,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 456,
                          "src": "3151:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 467,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3159:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3151:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 465,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1853,
                        1854
                      ],
                      "referencedDeclaration": 1853,
                      "src": "3143:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 469,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3143:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 470,
                  "nodeType": "ExpressionStatement",
                  "src": "3143:18:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 476,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1850,
                              "src": "3204:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 477,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3204:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 479,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1877,
                                "src": "3224:4:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Furance_$669",
                                  "typeString": "contract Furance"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Furance_$669",
                                  "typeString": "contract Furance"
                                }
                              ],
                              "id": 478,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3216:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 480,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3216:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 481,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 456,
                            "src": "3231:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 473,
                                "name": "token_",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 454,
                                "src": "3183:6:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 472,
                              "name": "IERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1835,
                              "src": "3176:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC20_$1835_$",
                                "typeString": "type(contract IERC20)"
                              }
                            },
                            "id": 474,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3176:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$1835",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 475,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1797,
                          "src": "3176:27:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 482,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3176:61:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 471,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1853,
                        1854
                      ],
                      "referencedDeclaration": 1853,
                      "src": "3168:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3168:70:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 484,
                  "nodeType": "ExpressionStatement",
                  "src": "3168:70:1"
                },
                {
                  "assignments": [
                    486
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 486,
                      "name": "t",
                      "nodeType": "VariableDeclaration",
                      "scope": 633,
                      "src": "3245:15:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                        "typeString": "struct Furance.token"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 485,
                        "name": "token",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 248,
                        "src": "3245:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 490,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 487,
                      "name": "tokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 252,
                      "src": "3263:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_token_$248_storage_$",
                        "typeString": "mapping(address => struct Furance.token storage ref)"
                      }
                    },
                    "id": 489,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 488,
                      "name": "token_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 454,
                      "src": "3270:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3263:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_token_$248_storage",
                      "typeString": "struct Furance.token storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3245:32:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 492,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 486,
                          "src": "3292:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 493,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "enabled",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 233,
                        "src": "3292:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 491,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1853,
                        1854
                      ],
                      "referencedDeclaration": 1853,
                      "src": "3284:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 494,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3284:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 495,
                  "nodeType": "ExpressionStatement",
                  "src": "3284:18:1"
                },
                {
                  "assignments": [
                    497
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 497,
                      "name": "b_i",
                      "nodeType": "VariableDeclaration",
                      "scope": 633,
                      "src": "3309:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 496,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3309:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 499,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 498,
                    "name": "value",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 456,
                    "src": "3320:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3309:16:1"
                },
                {
                  "assignments": [
                    501
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 501,
                      "name": "r_is",
                      "nodeType": "VariableDeclaration",
                      "scope": 633,
                      "src": "3332:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 500,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3332:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 515,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 514,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 512,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 502,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 486,
                          "src": "3344:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 503,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "r",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 241,
                        "src": "3344:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 505,
                            "name": "alpha",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92,
                            "src": "3356:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 510,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 506,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1840,
                                "src": "3363:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 507,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "number",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3363:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 508,
                                "name": "t",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 486,
                                "src": "3378:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                                  "typeString": "struct Furance.token storage pointer"
                                }
                              },
                              "id": 509,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "blockNumber",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 247,
                              "src": "3378:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3363:28:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 504,
                          "name": "_pown",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 231,
                          "src": "3350:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 511,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3350:42:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3344:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 513,
                      "name": "DECIMAL_MULTIPLIER",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 95,
                      "src": "3395:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3344:69:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3332:81:1"
                },
                {
                  "assignments": [
                    517
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 517,
                      "name": "r_i",
                      "nodeType": "VariableDeclaration",
                      "scope": 633,
                      "src": "3420:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 516,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3420:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 521,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 520,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 518,
                      "name": "r_is",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 501,
                      "src": "3431:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 519,
                      "name": "b_i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 497,
                      "src": "3438:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3431:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3420:21:1"
                },
                {
                  "assignments": [
                    523
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 523,
                      "name": "c_i",
                      "nodeType": "VariableDeclaration",
                      "scope": 633,
                      "src": "3448:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 522,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3448:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 537,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 536,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 534,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 524,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 486,
                          "src": "3459:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 525,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "a",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 235,
                        "src": "3459:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "components": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 532,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 527,
                                  "name": "r_i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 517,
                                  "src": "3470:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 526,
                                "name": "_sqrt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 157,
                                "src": "3464:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 528,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3464:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 530,
                                  "name": "r_is",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 501,
                                  "src": "3483:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 529,
                                "name": "_sqrt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 157,
                                "src": "3477:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 531,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3477:11:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3464:24:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 533,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "3463:26:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3459:30:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 535,
                      "name": "DECIMAL_MULTIPLIER",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 95,
                      "src": "3492:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3459:51:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3448:62:1"
                },
                {
                  "assignments": [
                    539
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 539,
                      "name": "kappa",
                      "nodeType": "VariableDeclaration",
                      "scope": 633,
                      "src": "3517:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 538,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3517:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 543,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 541,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 486,
                        "src": "3537:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token storage pointer"
                        }
                      ],
                      "id": 540,
                      "name": "_kappa",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 331,
                      "src": "3530:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_token_$248_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct Furance.token storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 542,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3530:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3517:22:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 550,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 544,
                      "name": "c_i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 523,
                      "src": "3550:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 549,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 547,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 545,
                          "name": "b_i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 497,
                          "src": "3556:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 546,
                          "name": "kappa",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 539,
                          "src": "3560:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3556:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 548,
                        "name": "DECIMAL_MULTIPLIER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "3566:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3556:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3550:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 559,
                  "nodeType": "IfStatement",
                  "src": "3546:74:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 557,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 551,
                        "name": "c_i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 523,
                        "src": "3586:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 556,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 554,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 552,
                            "name": "b_i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 497,
                            "src": "3592:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 553,
                            "name": "kappa",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 539,
                            "src": "3596:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3592:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 555,
                          "name": "DECIMAL_MULTIPLIER",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 95,
                          "src": "3602:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3592:28:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3586:34:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 558,
                    "nodeType": "ExpressionStatement",
                    "src": "3586:34:1"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 563,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 561,
                          "name": "c_i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 523,
                          "src": "3635:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 562,
                          "name": "minimalPyroValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 458,
                          "src": "3642:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3635:23:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 560,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1853,
                        1854
                      ],
                      "referencedDeclaration": 1853,
                      "src": "3627:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 564,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3627:32:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 565,
                  "nodeType": "ExpressionStatement",
                  "src": "3627:32:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 570,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 566,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 486,
                        "src": "3666:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token storage pointer"
                        }
                      },
                      "id": 568,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "b",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 237,
                      "src": "3666:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 569,
                      "name": "b_i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 497,
                      "src": "3673:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3666:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 571,
                  "nodeType": "ExpressionStatement",
                  "src": "3666:10:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 576,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 572,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 486,
                        "src": "3683:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token storage pointer"
                        }
                      },
                      "id": 574,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "c",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 239,
                      "src": "3683:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 575,
                      "name": "c_i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 523,
                      "src": "3690:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3683:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 577,
                  "nodeType": "ExpressionStatement",
                  "src": "3683:10:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 582,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 578,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 486,
                        "src": "3700:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token storage pointer"
                        }
                      },
                      "id": 580,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "r",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 241,
                      "src": "3700:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 581,
                      "name": "r_i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 517,
                      "src": "3706:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3700:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 583,
                  "nodeType": "ExpressionStatement",
                  "src": "3700:9:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 584,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 486,
                        "src": "3716:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token storage pointer"
                        }
                      },
                      "id": 586,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "blockNumber",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 247,
                      "src": "3716:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 587,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1840,
                        "src": "3732:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 588,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "number",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3732:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3716:28:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 590,
                  "nodeType": "ExpressionStatement",
                  "src": "3716:28:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 599,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 595,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1850,
                            "src": "3780:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 596,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3780:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 592,
                              "name": "token_",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 454,
                              "src": "3762:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 591,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1835,
                            "src": "3755:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC20_$1835_$",
                              "typeString": "type(contract IERC20)"
                            }
                          },
                          "id": 593,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3755:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$1835",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 594,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1809,
                        "src": "3755:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 597,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3755:36:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 598,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3793:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3755:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 604,
                  "nodeType": "IfStatement",
                  "src": "3751:53:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 602,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 600,
                        "name": "ashes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 87,
                        "src": "3796:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 601,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3803:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "3796:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 603,
                    "nodeType": "ExpressionStatement",
                    "src": "3796:8:1"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 608,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1850,
                          "src": "3821:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 609,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3821:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 610,
                        "name": "c_i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 523,
                        "src": "3833:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 605,
                        "name": "pyro",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89,
                        "src": "3811:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IPyroToken_$68",
                          "typeString": "contract IPyroToken"
                        }
                      },
                      "id": 607,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 67,
                      "src": "3811:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 611,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3811:26:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 612,
                  "nodeType": "ExpressionStatement",
                  "src": "3811:26:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 616,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1173,
                          "src": "3854:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 617,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3854:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 620,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 618,
                          "name": "c_i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 523,
                          "src": "3863:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3130",
                          "id": 619,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3867:2:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "value": "10"
                        },
                        "src": "3863:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 613,
                        "name": "pyro",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89,
                        "src": "3844:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IPyroToken_$68",
                          "typeString": "contract IPyroToken"
                        }
                      },
                      "id": 615,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 67,
                      "src": "3844:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 621,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3844:26:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 622,
                  "nodeType": "ExpressionStatement",
                  "src": "3844:26:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 624,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1850,
                          "src": "3887:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 625,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3887:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 626,
                        "name": "token_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 454,
                        "src": "3899:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 627,
                        "name": "b_i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 497,
                        "src": "3907:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 628,
                        "name": "c_i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 523,
                        "src": "3912:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 623,
                      "name": "Burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 80,
                      "src": "3882:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256)"
                      }
                    },
                    "id": 629,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3882:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 630,
                  "nodeType": "EmitStatement",
                  "src": "3877:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 631,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3930:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 464,
                  "id": 632,
                  "nodeType": "Return",
                  "src": "3923:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 634,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 461,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 460,
                  "name": "notExitgushed",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 261,
                  "src": "3107:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3107:13:1"
              }
            ],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 459,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 454,
                  "name": "token_",
                  "nodeType": "VariableDeclaration",
                  "scope": 634,
                  "src": "3049:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 453,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3049:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 456,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 634,
                  "src": "3065:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 455,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3065:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 458,
                  "name": "minimalPyroValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 634,
                  "src": "3077:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 457,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3077:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3048:51:1"
            },
            "returnParameters": {
              "id": 464,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 463,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 634,
                  "src": "3130:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 462,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3129:6:1"
            },
            "scope": 669,
            "src": "3035:905:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 667,
              "nodeType": "Block",
              "src": "4055:78:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 665,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 651,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 252,
                        "src": "4062:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_token_$248_storage_$",
                          "typeString": "mapping(address => struct Furance.token storage ref)"
                        }
                      },
                      "id": 653,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 652,
                        "name": "token_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 636,
                        "src": "4069:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4062:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_token_$248_storage",
                        "typeString": "struct Furance.token storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 655,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4085:4:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "argumentTypes": null,
                          "id": 656,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 638,
                          "src": "4091:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 657,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4094:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 658,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4097:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 659,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4100:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "id": 660,
                          "name": "kappa0",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 640,
                          "src": "4103:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 661,
                          "name": "w",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 642,
                          "src": "4111:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 662,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1840,
                            "src": "4114:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 663,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "number",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4114:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 654,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 248,
                        "src": "4079:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_token_$248_storage_ptr_$",
                          "typeString": "type(struct Furance.token storage pointer)"
                        }
                      },
                      "id": 664,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4079:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_token_$248_memory",
                        "typeString": "struct Furance.token memory"
                      }
                    },
                    "src": "4062:65:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_token_$248_storage",
                      "typeString": "struct Furance.token storage ref"
                    }
                  },
                  "id": 666,
                  "nodeType": "ExpressionStatement",
                  "src": "4062:65:1"
                }
              ]
            },
            "documentation": null,
            "id": 668,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 645,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 644,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1182,
                  "src": "4016:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4016:9:1"
              },
              {
                "arguments": null,
                "id": 647,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 646,
                  "name": "notExitgushed",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 261,
                  "src": "4026:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4026:13:1"
              }
            ],
            "name": "addFuel",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 643,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 636,
                  "name": "token_",
                  "nodeType": "VariableDeclaration",
                  "scope": 668,
                  "src": "3964:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 635,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3964:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 638,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 668,
                  "src": "3980:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 637,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3980:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 640,
                  "name": "kappa0",
                  "nodeType": "VariableDeclaration",
                  "scope": 668,
                  "src": "3988:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 639,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3988:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 642,
                  "name": "w",
                  "nodeType": "VariableDeclaration",
                  "scope": 668,
                  "src": "4001:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 641,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4001:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3963:45:1"
            },
            "returnParameters": {
              "id": 650,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 649,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 668,
                  "src": "4049:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 648,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4049:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4048:6:1"
            },
            "scope": 669,
            "src": "3947:186:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 670,
        "src": "423:3715:1"
      }
    ],
    "src": "0:4138:1"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/snjax/Documents/projects/mixed/ethparis/pyrotoken/smart_contracts/contracts/Furance.sol",
    "exportedSymbols": {
      "Furance": [
        669
      ],
      "IPyroToken": [
        68
      ]
    },
    "id": 670,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 55,
        "literals": [
          "solidity",
          ">=",
          "0.5",
          ".2"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 56,
        "nodeType": "ImportDirective",
        "scope": 670,
        "sourceUnit": 1249,
        "src": "140:63:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol",
        "id": 57,
        "nodeType": "ImportDirective",
        "scope": 670,
        "sourceUnit": 1836,
        "src": "205:64:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 58,
        "nodeType": "ImportDirective",
        "scope": 670,
        "sourceUnit": 1140,
        "src": "271:59:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 68,
        "linearizedBaseContracts": [
          68
        ],
        "name": "IPyroToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 67,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 63,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "376:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 62,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "385:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 61,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "375:15:1"
            },
            "returnParameters": {
              "id": 66,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "408:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 64,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "408:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "407:6:1"
            },
            "scope": 68,
            "src": "362:52:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 670,
        "src": "336:81:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 69,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1248,
              "src": "443:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$1248",
                "typeString": "contract Ownable"
              }
            },
            "id": 70,
            "nodeType": "InheritanceSpecifier",
            "src": "443:7:1"
          }
        ],
        "contractDependencies": [
          1248
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 669,
        "linearizedBaseContracts": [
          669,
          1248
        ],
        "name": "Furance",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 80,
            "name": "Burn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 79,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 72,
                  "indexed": true,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "467:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 71,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "467:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 74,
                  "indexed": true,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "491:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 73,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "491:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 76,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "514:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 75,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "514:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 78,
                  "indexed": false,
                  "name": "pyroValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 80,
                  "src": "526:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 77,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "466:75:1"
            },
            "src": "456:86:1"
          },
          {
            "id": 83,
            "libraryName": {
              "contractScope": null,
              "id": 81,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1139,
              "src": "552:8:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$1139",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "546:24:1",
            "typeName": {
              "id": 82,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "565:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 85,
            "name": "extinguished",
            "nodeType": "VariableDeclaration",
            "scope": 669,
            "src": "578:24:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 84,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "578:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 87,
            "name": "ashes",
            "nodeType": "VariableDeclaration",
            "scope": 669,
            "src": "607:17:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 86,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "607:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 89,
            "name": "pyro",
            "nodeType": "VariableDeclaration",
            "scope": 669,
            "src": "629:22:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IPyroToken_$68",
              "typeString": "contract IPyroToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 88,
              "name": "IPyroToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 68,
              "src": "629:10:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IPyroToken_$68",
                "typeString": "contract IPyroToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 92,
            "name": "alpha",
            "nodeType": "VariableDeclaration",
            "scope": 669,
            "src": "658:40:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 90,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "658:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "393939383932353033373834383530393336",
              "id": 91,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "680:18:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_999892503784850936_by_1",
                "typeString": "int_const 999892503784850936"
              },
              "value": "999892503784850936"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 95,
            "name": "DECIMAL_MULTIPLIER",
            "nodeType": "VariableDeclaration",
            "scope": 669,
            "src": "752:37:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 93,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "752:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31653138",
              "id": 94,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "785:4:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              },
              "value": "1e18"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 98,
            "name": "DECIMAL_HALFMULTIPLIER",
            "nodeType": "VariableDeclaration",
            "scope": 669,
            "src": "794:40:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 96,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "794:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "316539",
              "id": 97,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "831:3:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000_by_1",
                "typeString": "int_const 1000000000"
              },
              "value": "1e9"
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 156,
              "nodeType": "Block",
              "src": "897:186:1",
              "statements": [
                {
                  "assignments": [
                    106
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 106,
                      "name": "z",
                      "nodeType": "VariableDeclaration",
                      "scope": 156,
                      "src": "904:6:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 105,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "904:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 113,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 109,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 107,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 100,
                            "src": "914:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 108,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "918:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "914:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 110,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "913:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">>",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "924:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "913:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "904:21:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 116,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 100,
                        "src": "937:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "939:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "937:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 117,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "944:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "937:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 125,
                  "nodeType": "IfStatement",
                  "src": "932:25:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 123,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 119,
                        "name": "z",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "947:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                          "typeString": "int_const 5789...(69 digits omitted)...9968"
                        },
                        "id": 122,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 120,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "951:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "323535",
                          "id": 121,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "954:3:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_255_by_1",
                            "typeString": "int_const 255"
                          },
                          "value": "255"
                        },
                        "src": "951:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                          "typeString": "int_const 5789...(69 digits omitted)...9968"
                        }
                      },
                      "src": "947:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 124,
                    "nodeType": "ExpressionStatement",
                    "src": "947:10:1"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 126,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 103,
                      "src": "964:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 127,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 100,
                      "src": "968:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "964:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 129,
                  "nodeType": "ExpressionStatement",
                  "src": "964:5:1"
                },
                {
                  "body": {
                    "id": 148,
                    "nodeType": "Block",
                    "src": "990:51:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 135,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 133,
                            "name": "y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 103,
                            "src": "999:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 134,
                            "name": "z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 106,
                            "src": "1003:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "999:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 136,
                        "nodeType": "ExpressionStatement",
                        "src": "999:5:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 146,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 137,
                            "name": "z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 106,
                            "src": "1013:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 145,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "components": [
                                {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 142,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 140,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "id": 138,
                                      "name": "x",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 100,
                                      "src": "1018:1:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "/",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "id": 139,
                                      "name": "z",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 106,
                                      "src": "1022:1:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "1018:5:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "+",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "id": 141,
                                    "name": "z",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 106,
                                    "src": "1026:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "1018:9:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 143,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "1017:11:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">>",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 144,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1032:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "1017:16:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1013:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 147,
                        "nodeType": "ExpressionStatement",
                        "src": "1013:20:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 132,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 130,
                      "name": "z",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 106,
                      "src": "983:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 131,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 103,
                      "src": "987:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "983:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 149,
                  "nodeType": "WhileStatement",
                  "src": "976:65:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 154,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 150,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 103,
                      "src": "1047:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 153,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 151,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 103,
                        "src": "1051:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 152,
                        "name": "DECIMAL_HALFMULTIPLIER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 98,
                        "src": "1055:22:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1051:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1047:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 155,
                  "nodeType": "ExpressionStatement",
                  "src": "1047:30:1"
                }
              ]
            },
            "documentation": null,
            "id": 157,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_sqrt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 101,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 100,
                  "name": "x",
                  "nodeType": "VariableDeclaration",
                  "scope": 157,
                  "src": "858:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 99,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "858:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "857:8:1"
            },
            "returnParameters": {
              "id": 104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 103,
                  "name": "y",
                  "nodeType": "VariableDeclaration",
                  "scope": 157,
                  "src": "889:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 102,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "889:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "888:8:1"
            },
            "scope": 669,
            "src": "843:240:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 230,
              "nodeType": "Block",
              "src": "1182:320:1",
              "statements": [
                {
                  "assignments": [
                    167
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 167,
                      "name": "res",
                      "nodeType": "VariableDeclaration",
                      "scope": 230,
                      "src": "1189:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 166,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1189:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 169,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 168,
                    "name": "DECIMAL_MULTIPLIER",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 95,
                    "src": "1200:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1189:29:1"
                },
                {
                  "assignments": [
                    171
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 171,
                      "name": "t",
                      "nodeType": "VariableDeclaration",
                      "scope": 230,
                      "src": "1225:6:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 170,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1225:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 173,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 172,
                    "name": "z",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 161,
                    "src": "1234:1:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1225:10:1"
                },
                {
                  "assignments": [
                    175
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 175,
                      "name": "bit",
                      "nodeType": "VariableDeclaration",
                      "scope": 230,
                      "src": "1242:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 174,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1242:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 176,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1242:8:1"
                },
                {
                  "body": {
                    "id": 226,
                    "nodeType": "Block",
                    "src": "1270:210:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 182,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 178,
                            "name": "t",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 171,
                            "src": "1279:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 181,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 179,
                              "name": "z",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 161,
                              "src": "1283:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">>",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "31",
                              "id": 180,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1288:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "1283:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1279:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 183,
                        "nodeType": "ExpressionStatement",
                        "src": "1279:10:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 191,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 184,
                            "name": "bit",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 175,
                            "src": "1298:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 190,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 185,
                              "name": "z",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 161,
                              "src": "1304:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "components": [
                                {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 188,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "id": 186,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 171,
                                    "src": "1309:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "<<",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "hexValue": "31",
                                    "id": 187,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "1314:1:1",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    },
                                    "value": "1"
                                  },
                                  "src": "1309:6:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 189,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "1308:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1304:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1298:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 192,
                        "nodeType": "ExpressionStatement",
                        "src": "1298:18:1"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 195,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 193,
                            "name": "bit",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 175,
                            "src": "1329:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 194,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1336:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "1329:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 206,
                        "nodeType": "IfStatement",
                        "src": "1325:63:1",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "id": 204,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "id": 196,
                              "name": "res",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 167,
                              "src": "1348:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 202,
                                  "name": "DECIMAL_MULTIPLIER",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 95,
                                  "src": "1369:18:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 199,
                                      "name": "x",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 159,
                                      "src": "1362:1:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 197,
                                      "name": "res",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 167,
                                      "src": "1354:3:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "id": 198,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "mul",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 1046,
                                    "src": "1354:7:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                      "typeString": "function (uint256,uint256) pure returns (uint256)"
                                    }
                                  },
                                  "id": 200,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1354:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 201,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "div",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 1070,
                                "src": "1354:14:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 203,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1354:34:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1348:40:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 205,
                          "nodeType": "ExpressionStatement",
                          "src": "1348:40:1"
                        }
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 209,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 207,
                            "name": "t",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 171,
                            "src": "1401:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 208,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1404:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1401:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 211,
                        "nodeType": "IfStatement",
                        "src": "1397:15:1",
                        "trueBody": {
                          "id": 210,
                          "nodeType": "Break",
                          "src": "1407:5:1"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 214,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 212,
                            "name": "z",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 161,
                            "src": "1421:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 213,
                            "name": "t",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 171,
                            "src": "1425:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1421:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 215,
                        "nodeType": "ExpressionStatement",
                        "src": "1421:5:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 224,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 216,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 159,
                            "src": "1436:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 222,
                                "name": "DECIMAL_MULTIPLIER",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 95,
                                "src": "1453:18:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 219,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 159,
                                    "src": "1446:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 217,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 159,
                                    "src": "1440:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 218,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "mul",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 1046,
                                  "src": "1440:5:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 220,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1440:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 221,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "div",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 1070,
                              "src": "1440:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 223,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1440:32:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1436:36:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 225,
                        "nodeType": "ExpressionStatement",
                        "src": "1436:36:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1264:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "id": 227,
                  "nodeType": "WhileStatement",
                  "src": "1257:223:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 228,
                    "name": "res",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 167,
                    "src": "1493:3:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 165,
                  "id": 229,
                  "nodeType": "Return",
                  "src": "1486:10:1"
                }
              ]
            },
            "documentation": null,
            "id": 231,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_pown",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 159,
                  "name": "x",
                  "nodeType": "VariableDeclaration",
                  "scope": 231,
                  "src": "1138:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 158,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1138:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 161,
                  "name": "z",
                  "nodeType": "VariableDeclaration",
                  "scope": 231,
                  "src": "1146:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 160,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1146:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1137:16:1"
            },
            "returnParameters": {
              "id": 165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 164,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 231,
                  "src": "1176:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 163,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1176:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1175:6:1"
            },
            "scope": 669,
            "src": "1123:379:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "canonicalName": "Furance.token",
            "id": 248,
            "members": [
              {
                "constant": false,
                "id": 233,
                "name": "enabled",
                "nodeType": "VariableDeclaration",
                "scope": 248,
                "src": "1530:12:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 232,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1530:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 235,
                "name": "a",
                "nodeType": "VariableDeclaration",
                "scope": 248,
                "src": "1549:6:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 234,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1549:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 237,
                "name": "b",
                "nodeType": "VariableDeclaration",
                "scope": 248,
                "src": "1632:6:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 236,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1632:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 239,
                "name": "c",
                "nodeType": "VariableDeclaration",
                "scope": 248,
                "src": "1661:6:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 238,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1661:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 241,
                "name": "r",
                "nodeType": "VariableDeclaration",
                "scope": 248,
                "src": "1690:6:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 240,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1690:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 243,
                "name": "kappa_0",
                "nodeType": "VariableDeclaration",
                "scope": 248,
                "src": "1714:12:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 242,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1714:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 245,
                "name": "w",
                "nodeType": "VariableDeclaration",
                "scope": 248,
                "src": "1749:6:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 244,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1749:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 247,
                "name": "blockNumber",
                "nodeType": "VariableDeclaration",
                "scope": 248,
                "src": "1788:16:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 246,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "1788:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "token",
            "nodeType": "StructDefinition",
            "scope": 669,
            "src": "1510:300:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 252,
            "name": "tokens",
            "nodeType": "VariableDeclaration",
            "scope": 669,
            "src": "1816:30:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_token_$248_storage_$",
              "typeString": "mapping(address => struct Furance.token)"
            },
            "typeName": {
              "id": 251,
              "keyType": {
                "id": 249,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1824:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1816:23:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_token_$248_storage_$",
                "typeString": "mapping(address => struct Furance.token)"
              },
              "valueType": {
                "contractScope": null,
                "id": 250,
                "name": "token",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 248,
                "src": "1833:5:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                  "typeString": "struct Furance.token"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 260,
              "nodeType": "Block",
              "src": "1876:43:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 256,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1891:13:1",
                        "subExpression": {
                          "argumentTypes": null,
                          "id": 255,
                          "name": "extinguished",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 85,
                          "src": "1892:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 254,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1853,
                        1854
                      ],
                      "referencedDeclaration": 1853,
                      "src": "1883:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1883:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 258,
                  "nodeType": "ExpressionStatement",
                  "src": "1883:22:1"
                },
                {
                  "id": 259,
                  "nodeType": "PlaceholderStatement",
                  "src": "1912:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 261,
            "name": "notExitgushed",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 253,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1876:0:1"
            },
            "src": "1853:66:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 276,
              "nodeType": "Block",
              "src": "1990:48:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 272,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 270,
                      "name": "extinguished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 85,
                      "src": "1997:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 271,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2010:4:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1997:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 273,
                  "nodeType": "ExpressionStatement",
                  "src": "1997:17:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 274,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2028:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 269,
                  "id": 275,
                  "nodeType": "Return",
                  "src": "2021:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 277,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 264,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 263,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1182,
                  "src": "1952:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1952:9:1"
              },
              {
                "arguments": null,
                "id": 266,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 265,
                  "name": "notExitgushed",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 261,
                  "src": "1962:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1962:13:1"
              }
            ],
            "name": "exitgush",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 262,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1942:2:1"
            },
            "returnParameters": {
              "id": 269,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 268,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 277,
                  "src": "1984:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 267,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1984:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1983:6:1"
            },
            "scope": 669,
            "src": "1925:113:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 301,
              "nodeType": "Block",
              "src": "2083:103:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 289,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 284,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2106:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 283,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2098:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 285,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2098:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 287,
                              "name": "pyro",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 89,
                              "src": "2120:4:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IPyroToken_$68",
                                "typeString": "contract IPyroToken"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IPyroToken_$68",
                                "typeString": "contract IPyroToken"
                              }
                            ],
                            "id": 286,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2112:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 288,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2112:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2098:27:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 282,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1853,
                        1854
                      ],
                      "referencedDeclaration": 1853,
                      "src": "2090:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 290,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2090:36:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 291,
                  "nodeType": "ExpressionStatement",
                  "src": "2090:36:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 292,
                      "name": "pyro",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 89,
                      "src": "2133:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IPyroToken_$68",
                        "typeString": "contract IPyroToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 294,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1850,
                            "src": "2151:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 295,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2151:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        ],
                        "id": 293,
                        "name": "IPyroToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68,
                        "src": "2140:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IPyroToken_$68_$",
                          "typeString": "type(contract IPyroToken)"
                        }
                      },
                      "id": 296,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2140:22:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IPyroToken_$68",
                        "typeString": "contract IPyroToken"
                      }
                    },
                    "src": "2133:29:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IPyroToken_$68",
                      "typeString": "contract IPyroToken"
                    }
                  },
                  "id": 298,
                  "nodeType": "ExpressionStatement",
                  "src": "2133:29:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 299,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2176:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 281,
                  "id": 300,
                  "nodeType": "Return",
                  "src": "2169:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 302,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "bind",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 278,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2059:2:1"
            },
            "returnParameters": {
              "id": 281,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 280,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 302,
                  "src": "2077:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 279,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2077:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2076:6:1"
            },
            "scope": 669,
            "src": "2046:140:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 330,
              "nodeType": "Block",
              "src": "2253:99:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 328,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 321,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "components": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 318,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 309,
                                "name": "t",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 304,
                                "src": "2268:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                                  "typeString": "struct Furance.token storage pointer"
                                }
                              },
                              "id": 310,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "c",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 239,
                              "src": "2268:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 317,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 315,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 311,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 304,
                                    "src": "2274:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                                      "typeString": "struct Furance.token storage pointer"
                                    }
                                  },
                                  "id": 312,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "kappa_0",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 243,
                                  "src": "2274:9:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "*",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 313,
                                    "name": "t",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 304,
                                    "src": "2286:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                                      "typeString": "struct Furance.token storage pointer"
                                    }
                                  },
                                  "id": 314,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "w",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 245,
                                  "src": "2286:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2274:15:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "/",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 316,
                                "name": "DECIMAL_MULTIPLIER",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 95,
                                "src": "2292:18:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "2274:36:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2268:42:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 319,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2267:44:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 320,
                        "name": "DECIMAL_MULTIPLIER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "2314:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2267:65:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 326,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 322,
                              "name": "t",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 304,
                              "src": "2336:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                                "typeString": "struct Furance.token storage pointer"
                              }
                            },
                            "id": 323,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "b",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 237,
                            "src": "2336:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 324,
                              "name": "t",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 304,
                              "src": "2342:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                                "typeString": "struct Furance.token storage pointer"
                              }
                            },
                            "id": 325,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "w",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 245,
                            "src": "2342:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2336:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 327,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2335:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2267:79:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 308,
                  "id": 329,
                  "nodeType": "Return",
                  "src": "2260:86:1"
                }
              ]
            },
            "documentation": null,
            "id": 331,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_kappa",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 305,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 304,
                  "name": "t",
                  "nodeType": "VariableDeclaration",
                  "scope": 331,
                  "src": "2208:15:1",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                    "typeString": "struct Furance.token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 303,
                    "name": "token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 248,
                    "src": "2208:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                      "typeString": "struct Furance.token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2207:17:1"
            },
            "returnParameters": {
              "id": 308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 307,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 331,
                  "src": "2247:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 306,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2247:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2246:6:1"
            },
            "scope": 669,
            "src": "2192:160:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 412,
              "nodeType": "Block",
              "src": "2442:381:1",
              "statements": [
                {
                  "assignments": [
                    341
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 341,
                      "name": "t",
                      "nodeType": "VariableDeclaration",
                      "scope": 412,
                      "src": "2449:15:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                        "typeString": "struct Furance.token"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 340,
                        "name": "token",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 248,
                        "src": "2449:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 345,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 342,
                      "name": "tokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 252,
                      "src": "2467:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_token_$248_storage_$",
                        "typeString": "mapping(address => struct Furance.token storage ref)"
                      }
                    },
                    "id": 344,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 343,
                      "name": "token_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 333,
                      "src": "2474:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2467:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_token_$248_storage",
                      "typeString": "struct Furance.token storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2449:32:1"
                },
                {
                  "assignments": [
                    347
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 347,
                      "name": "b_i",
                      "nodeType": "VariableDeclaration",
                      "scope": 412,
                      "src": "2488:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 346,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2488:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 349,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 348,
                    "name": "value",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 335,
                    "src": "2499:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2488:16:1"
                },
                {
                  "assignments": [
                    351
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 351,
                      "name": "r_is",
                      "nodeType": "VariableDeclaration",
                      "scope": 412,
                      "src": "2511:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 350,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2511:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 365,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 364,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 362,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 352,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 341,
                          "src": "2523:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 353,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "r",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 241,
                        "src": "2523:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 355,
                            "name": "alpha",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92,
                            "src": "2535:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 360,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 356,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1840,
                                "src": "2542:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 357,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "number",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2542:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 358,
                                "name": "t",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 341,
                                "src": "2557:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                                  "typeString": "struct Furance.token storage pointer"
                                }
                              },
                              "id": 359,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "blockNumber",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 247,
                              "src": "2557:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2542:28:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 354,
                          "name": "_pown",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 231,
                          "src": "2529:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 361,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2529:42:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2523:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 363,
                      "name": "DECIMAL_MULTIPLIER",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 95,
                      "src": "2574:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2523:69:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2511:81:1"
                },
                {
                  "assignments": [
                    367
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 367,
                      "name": "r_i",
                      "nodeType": "VariableDeclaration",
                      "scope": 412,
                      "src": "2599:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 366,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2599:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 371,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 370,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 368,
                      "name": "r_is",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 351,
                      "src": "2610:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 369,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 335,
                      "src": "2617:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2610:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2599:23:1"
                },
                {
                  "assignments": [
                    373
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 373,
                      "name": "c_i",
                      "nodeType": "VariableDeclaration",
                      "scope": 412,
                      "src": "2629:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 372,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2629:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 387,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 384,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 374,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 341,
                          "src": "2640:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 375,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "a",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 235,
                        "src": "2640:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "components": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 382,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 377,
                                  "name": "r_i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 367,
                                  "src": "2651:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 376,
                                "name": "_sqrt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 157,
                                "src": "2645:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 378,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2645:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 380,
                                  "name": "r_is",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 351,
                                  "src": "2664:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 379,
                                "name": "_sqrt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 157,
                                "src": "2658:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 381,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2658:11:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2645:24:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 383,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2644:26:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2640:30:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 385,
                      "name": "DECIMAL_MULTIPLIER",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 95,
                      "src": "2672:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2640:50:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2629:61:1"
                },
                {
                  "assignments": [
                    389
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 389,
                      "name": "kappa",
                      "nodeType": "VariableDeclaration",
                      "scope": 412,
                      "src": "2697:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 388,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2697:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 393,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 391,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 341,
                        "src": "2717:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token storage pointer"
                        }
                      ],
                      "id": 390,
                      "name": "_kappa",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 331,
                      "src": "2710:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_token_$248_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct Furance.token storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2710:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2697:22:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 400,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 394,
                      "name": "c_i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 373,
                      "src": "2730:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 399,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 397,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 395,
                          "name": "b_i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 347,
                          "src": "2736:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 396,
                          "name": "kappa",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 389,
                          "src": "2740:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2736:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 398,
                        "name": "DECIMAL_MULTIPLIER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "2746:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2736:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2730:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 409,
                  "nodeType": "IfStatement",
                  "src": "2726:74:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 407,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 401,
                        "name": "c_i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 373,
                        "src": "2766:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 406,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 404,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 402,
                            "name": "b_i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 347,
                            "src": "2772:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 403,
                            "name": "kappa",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 389,
                            "src": "2776:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2772:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 405,
                          "name": "DECIMAL_MULTIPLIER",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 95,
                          "src": "2782:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2772:28:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2766:34:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 408,
                    "nodeType": "ExpressionStatement",
                    "src": "2766:34:1"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 410,
                    "name": "c_i",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 373,
                    "src": "2814:3:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 339,
                  "id": 411,
                  "nodeType": "Return",
                  "src": "2807:10:1"
                }
              ]
            },
            "documentation": null,
            "id": 413,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "estimateMintAmount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 336,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 333,
                  "name": "token_",
                  "nodeType": "VariableDeclaration",
                  "scope": 413,
                  "src": "2388:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 332,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2388:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 335,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 413,
                  "src": "2404:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 334,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2404:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2387:28:1"
            },
            "returnParameters": {
              "id": 339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 338,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 413,
                  "src": "2436:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 337,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2436:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2435:6:1"
            },
            "scope": 669,
            "src": "2360:463:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 451,
              "nodeType": "Block",
              "src": "2924:105:1",
              "statements": [
                {
                  "assignments": [
                    431
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 431,
                      "name": "t",
                      "nodeType": "VariableDeclaration",
                      "scope": 451,
                      "src": "2931:15:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                        "typeString": "struct Furance.token"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 430,
                        "name": "token",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 248,
                        "src": "2931:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 435,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 432,
                      "name": "tokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 252,
                      "src": "2949:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_token_$248_storage_$",
                        "typeString": "mapping(address => struct Furance.token storage ref)"
                      }
                    },
                    "id": 434,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 433,
                      "name": "token_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 415,
                      "src": "2956:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2949:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_token_$248_storage",
                      "typeString": "struct Furance.token storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2931:32:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 436,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 431,
                          "src": "2978:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 437,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "a",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 235,
                        "src": "2978:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 438,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 431,
                          "src": "2983:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 439,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "b",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 237,
                        "src": "2983:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 440,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 431,
                          "src": "2988:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 441,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "c",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 239,
                        "src": "2988:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 442,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 431,
                          "src": "2993:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 443,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "r",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 241,
                        "src": "2993:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 445,
                            "name": "t",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 431,
                            "src": "3005:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                              "typeString": "struct Furance.token storage pointer"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                              "typeString": "struct Furance.token storage pointer"
                            }
                          ],
                          "id": 444,
                          "name": "_kappa",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 331,
                          "src": "2998:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_token_$248_storage_ptr_$returns$_t_uint256_$",
                            "typeString": "function (struct Furance.token storage pointer) view returns (uint256)"
                          }
                        },
                        "id": 446,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2998:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 447,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 431,
                          "src": "3009:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 448,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "blockNumber",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 247,
                        "src": "3009:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 449,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2977:46:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 429,
                  "id": 450,
                  "nodeType": "Return",
                  "src": "2970:53:1"
                }
              ]
            },
            "documentation": null,
            "id": 452,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenState",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 416,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 415,
                  "name": "token_",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "2852:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 414,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2852:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2851:16:1"
            },
            "returnParameters": {
              "id": 429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 418,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "2888:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 417,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2888:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 420,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "2894:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 419,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2894:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 422,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "2900:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 421,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2900:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 424,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "2906:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 423,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2906:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 426,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "2912:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 425,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2912:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 428,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 452,
                  "src": "2918:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 427,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2918:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2887:36:1"
            },
            "scope": 669,
            "src": "2829:200:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 633,
              "nodeType": "Block",
              "src": "3136:804:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 468,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 466,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 456,
                          "src": "3151:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 467,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3159:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3151:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 465,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1853,
                        1854
                      ],
                      "referencedDeclaration": 1853,
                      "src": "3143:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 469,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3143:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 470,
                  "nodeType": "ExpressionStatement",
                  "src": "3143:18:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 476,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1850,
                              "src": "3204:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 477,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3204:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 479,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1877,
                                "src": "3224:4:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Furance_$669",
                                  "typeString": "contract Furance"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Furance_$669",
                                  "typeString": "contract Furance"
                                }
                              ],
                              "id": 478,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3216:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 480,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3216:13:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 481,
                            "name": "value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 456,
                            "src": "3231:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 473,
                                "name": "token_",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 454,
                                "src": "3183:6:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 472,
                              "name": "IERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1835,
                              "src": "3176:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IERC20_$1835_$",
                                "typeString": "type(contract IERC20)"
                              }
                            },
                            "id": 474,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3176:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IERC20_$1835",
                              "typeString": "contract IERC20"
                            }
                          },
                          "id": 475,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1797,
                          "src": "3176:27:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 482,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3176:61:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 471,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1853,
                        1854
                      ],
                      "referencedDeclaration": 1853,
                      "src": "3168:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 483,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3168:70:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 484,
                  "nodeType": "ExpressionStatement",
                  "src": "3168:70:1"
                },
                {
                  "assignments": [
                    486
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 486,
                      "name": "t",
                      "nodeType": "VariableDeclaration",
                      "scope": 633,
                      "src": "3245:15:1",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                        "typeString": "struct Furance.token"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 485,
                        "name": "token",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 248,
                        "src": "3245:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 490,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 487,
                      "name": "tokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 252,
                      "src": "3263:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_token_$248_storage_$",
                        "typeString": "mapping(address => struct Furance.token storage ref)"
                      }
                    },
                    "id": 489,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 488,
                      "name": "token_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 454,
                      "src": "3270:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3263:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_token_$248_storage",
                      "typeString": "struct Furance.token storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3245:32:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 492,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 486,
                          "src": "3292:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 493,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "enabled",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 233,
                        "src": "3292:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 491,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1853,
                        1854
                      ],
                      "referencedDeclaration": 1853,
                      "src": "3284:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 494,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3284:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 495,
                  "nodeType": "ExpressionStatement",
                  "src": "3284:18:1"
                },
                {
                  "assignments": [
                    497
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 497,
                      "name": "b_i",
                      "nodeType": "VariableDeclaration",
                      "scope": 633,
                      "src": "3309:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 496,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3309:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 499,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 498,
                    "name": "value",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 456,
                    "src": "3320:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3309:16:1"
                },
                {
                  "assignments": [
                    501
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 501,
                      "name": "r_is",
                      "nodeType": "VariableDeclaration",
                      "scope": 633,
                      "src": "3332:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 500,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3332:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 515,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 514,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 512,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 502,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 486,
                          "src": "3344:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 503,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "r",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 241,
                        "src": "3344:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 505,
                            "name": "alpha",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 92,
                            "src": "3356:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 510,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 506,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1840,
                                "src": "3363:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 507,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "number",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3363:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 508,
                                "name": "t",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 486,
                                "src": "3378:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                                  "typeString": "struct Furance.token storage pointer"
                                }
                              },
                              "id": 509,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "blockNumber",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 247,
                              "src": "3378:13:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3363:28:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 504,
                          "name": "_pown",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 231,
                          "src": "3350:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 511,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3350:42:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3344:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 513,
                      "name": "DECIMAL_MULTIPLIER",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 95,
                      "src": "3395:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3344:69:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3332:81:1"
                },
                {
                  "assignments": [
                    517
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 517,
                      "name": "r_i",
                      "nodeType": "VariableDeclaration",
                      "scope": 633,
                      "src": "3420:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 516,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3420:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 521,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 520,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 518,
                      "name": "r_is",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 501,
                      "src": "3431:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 519,
                      "name": "b_i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 497,
                      "src": "3438:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3431:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3420:21:1"
                },
                {
                  "assignments": [
                    523
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 523,
                      "name": "c_i",
                      "nodeType": "VariableDeclaration",
                      "scope": 633,
                      "src": "3448:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 522,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3448:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 537,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 536,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 534,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 524,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 486,
                          "src": "3459:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                            "typeString": "struct Furance.token storage pointer"
                          }
                        },
                        "id": 525,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "a",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 235,
                        "src": "3459:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "components": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 532,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 527,
                                  "name": "r_i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 517,
                                  "src": "3470:3:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 526,
                                "name": "_sqrt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 157,
                                "src": "3464:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 528,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3464:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 530,
                                  "name": "r_is",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 501,
                                  "src": "3483:4:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 529,
                                "name": "_sqrt",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 157,
                                "src": "3477:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$",
                                  "typeString": "function (uint256) pure returns (uint256)"
                                }
                              },
                              "id": 531,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3477:11:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3464:24:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 533,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "3463:26:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3459:30:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 535,
                      "name": "DECIMAL_MULTIPLIER",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 95,
                      "src": "3492:18:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3459:51:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3448:62:1"
                },
                {
                  "assignments": [
                    539
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 539,
                      "name": "kappa",
                      "nodeType": "VariableDeclaration",
                      "scope": 633,
                      "src": "3517:10:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 538,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3517:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 543,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 541,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 486,
                        "src": "3537:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token storage pointer"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token storage pointer"
                        }
                      ],
                      "id": 540,
                      "name": "_kappa",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 331,
                      "src": "3530:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_token_$248_storage_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct Furance.token storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 542,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3530:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3517:22:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 550,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 544,
                      "name": "c_i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 523,
                      "src": "3550:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 549,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 547,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 545,
                          "name": "b_i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 497,
                          "src": "3556:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 546,
                          "name": "kappa",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 539,
                          "src": "3560:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3556:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 548,
                        "name": "DECIMAL_MULTIPLIER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 95,
                        "src": "3566:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3556:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3550:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 559,
                  "nodeType": "IfStatement",
                  "src": "3546:74:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 557,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 551,
                        "name": "c_i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 523,
                        "src": "3586:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 556,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 554,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 552,
                            "name": "b_i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 497,
                            "src": "3592:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 553,
                            "name": "kappa",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 539,
                            "src": "3596:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3592:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 555,
                          "name": "DECIMAL_MULTIPLIER",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 95,
                          "src": "3602:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3592:28:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3586:34:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 558,
                    "nodeType": "ExpressionStatement",
                    "src": "3586:34:1"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 563,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 561,
                          "name": "c_i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 523,
                          "src": "3635:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 562,
                          "name": "minimalPyroValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 458,
                          "src": "3642:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3635:23:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 560,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1853,
                        1854
                      ],
                      "referencedDeclaration": 1853,
                      "src": "3627:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 564,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3627:32:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 565,
                  "nodeType": "ExpressionStatement",
                  "src": "3627:32:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 570,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 566,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 486,
                        "src": "3666:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token storage pointer"
                        }
                      },
                      "id": 568,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "b",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 237,
                      "src": "3666:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 569,
                      "name": "b_i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 497,
                      "src": "3673:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3666:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 571,
                  "nodeType": "ExpressionStatement",
                  "src": "3666:10:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 576,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 572,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 486,
                        "src": "3683:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token storage pointer"
                        }
                      },
                      "id": 574,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "c",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 239,
                      "src": "3683:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 575,
                      "name": "c_i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 523,
                      "src": "3690:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3683:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 577,
                  "nodeType": "ExpressionStatement",
                  "src": "3683:10:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 582,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 578,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 486,
                        "src": "3700:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token storage pointer"
                        }
                      },
                      "id": 580,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "r",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 241,
                      "src": "3700:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 581,
                      "name": "r_i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 517,
                      "src": "3706:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3700:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 583,
                  "nodeType": "ExpressionStatement",
                  "src": "3700:9:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 584,
                        "name": "t",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 486,
                        "src": "3716:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_token_$248_storage_ptr",
                          "typeString": "struct Furance.token storage pointer"
                        }
                      },
                      "id": 586,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "blockNumber",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 247,
                      "src": "3716:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 587,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1840,
                        "src": "3732:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 588,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "number",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3732:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3716:28:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 590,
                  "nodeType": "ExpressionStatement",
                  "src": "3716:28:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 599,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 595,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1850,
                            "src": "3780:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 596,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3780:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 592,
                              "name": "token_",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 454,
                              "src": "3762:6:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 591,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1835,
                            "src": "3755:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC20_$1835_$",
                              "typeString": "type(contract IERC20)"
                            }
                          },
                          "id": 593,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3755:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$1835",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 594,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1809,
                        "src": "3755:24:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 597,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3755:36:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 598,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3793:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3755:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 604,
                  "nodeType": "IfStatement",
                  "src": "3751:53:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 602,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "id": 600,
                        "name": "ashes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 87,
                        "src": "3796:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 601,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3803:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "3796:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 603,
                    "nodeType": "ExpressionStatement",
                    "src": "3796:8:1"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 608,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1850,
                          "src": "3821:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 609,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3821:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 610,
                        "name": "c_i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 523,
                        "src": "3833:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 605,
                        "name": "pyro",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89,
                        "src": "3811:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IPyroToken_$68",
                          "typeString": "contract IPyroToken"
                        }
                      },
                      "id": 607,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 67,
                      "src": "3811:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 611,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3811:26:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 612,
                  "nodeType": "ExpressionStatement",
                  "src": "3811:26:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 616,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1173,
                          "src": "3854:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                            "typeString": "function () view returns (address)"
                          }
                        },
                        "id": 617,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3854:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 620,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 618,
                          "name": "c_i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 523,
                          "src": "3863:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3130",
                          "id": 619,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3867:2:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "value": "10"
                        },
                        "src": "3863:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 613,
                        "name": "pyro",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89,
                        "src": "3844:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IPyroToken_$68",
                          "typeString": "contract IPyroToken"
                        }
                      },
                      "id": 615,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 67,
                      "src": "3844:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 621,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3844:26:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 622,
                  "nodeType": "ExpressionStatement",
                  "src": "3844:26:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 624,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1850,
                          "src": "3887:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 625,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3887:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 626,
                        "name": "token_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 454,
                        "src": "3899:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 627,
                        "name": "b_i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 497,
                        "src": "3907:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 628,
                        "name": "c_i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 523,
                        "src": "3912:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 623,
                      "name": "Burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 80,
                      "src": "3882:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256)"
                      }
                    },
                    "id": 629,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3882:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 630,
                  "nodeType": "EmitStatement",
                  "src": "3877:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 631,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3930:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 464,
                  "id": 632,
                  "nodeType": "Return",
                  "src": "3923:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 634,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 461,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 460,
                  "name": "notExitgushed",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 261,
                  "src": "3107:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3107:13:1"
              }
            ],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 459,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 454,
                  "name": "token_",
                  "nodeType": "VariableDeclaration",
                  "scope": 634,
                  "src": "3049:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 453,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3049:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 456,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 634,
                  "src": "3065:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 455,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3065:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 458,
                  "name": "minimalPyroValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 634,
                  "src": "3077:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 457,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3077:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3048:51:1"
            },
            "returnParameters": {
              "id": 464,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 463,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 634,
                  "src": "3130:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 462,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3130:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3129:6:1"
            },
            "scope": 669,
            "src": "3035:905:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 667,
              "nodeType": "Block",
              "src": "4055:78:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 665,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 651,
                        "name": "tokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 252,
                        "src": "4062:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_token_$248_storage_$",
                          "typeString": "mapping(address => struct Furance.token storage ref)"
                        }
                      },
                      "id": 653,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 652,
                        "name": "token_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 636,
                        "src": "4069:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "4062:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_token_$248_storage",
                        "typeString": "struct Furance.token storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 655,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4085:4:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        {
                          "argumentTypes": null,
                          "id": 656,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 638,
                          "src": "4091:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 657,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4094:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 658,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4097:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 659,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4100:1:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "argumentTypes": null,
                          "id": 660,
                          "name": "kappa0",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 640,
                          "src": "4103:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 661,
                          "name": "w",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 642,
                          "src": "4111:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 662,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1840,
                            "src": "4114:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 663,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "number",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4114:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 654,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 248,
                        "src": "4079:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_token_$248_storage_ptr_$",
                          "typeString": "type(struct Furance.token storage pointer)"
                        }
                      },
                      "id": 664,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4079:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_token_$248_memory",
                        "typeString": "struct Furance.token memory"
                      }
                    },
                    "src": "4062:65:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_token_$248_storage",
                      "typeString": "struct Furance.token storage ref"
                    }
                  },
                  "id": 666,
                  "nodeType": "ExpressionStatement",
                  "src": "4062:65:1"
                }
              ]
            },
            "documentation": null,
            "id": 668,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 645,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 644,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1182,
                  "src": "4016:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4016:9:1"
              },
              {
                "arguments": null,
                "id": 647,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 646,
                  "name": "notExitgushed",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 261,
                  "src": "4026:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4026:13:1"
              }
            ],
            "name": "addFuel",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 643,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 636,
                  "name": "token_",
                  "nodeType": "VariableDeclaration",
                  "scope": 668,
                  "src": "3964:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 635,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3964:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 638,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 668,
                  "src": "3980:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 637,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3980:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 640,
                  "name": "kappa0",
                  "nodeType": "VariableDeclaration",
                  "scope": 668,
                  "src": "3988:11:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 639,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3988:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 642,
                  "name": "w",
                  "nodeType": "VariableDeclaration",
                  "scope": 668,
                  "src": "4001:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 641,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4001:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3963:45:1"
            },
            "returnParameters": {
              "id": 650,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 649,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 668,
                  "src": "4049:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 648,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4049:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4048:6:1"
            },
            "scope": 669,
            "src": "3947:186:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 670,
        "src": "423:3715:1"
      }
    ],
    "src": "0:4138:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.2+commit.1df8f40c.Emscripten.clang"
  },
  "networks": {
    "4": {
      "events": {
        "0x5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa2": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "token",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "pyroValue",
              "type": "uint256"
            }
          ],
          "name": "Burn",
          "type": "event",
          "signature": "0x5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa2"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event",
          "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
        }
      },
      "links": {},
      "address": "0x3d5726c8CFd711788605078C2B9b87D5BC7161A8",
      "transactionHash": "0xf0171487d6906aae1113694e33c4c9127a66df1b684a40e73dd666a789c465b7"
    },
    "1552086447832": {
      "events": {
        "0x5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa2": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "token",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "pyroValue",
              "type": "uint256"
            }
          ],
          "name": "Burn",
          "type": "event",
          "signature": "0x5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa2"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event",
          "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
        }
      },
      "links": {},
      "address": "0x9DEf4838426F3566D8a89d1365c42fC0cE98C937",
      "transactionHash": "0xa280a8c45c672774cadf93103b7bfb1e0ef0d0fc9a841a179bb363943ebf9be5"
    },
    "1552133966061": {
      "events": {
        "0x5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa2": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "token",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "pyroValue",
              "type": "uint256"
            }
          ],
          "name": "Burn",
          "type": "event",
          "signature": "0x5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa2"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event",
          "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
        }
      },
      "links": {},
      "address": "0xd9d13c15e853AeC32b40CBfb955aC93E4969CD94",
      "transactionHash": "0x1413b20cd18e833dbcbf71e6f0b502e5d07cb70ad2562ded1370c8dc2a6128db"
    },
    "1552138341556": {
      "events": {
        "0x5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa2": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "token",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "pyroValue",
              "type": "uint256"
            }
          ],
          "name": "Burn",
          "type": "event",
          "signature": "0x5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa2"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event",
          "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
        }
      },
      "links": {},
      "address": "0x2FB2f9D6e8187FB11124C8cA44E81E544f3C29CC",
      "transactionHash": "0x0d28dae609f8c1bdca6828cb6b4142ee9502cb6887f1cf558ffec09d0fbc8fed"
    }
  },
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-09T18:07:25.531Z",
  "devdoc": {
    "methods": {
      "isOwner()": {
        "return": "true if `msg.sender` is the owner of the contract."
      },
      "owner()": {
        "return": "the address of the owner."
      },
      "renounceOwnership()": {
        "details": "Allows the current owner to relinquish control of the contract."
      },
      "transferOwnership(address)": {
        "details": "Allows the current owner to transfer control of the contract to a newOwner.",
        "params": {
          "newOwner": "The address to transfer ownership to."
        }
      }
    }
  },
  "userdoc": {
    "methods": {
      "renounceOwnership()": {
        "notice": "Renouncing to ownership will leave the contract without an owner. It will not be possible to call the functions with the `onlyOwner` modifier anymore."
      }
    }
  }
}
