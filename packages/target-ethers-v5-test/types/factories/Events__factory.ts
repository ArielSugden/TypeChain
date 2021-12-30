/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Events, EventsInterface } from "../Events";

const _abi = [
  {
    anonymous: true,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "value1",
        type: "uint256",
      },
    ],
    name: "AnonEvent1",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "value1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value2",
        type: "uint256",
      },
    ],
    name: "Event1",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Event2",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bool",
        name: "value1",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value2",
        type: "uint256",
      },
    ],
    name: "Event3",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "value1",
        type: "uint256",
      },
    ],
    name: "Event3",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct Events.EventData",
        name: "data",
        type: "tuple",
      },
    ],
    name: "Event4",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "NoArgsEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    name: "UpdateFrequencySet",
    type: "event",
  },
  {
    inputs: [],
    name: "emit_anon1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emit_event1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emit_event2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emit_event3",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emit_event3_overloaded",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emit_event4",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class Events__factory {
  static readonly abi = _abi;
  static createInterface(): EventsInterface {
    return new utils.Interface(_abi) as EventsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Events {
    return new Contract(address, _abi, signerOrProvider) as Events;
  }
}
